import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.148.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'awscdk-construct-input-switch-scheduler',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-input-switch-scheduler.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaLive',
    'Lambda',
    'EventBridge',
  ],
  license: 'MIT',
  licensed: true,

  deps: ['aws-cdk-lib', 'constructs'],
  bundledDeps: ['@aws-sdk/client-medialive'],
  description: 'AWS CDK Construct for scheduling input switch of MediaLive',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
