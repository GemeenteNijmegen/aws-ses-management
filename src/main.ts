import { App } from 'aws-cdk-lib';
import { getConfiguration } from './Configuration';
import { PipelineStack } from './pipeline-stack';

const buildBranch = process.env.BRANCH_NAME ?? 'main';
console.log('Building branch', buildBranch);
const configuration = getConfiguration(buildBranch);

const app = new App();

new PipelineStack(app, `ses-management-pipeline-stack-${configuration.branchName}`, {
  env: configuration.buildEnvironment,
  configuration: configuration,
});

app.synth();