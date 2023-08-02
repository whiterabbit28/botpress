export type Schema = Record<string, any>

export type ConfigurationDefinition = {
  schema: Schema
}

export type EventDefinition = {
  schema: Schema
}

export type ActionDefinition = {
  input: { schema: Schema }
  output: { schema: Schema }
}

export type MessageDefinition = {
  schema: Schema
}

export type TagDefinition = Record<string, never>

export type ChannelDefinition = {
  messages: Record<string, MessageDefinition>
  message: {
    tags: Record<string, TagDefinition>
  }
  conversation: {
    tags: Record<string, TagDefinition>
    creation: {
      enabled: boolean
      requiredTags: string[]
    }
  }
}

export type IntegrationStateDefinition = {
  type: 'integration' | 'conversation' | 'user'
  schema: Schema
}

export type BotStateDefinition = {
  type: 'bot' | 'conversation' | 'user'
  schema: Schema
}

export type IntegrationDefinition = {
  events: Record<string, EventDefinition>
  actions: Record<string, ActionDefinition>
  channels: Record<string, ChannelDefinition>
  states: Record<string, IntegrationStateDefinition>
}

export type BotDefinition = {
  integrations: Record<string, IntegrationDefinition>
  events: Record<string, EventDefinition>
  states: Record<string, BotStateDefinition>
}

export type ClientDefinition =
  | ({ type: 'bot' } & BotDefinition)
  | ({ type: 'integration' } & IntegrationDefinition)
  | { type: undefined }
