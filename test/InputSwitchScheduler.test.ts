import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Lambda, EventBridgeSchedule, InputSwitchScheduler } from '../src';

test('Create Lambda', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new Lambda(stack, 'Lambda', {
    channelId: '12345',
    inputAttachments: ['input1', 'input2'],
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
});

test('Create EventBridgeSchedule', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new EventBridgeSchedule(stack, 'EventBridgeSchedule', {
    func: new Lambda(stack, 'Lambda', {
      channelId: '12345',
      inputAttachments: ['input1', 'input2'],
    }).func,
    intervalInSeconds: 60,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Events::Rule', 1);
});

test('Create ScteScheduler', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new InputSwitchScheduler(stack, 'ScteScheduler', {
    channelId: '12345',
    inputAttachments: ['input1', 'input2'],
    intervalInMinutes: 1,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
  template.hasResource('AWS::Events::Rule', 1);
});