import {
  MediaLiveClient,
  DescribeScheduleCommand,
  BatchUpdateScheduleCommand,
  BatchScheduleActionCreateRequest,
  DeleteScheduleCommand,
} from '@aws-sdk/client-medialive';

const client = new MediaLiveClient({ region: process.env.REGION });

const CHANNEL_ID = process.env.CHANNEL_ID as string;
const OFFSET = 30;
const INPUT_ATTACHEMENTS = buildInputAttachments(process.env.INPUT_ATTACHEMENTS as string);

function buildInputAttachments(json: string): string[] {
  try {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Input attachments must be an array');
    }
    return arr;
  } catch (e) {
    console.error('Error parsing input attachments:', (e as Error).message);
  }
  return [];
}


// Lambda function to wtich inputs using the MediaLive schedule API
export async function handler() {
  const activeInput = await getActiveInput();
  const nextInput = findNextInputAttachment(activeInput);
  await deleteSchedules();
  const startTime = new Date(Date.now() + (OFFSET * 1000));
  await scheduleEvent(Math.floor(startTime.getTime() / 1000), startTime, nextInput);
}

async function getActiveInput(): Promise<string | undefined> {
  const command = new DescribeScheduleCommand({ ChannelId: CHANNEL_ID });
  const response = await client.send(command);
  if (!response.ScheduleActions?.length) {
    return undefined;
  }
  return response.ScheduleActions[response.ScheduleActions.length - 1]
    .ScheduleActionSettings?.InputSwitchSettings?.InputAttachmentNameReference;
}

function findNextInputAttachment(current: string | undefined): string {
  const index = current ? INPUT_ATTACHEMENTS.indexOf(current) : -1;
  if (index === -1) {
    return INPUT_ATTACHEMENTS[0];
  }
  return INPUT_ATTACHEMENTS[(index + 1) % INPUT_ATTACHEMENTS.length];
}

function deleteSchedules() {
  const command = new DeleteScheduleCommand({ ChannelId: CHANNEL_ID });
  return client.send(command);
}

async function scheduleEvent(eventId: number, start: Date, inputAttachmentName: string) {
  const inputSwitch = createInputSwitchCommand(eventId, start, inputAttachmentName);
  const command = new BatchUpdateScheduleCommand({ ChannelId: CHANNEL_ID, Creates: inputSwitch });
  const response = await client.send(command);
  console.log(JSON.stringify(response, null, 2));
}

function createInputSwitchCommand(eventId: number, start: Date, inputAttachmentName: string): BatchScheduleActionCreateRequest {
  return {
    ScheduleActions: [
      {
        ActionName: `InputSwitch_${eventId}`,
        ScheduleActionSettings: {
          InputSwitchSettings: {
            InputAttachmentNameReference: inputAttachmentName,
          },
        },
        ScheduleActionStartSettings: {
          FixedModeScheduleActionStartSettings: {
            Time: start.toISOString(),
          },
        },
      },
    ],
  };
}


