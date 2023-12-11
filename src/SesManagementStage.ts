import { Stack, StackProps, Stage, StageProps, aws_ses as ses } from 'aws-cdk-lib';
import { HostedZone, IPublicHostedZone } from 'aws-cdk-lib/aws-route53';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { Configurable, EmailIdentityConfiguration } from './Configuration';
import { Statics } from './Statics';


export interface SesManagementStageProps extends StageProps, Configurable { }

export class SesManagementStage extends Stage {
  constructor(scope: Construct, id: string, props: SesManagementStageProps) {
    super(scope, id, props);

    // For each email identity deploy a stack
    props.configuration.emailIdentities.forEach(member => {
      new SesMemberAccountStack(this, `stack-${member.name}`, {
        env: member.accountEnvironment,
        configuration: member,
      });
    });

  }
}

interface SesMemberAccountStackProps extends StackProps {
  configuration: EmailIdentityConfiguration;
}

class SesMemberAccountStack extends Stack {
  constructor(scope: Construct, id: string, props: SesMemberAccountStackProps) {
    super(scope, id, props);
    new EmailIdentityConstruct(this, 'identity', {
      ...props.configuration,
    });
  }
}

class EmailIdentityConstruct extends Construct {
  constructor(scope: Construct, id: string, props: EmailIdentityConfiguration) {
    super(scope, id);

    if (props.isAccountDomain) {
      // Import the account hosted zone
      const accountRootZoneId = StringParameter.valueForStringParameter(this, Statics.accountRootHostedZoneId);
      const accountRootZoneName = StringParameter.valueForStringParameter(this, Statics.accountRootHostedZoneName);
      const accountHostedZone = HostedZone.fromHostedZoneAttributes(this, 'hostedzone', {
        hostedZoneId: accountRootZoneId,
        zoneName: accountRootZoneName,
      });
      new ses.EmailIdentity(this, 'email', {
        identity: ses.Identity.publicHostedZone(accountHostedZone as IPublicHostedZone), // Do some type hacking
      });
    } else {
      if (!props.emailDomain) {
        throw Error(`Provide a emailDomain for the identity ${props.name}, as this is a non account hosted zone interfed domain name`);
      }
      console.warn('Note: DKIM records must be manually added to DNS!!');
      new ses.EmailIdentity(this, 'email', {
        identity: ses.Identity.domain(props.emailDomain),
        mailFromDomain: props.emailDomain,
      });
    }

    // TODO check if it is usefull to export: EmailIdentity.emailIdentityName

  }
}