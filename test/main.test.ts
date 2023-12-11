import { App } from 'aws-cdk-lib';
import { SesMemberAccountStack } from '../src/SesManagementStage';

test('Configuration EmailIdentityConstruct', () => {
  const app = new App();

  // Should succeed ->
  expect(() => new SesMemberAccountStack(app, 'test', {
    configuration: {
      accountEnvironment: {
        account: '',
        region: 'eu-west-1',
      },
      isAccountDomain: true,
      name: 'test',
    },
  })).not.toThrow();

  // Should throw error -> missing domain
  expect(() => new SesMemberAccountStack(app, 'test2', {
    configuration: {
      accountEnvironment: {
        account: '',
        region: 'eu-west-1',
      },
      isAccountDomain: false,
      emailDomain: undefined, // triggers errors
      name: 'test',
    },
  })).toThrow();

  // Should throw error -> missing mail from domain
  expect(() => new SesMemberAccountStack(app, 'test3', {
    configuration: {
      accountEnvironment: {
        account: '',
        region: 'eu-west-1',
      },
      isAccountDomain: false,
      emailDomain: 'csp-nijmegen.nl',
      emailFromDomain: undefined, // triggers errors
      name: 'test',
    },
  })).toThrow();

  // Should succeed
  expect(() => new SesMemberAccountStack(app, 'test4', {
    configuration: {
      accountEnvironment: {
        account: '',
        region: 'eu-west-1',
      },
      isAccountDomain: false,
      emailDomain: 'csp-nijmegen.nl',
      emailFromDomain: 'mail.csp-nijmegen.nl', // triggers errors
      name: 'test',
    },
  })).not.toThrow();

});