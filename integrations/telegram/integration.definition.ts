import { IntegrationDefinition } from '@botpress/sdk'
import { sentry as sentryHelpers } from '@botpress/sdk-addons'
import { channels } from 'src/definitions'
import { z } from 'zod'

export default new IntegrationDefinition({
  name: 'telegram',
  version: '0.2.0',
  title: 'Telegram',
  description: 'This integration allows your bot to interact with Telegram.',
  icon: 'icon.svg',
  readme: 'readme.md',
  configuration: {
    schema: z.object({
      botToken: z.string(),
    }),
  },
  channels,
  actions: {},
  events: {},
  secrets: [...sentryHelpers.COMMON_SECRET_NAMES],
  user: {
    tags: {
      id: {},
    },
    creation: { enabled: true, requiredTags: ['id'] },
  },
})
