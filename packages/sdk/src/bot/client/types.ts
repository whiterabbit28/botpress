import { Cast, Join, StringEquals } from '../../type-utils'
import { BotProps } from '../implementation'
import { InstalledIntegration, IntegrationInstanceDefinition } from '../integration-instance'

type Def<T> = NonNullable<T>

export type UserDefinition = Def<BotProps['user']>
export type ConversationDefinition = Def<BotProps['conversation']>
export type MessageDefinition = Def<BotProps['message']>
export type ConfigurationDefinition = Def<BotProps['configuration']>
export type StateDefinition = Def<BotProps['states']>[string]
export type EventDefinition = Def<BotProps['events']>[string]
export type RecurringEventDefinition = Def<BotProps['recurringEvents']>[string]

export type IntegrationConfigurationDefinition = Def<IntegrationInstanceDefinition['configuration']>
export type IntegrationEventDefinition = Def<IntegrationInstanceDefinition['events']>[string]
export type IntegrationActionDefinition = Def<IntegrationInstanceDefinition['actions']>[string]
export type IntegrationChannelDefinition = Def<IntegrationInstanceDefinition['channels']>[string]
export type IntegrationStateDefinition = Def<IntegrationInstanceDefinition['states']>[string]
export type IntegrationUserDefinition = Def<IntegrationInstanceDefinition['user']>

export type GetStateByName<Bot extends BotProps, StateName extends keyof Bot['states']> = Cast<
  Bot['states'][StateName],
  StateDefinition
>

type _FindIntegrationByName<
  Integrations extends InstalledIntegration[],
  IntegrationName extends Integrations[number]['name']
> = Integrations extends [infer H, ...infer T]
  ? StringEquals<Cast<H, InstalledIntegration>['name'], IntegrationName> extends true
    ? H
    : _FindIntegrationByName<Cast<T, InstalledIntegration[]>, IntegrationName>
  : never
export type GetIntegrationByName<
  Bot extends BotProps,
  IntegrationName extends Def<Bot['integrations']>[number]['name']
> = Cast<_FindIntegrationByName<Def<Bot['integrations']>, IntegrationName>, InstalledIntegration>['definition']

type _ListBotUserTags<Bot extends BotProps> = keyof Def<Bot['user']>['tags']
type _ListIntegrationUserTags<
  Bot extends BotProps,
  IntegrationName extends Def<Bot['integrations']>[number]['name']
> = Join<[IntegrationName, ':', keyof Def<Def<GetIntegrationByName<Bot, IntegrationName>['user']>['tags']>]>
export type ListUserTags<
  Bot extends BotProps,
  IntegrationName extends Def<Bot['integrations']>[number]['name'] | null
> =
  | _ListBotUserTags<Bot>
  | (IntegrationName extends Def<Bot['integrations']>[number]['name']
      ? _ListIntegrationUserTags<Bot, IntegrationName>
      : never)

export type GetIntegrationActionByName<
  Bot extends BotProps,
  IntegrationName extends Def<Bot['integrations']>[number]['name'],
  ActionType extends keyof Def<GetIntegrationByName<Bot, IntegrationName>['actions']>
> = Cast<Def<GetIntegrationByName<Bot, IntegrationName>['actions']>[ActionType], IntegrationActionDefinition>

type _EnumerateActions<Integrations extends InstalledIntegration[]> = Integrations extends [infer H, ...infer T]
  ? {
      [ActionName in keyof Def<Cast<H, InstalledIntegration>['definition']['actions']> as Join<
        [Cast<H, InstalledIntegration>['name'], ':', ActionName]
      >]: Def<Cast<H, InstalledIntegration>['definition']['actions']>[ActionName]
    } & _EnumerateActions<Cast<T, InstalledIntegration[]>>
  : {}
export type EnumerateActions<Bot extends BotProps> = _EnumerateActions<Def<Bot['integrations']>>
