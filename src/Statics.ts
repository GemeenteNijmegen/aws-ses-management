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
  static readonly AWS_ACCOUNT_SANDBOX_01 = '833119272131';
  static readonly AWS_ACCOUNT_SOCIALE_RECHERCHE_ACCP = '543802458112';
  static readonly AWS_ACCOUNT_SOCIALE_RECHERCHE_PROD = '958875843009';
  static readonly AWS_ACCOUNT_SUBMISSION_STORAGE_DEV = '358927146986';
  static readonly AWS_ACCOUNT_SUBMISSION_STORAGE_ACCP = '654654253219';
  static readonly AWS_ACCOUNT_SUBMISSION_STORAGE_PROD = '606343885688';
  static readonly AWS_ACCOUNT_OPEN_FORMS_ACCP = '043309345347';
  static readonly AWS_ACCOUNT_OPEN_FORMS_PROD = '761018864362';

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

  static readonly gnSandbox01Environment = {
    account: Statics.AWS_ACCOUNT_SANDBOX_01,
    region: 'eu-central-1',
  };

  static readonly gnSocialeRechercheAccp = {
    account: Statics.AWS_ACCOUNT_SOCIALE_RECHERCHE_ACCP,
    region: 'eu-central-1',
  };

  static readonly gnSocialeRechercheProd = {
    account: Statics.AWS_ACCOUNT_SOCIALE_RECHERCHE_PROD,
    region: 'eu-central-1',
  };

  static readonly gnSubmissionStorageDev = {
    account: Statics.AWS_ACCOUNT_SUBMISSION_STORAGE_DEV,
    region: 'eu-central-1',
  };

  static readonly gnSubmissionStorageAccp = {
    account: Statics.AWS_ACCOUNT_SUBMISSION_STORAGE_ACCP,
    region: 'eu-central-1',
  };

  static readonly gnSubmissionStorageProd = {
    account: Statics.AWS_ACCOUNT_SUBMISSION_STORAGE_PROD,
    region: 'eu-central-1',
  };

  static readonly gnOpenFormsAccp = {
    account: Statics.AWS_ACCOUNT_OPEN_FORMS_ACCP,
    region: 'eu-central-1',
  };

  static readonly gnOpenFormsProd = {
    account: Statics.AWS_ACCOUNT_OPEN_FORMS_PROD,
    region: 'eu-central-1',
  };

}