import { PermissionsBoundaryAspect } from '@gemeentenijmegen/aws-constructs';
import {
  Aspects,
  Stack,
  StackProps,
  Tags,
  pipelines,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Configurable } from './Configuration';
import { SesManagementStage } from './SesManagementStage';
import { Statics } from './Statics';


export interface PipelineStackProps extends StackProps, Configurable {}

export class PipelineStack extends Stack {

  branchName: string;

  constructor(scope: Construct, id: string, props: PipelineStackProps) {
    super (scope, id, props);
    Tags.of(this).add('cdkManaged', 'yes');
    Tags.of(this).add('project', Statics.projectName);
    Aspects.of(this).add(new PermissionsBoundaryAspect());

    this.branchName = props.configuration.branchName;

    const pipeline = this.pipeline(props);

    pipeline.addStage(this.sesManagementStage(props));
  }

  sesManagementStage(props: PipelineStackProps) {
    const stage = new SesManagementStage(this, 'ses-managment', {
      configuration: props.configuration,
    });

    return stage;
  }

  pipeline(props: PipelineStackProps): pipelines.CodePipeline {
    const source = pipelines.CodePipelineSource.connection(Statics.projectRepo, this.branchName, {
      connectionArn: props.configuration.codeStarConnectionArn,
    });

    const pipeline = new pipelines.CodePipeline(this, `ses-management-pipeline-${this.branchName}`, {
      pipelineName: `ses-management-${this.branchName}`,
      crossAccountKeys: true,
      synth: new pipelines.ShellStep('Synth', {
        input: source,
        env: {
          BRANCH_NAME: this.branchName,
        },
        commands: [
          'yarn install --frozen-lockfile',
          'yarn build',
        ],
      }),
    });
    return pipeline;
  }
}