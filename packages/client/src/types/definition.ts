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

export type StateDefinition = {
  type: 'bot' | 'conversation' | 'user'
  schema: Schema
}

export type IntegrationDefinition = {
  events: Record<string, EventDefinition>
  actions: Record<string, ActionDefinition>
  channels: Record<string, ChannelDefinition>
  states: Record<string, StateDefinition>
}

export type ClientDefinition = {
  integrations: Record<string, IntegrationDefinition> | null
  events: Record<string, EventDefinition> | null
  actions: Record<string, ActionDefinition> | null
  channels: Record<string, ChannelDefinition> | null
  states: Record<string, StateDefinition> | null
}

export type DefaultClientDefinition = {
  integrations: null
  events: null
  actions: null
  channels: null
  states: null
}
