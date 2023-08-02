import { ActionDefinition, BotDefinition, ClientDefinition, IntegrationDefinition } from './definition'
import type * as utils from './utils'

export type EnumerateActions<T extends ClientDefinition> = T extends BotDefinition
  ? FlattenIntegration<T, 'actions'>
  : T extends IntegrationDefinition
  ? Record<string, never>
  : Record<string, ActionDefinition>

type FlattenIntegration<T extends BotDefinition, Prop extends keyof IntegrationDefinition> = utils.UnionToIntersection<
  {
    [IntegrationName in keyof T['integrations']]: {
      [ActionName in keyof T['integrations'][IntegrationName][Prop] as utils.Join<
        [IntegrationName, ':', ActionName]
      >]: T['integrations'][IntegrationName][Prop][ActionName]
    }
  }[keyof T['integrations']]
>
