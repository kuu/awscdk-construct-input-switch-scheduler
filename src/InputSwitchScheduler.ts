import { Construct } from 'constructs';
import { EventBridgeSchedule } from './EventBridgeSchedule';
import { Lambda } from './Lambda';

export interface InputSwitchSchedulerProps {
  readonly channelId: string; // MediaLive channel ID
  readonly inputAttachments: string[]; // List of the name of the input attachments
  readonly intervalInMinutes: number; // Interval in minutes to switch inputs
}

export class InputSwitchScheduler extends Construct {
  public readonly lambda: Lambda;
  public readonly schedule: EventBridgeSchedule;

  constructor(scope: Construct, id: string, props: InputSwitchSchedulerProps) {
    super(scope, id);

    const { channelId, inputAttachments, intervalInMinutes } = props;

    // Create Lambda function to insert SCTE message using the MediaLive schedule API
    this.lambda = new Lambda(this, 'LambdaFunction', {
      channelId,
      inputAttachments,
    });

    // Create EventBridge rule to invoke the Lambda function every N minutes
    this.schedule = new EventBridgeSchedule(this, 'EventBridgeSchedule', {
      func: this.lambda.func,
      intervalInSeconds: intervalInMinutes * 60,
    });
  }
}