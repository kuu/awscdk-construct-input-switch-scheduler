# awscdk-construct-input-switch-scheduler
[![View on Construct Hub](https://constructs.dev/badge?awscdk-construct-input-switch-scheduler)](https://constructs.dev/packages/awscdk-construct-input-switch-scheduler)

CDK Construct for scheduling input switch of MediaLive
* Input:
  * MediaLive channel id
  * List of input attachements to be switched in a toggle manner
  * Switch interval (minutes)
* Output:
  * Lambda function for calling MediaLive schedule API
  * EventBridge rule for periodically invoking the function

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-input-switch-scheduler.png?mini=true)](https://nodei.co/npm/awscdk-construct-input-switch-scheduler/)

## Usage
```ts
import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';
import { InputSwitchScheduler } from 'awscdk-construct-input-switch-scheduler';

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a live channel (MediaLive + MediaPackage)
    const {eml, empv1: emp} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      sourceUrl: 's3ssl://example_bucket/test.mp4',
      timecodeBurninPrefix: 'Ch1',
      autoStart: true,
    });

    // Perform input switch every 15 minutes
    new InputSwitchScheduler(this, 'InputSwitchScheduler', {
      channelId: eml.channel.ref,
      inputAttachments: eml.channel.inputAttachments?.map(({inputAttachmentName}) => inputAttachmentName),
      intervalInMinutes: 15,
    });

    // Print MediaPackage endpoint URL (HLS)
    new CfnOutput(this, "MediaPackageEndpointURL", {
      value: emp.endpoints.hls.attrUrl,
      exportName: "MediaPackageEndpointURL",
      description: "MediaPackage endpoint URL",
    });
  }
}
```
