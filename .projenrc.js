const { GemeenteNijmegenCdkApp } = require('@gemeentenijmegen/projen-project-type');
const project = new GemeenteNijmegenCdkApp({
  cdkVersion: '2.1.0',
  name: 'aws-ses-management',
  repository: 'https://github.com/GemeenteNijmegen/aws-ses-management.git',
  defaultReleaseBranch: 'main',
  devDeps: ['@gemeentenijmegen/projen-project-type'],
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'], // No acceptance branch
    },
  },

  deps: [
    '@gemeentenijmegen/aws-constructs',
  ],
});
project.synth();