import { GemeenteNijmegenCdkApp } from '@gemeentenijmegen/projen-project-type';
const project = new GemeenteNijmegenCdkApp({
  cdkVersion: '2.1.0',
  name: 'aws-ses-management',
  repository: 'https://github.com/GemeenteNijmegen/aws-ses-management.git',
  defaultReleaseBranch: 'main',
  devDeps: [],
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'], // No acceptance branch
    },
  },
  projenrcTs: true,
  deps: [
    '@gemeentenijmegen/aws-constructs',
    '@gemeentenijmegen/projen-project-type',
  ],
});
project.synth();