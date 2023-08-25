/**
 * Class with only static strings for naming of ssm paramaters
 * and re-use in stacks and constructs
 */
export class Statics {
  static readonly projectName = 'aws-ses-management';
  static readonly projectRepo = 'GemeenteNijmegen/aws-ses-management';

  // Shared accounts
  static readonly AWS_ACCOUNT_GN_BUILD = '836443378780';
  // Member accounts
  static readonly AWS_ACCOUNT_WEBFORMS_DEV = '033598396027';
  static readonly AWS_ACCOUNT_WEBFORMS_ACCP = '338472043295';
  static readonly AWS_ACCOUNT_WEBFORMS_PROD = '147064197580';

  // Pipelien values
  static readonly gnBuildCodeStarConnectionArn = 'arn:aws:codestar-connections:eu-central-1:836443378780:connection/9d20671d-91bc-49e2-8680-59ff96e2ab11';


  // SSM parameter names
  static readonly accountRootHostedZoneId = '/gemeente-nijmegen/account/hostedzone/id';
  static readonly accountRootHostedZoneName = '/gemeente-nijmegen/account/hostedzone/name';

  // ENVIRONMENTS

  static readonly gnBuildEnvironment = {
    account: Statics.AWS_ACCOUNT_GN_BUILD,
    region: 'eu-central-1',
  };

  static readonly gnWebformsDevEnvironment = {
    account: Statics.AWS_ACCOUNT_WEBFORMS_DEV,
    region: 'eu-central-1',
  };

  static readonly gnWebformsAccpEnvironment = {
    account: Statics.AWS_ACCOUNT_WEBFORMS_ACCP,
    region: 'eu-central-1',
  };

  static readonly gnWebformsProdEnvironment = {
    account: Statics.AWS_ACCOUNT_WEBFORMS_PROD,
    region: 'eu-central-1',
  };


}