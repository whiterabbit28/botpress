import type { Conversation } from '../../gen'
import type { ChannelDefinition, ClientDefinition, IntegrationDefinition } from '../definition'
import type * as utils from '../utils'

type IntegrationKey<C extends ClientDefinition> = C['integrations'] extends Record<string, any>
  ? keyof C['integrations']
  : undefined

type BotChannelKey<
  Client extends { integrations: Record<string, IntegrationDefinition> },
  Integration extends keyof Client['integrations']
> = keyof utils.Cast<Client['integrations'][Integration], IntegrationDefinition>['channels']

type IntegrationChannelKey<C extends { channels: Record<string, ChannelDefinition> }> = keyof C['channels']

type ChannelKey<
  Client extends ClientDefinition,
  Integration extends IntegrationKey<Client>
> = Integration extends undefined
  ? IntegrationChannelKey<utils.Cast<Client, { channels: Record<string, ChannelDefinition> }>>
  : BotChannelKey<
      utils.Cast<Client, { integrations: Record<string, IntegrationDefinition> }>,
      utils.Cast<Integration, keyof Client['integrations']>
    >

// type TagsKey<C extends ClientDefinition, I extends IntegrationKey<C>, C extends ChannelKey<C, I>> = I extends undefined

export type CreateConversation<Client extends ClientDefinition> = <
  Integration extends IntegrationKey<Client>,
  Channel extends ChannelKey<Client, Integration>
>(x: {
  integrationName: Integration
  channel: Channel
  tags: Record<string, never>
}) => Promise<{
  conversation: Conversation
}>
