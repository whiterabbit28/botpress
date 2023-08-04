import { IntegrationDefinitionProps } from '../integration/definition'
import { AnyZodObject } from '../type-utils'

type BaseConfig = AnyZodObject
type BaseEvents = Record<string, AnyZodObject>
type BaseActions = Record<string, Record<'input' | 'output', AnyZodObject>>
type BaseChannels = Record<string, Record<string, AnyZodObject>>
type BaseStates = Record<string, AnyZodObject>

export type IntegrationInstanceDefinition<
  TConfig extends BaseConfig = BaseConfig,
  TEvents extends BaseEvents = BaseEvents,
  TActions extends BaseActions = BaseActions,
  TChannels extends BaseChannels = BaseChannels,
  TStates extends BaseStates = BaseStates
> = Pick<
  IntegrationDefinitionProps<TConfig, TEvents, TActions, TChannels, TStates>,
  'configuration' | 'events' | 'actions' | 'channels' | 'states' | 'user'
>

export type IntegrationInstance = {
  id: string
  enabled?: boolean
  configuration?: Record<string, any>
}

export type InstalledIntegration = IntegrationInstance & {
  name: string
  version: string
  definition: IntegrationInstanceDefinition
}
