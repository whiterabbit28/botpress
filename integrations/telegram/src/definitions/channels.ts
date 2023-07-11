import { IntegrationDefinitionProps, messages as baseMessages } from '@botpress/sdk'
import { z } from 'zod'
import { payloadSchema } from './schemas'

const messages = {
  ...baseMessages.defaults,
  raw: {
    schema: z.object({ payloads: payloadSchema }).passthrough(),
  },
}

export const channels = {
  channel: {
    messages,
    message: { tags: { id: {} } },
    conversation: {
      tags: { id: {} },
      creation: { enabled: true, requiredTags: ['id'] },
    },
  },
} satisfies IntegrationDefinitionProps['channels']
