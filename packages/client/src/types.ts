type Schema = object

type ConfigurationDefinition = {
  schema: Schema
}

type EventDefinition = {
  schema: Schema
}

export type ActionDefinition = {
  input: { schema: Schema }
  output: { schema: Schema }
}

type MessageDefinition = {
  schema: Schema
}

type TagDefinition = Record<string, never>

type ChannelDefinition = {
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

type StateDefinition = {
  type: 'integration' | 'conversation' | 'user'
  schema: Schema
}

type InstalledIntegration = {
  name: string
  version: string
  configuration: ConfigurationDefinition
  events: Record<string, EventDefinition>
  actions: Record<string, ActionDefinition>
  channels: Record<string, ChannelDefinition>
  states: Record<string, StateDefinition>
}

export type TClient = {
  integrations: Record<string, InstalledIntegration>
}

// utils

export type Cast<T, U> = T extends U ? T : U
type Join<S extends (string | number | symbol)[]> = S extends [infer H, ...infer T]
  ? `${Cast<H, string>}${Join<Cast<T, string[]>>}`
  : S extends [infer Last]
  ? Cast<Last, string>
  : ''

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export type EnumerateActions<T extends TClient> = UnionToIntersection<
  {
    [Integration in keyof T['integrations']]: {
      [Action in keyof T['integrations'][Integration]['actions'] as Join<
        [Integration, ':', Action]
      >]: T['integrations'][Integration]['actions'][Action]
    }
  }[keyof T['integrations']]
>
