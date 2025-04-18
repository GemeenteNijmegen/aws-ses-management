import { Statics } from './Statics';

/**
 * Custom Environment with obligatory accountId and region
 */
export interface Environment {
  account: string;
  region: string;
}

export interface Configurable {
  configuration: Configuration;
}

export interface Configuration {
  /**
   * The git branch name to which this configuration applies.
   */
  branchName: string;

  /**
   * Code star connection arn in the deployment environment
   */
  codeStarConnectionArn: string;

  /**
   * Build environment
   */
  buildEnvironment: Environment;

  /**
   * Member account configuration
   */
  emailIdentities: EmailIdentityConfiguration[];

}

export interface EmailIdentityConfiguration {
  /**
   * Appended to the stackname
   */
  name: string;

  /**
   * The member account environment to deploy the email identity to
   */
  accountEnvironment: Environment;

  /**
   * The domain for which to create a verifiyed identity
   * Only required for non account domains
   */
  emailDomain?: string;

  /**
   * The domain to use for sending mails (MAIL FROM in aws console)
   * Note: emailFromDomain must be a subdomain of emailDomain!
   * Only required for non account domains.
   */
  emailFromDomain?: string;

  /**
   * Only setup email for the account hostedzone
   * E.g. webforms-dev.csp-nijmegen.nl
   * Set to false for registering an additional additional email
   * If set to false one has to manually add the DKIM records to the corresponding DNS
   * If set to true emailDomain will be ignored.
   */
  isAccountDomain: boolean;
}

export const configurations: { [key: string]: Configuration } = {
  main: {
    branchName: 'main',
    codeStarConnectionArn: Statics.gnBuildCodeStarConnectionArn,
    buildEnvironment: Statics.gnBuildEnvironment,
    emailIdentities: [
      {
        name: 'webforms-dev',
        accountEnvironment: Statics.gnWebformsDevEnvironment,
        isAccountDomain: true,
      },
      {
        name: 'webforms-accp',
        accountEnvironment: Statics.gnWebformsAccpEnvironment,
        isAccountDomain: true,
      },
      {
        name: 'webforms-prod-nijmegen',
        accountEnvironment: Statics.gnWebformsProdEnvironment,
        isAccountDomain: false,
        emailDomain: 'nijmegen.nl',
        emailFromDomain: 'amazonses.nijmegen.nl',
      },
      {
        name: 'sandbox-01-nijmegen',
        accountEnvironment: Statics.gnSandbox01Environment,
        isAccountDomain: true,
      },
      {
        name: 'sociale-recherche-accp',
        accountEnvironment: Statics.gnSocialeRechercheAccp,
        isAccountDomain: true,
      },
      {
        name: 'sociale-recherche-prod',
        accountEnvironment: Statics.gnSocialeRechercheProd,
        isAccountDomain: true,
      },
      {
        name: 'submission-storage-dev',
        accountEnvironment: Statics.gnSubmissionStorageDev,
        isAccountDomain: true,
      },
      {
        name: 'submission-storage-accp',
        accountEnvironment: Statics.gnSubmissionStorageAccp,
        isAccountDomain: true,
      },
      {
        name: 'submission-storage-prod',
        accountEnvironment: Statics.gnSubmissionStorageProd,
        isAccountDomain: true,
      },
      {
        name: 'open-formulieren-accp',
        accountEnvironment: Statics.gnOpenFormsAccp,
        isAccountDomain: true,
      },
      {
        name: 'open-formulieren-prod',
        accountEnvironment: Statics.gnOpenFormsProd,
        isAccountDomain: true,
      },
    ],
  },
};

export function getConfiguration(buildBranch: string) {
  const config = configurations[buildBranch];
  if (!config) {
    throw Error(`No configuration for branch ${buildBranch} found. Add a configuration in Configuration.ts`);
  }
  return config;
}