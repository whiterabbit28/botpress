import { Client } from '@botpress/client'
import { z } from 'zod'
import { Cast, Merge } from '../../type-utils'
import { BotProps } from '../implementation'
import { EnumerateActions, GetStateByName, IntegrationActionDefinition, ListUserTags } from './types'

type Arg<F extends (...args: any[]) => any> = Parameters<F>[number]
type Res<F extends (...args: any[]) => any> = ReturnType<F>
type Def<T> = NonNullable<T>

type AsTags<T extends Record<string, string | undefined>> = Cast<T, Record<string, string>>

export type CreateConversation<_Bot extends BotProps> = Client['createConversation']
export type GetConversation<_Bot extends BotProps> = Client['getConversation']
export type ListConversations<_Bot extends BotProps> = Client['listConversations']
export type GetOrCreateConversation<_Bot extends BotProps> = Client['getOrCreateConversation']
export type UpdateConversation<_Bot extends BotProps> = Client['updateConversation']
export type DeleteConversation<_Bot extends BotProps> = Client['deleteConversation']

export type CreateEvent<_Bot extends BotProps> = Client['createEvent']
export type GetEvent<_Bot extends BotProps> = Client['getEvent']
export type ListEvents<_Bot extends BotProps> = Client['listEvents']

export type CreateMessage<_Bot extends BotProps> = Client['createMessage']
export type GetOrCreateMessage<_Bot extends BotProps> = Client['getOrCreateMessage']
export type GetMessage<_Bot extends BotProps> = Client['getMessage']
export type UpdateMessage<_Bot extends BotProps> = Client['updateMessage']
export type ListMessages<_Bot extends BotProps> = Client['listMessages']
export type DeleteMessage<_Bot extends BotProps> = Client['deleteMessage']

export type CreateUser<Bot extends BotProps> = <IntegrationName extends Def<Bot['integrations']>[number]['name']>(
  x: Merge<
    Arg<Client['createUser']>,
    {
      integrationName: Cast<IntegrationName, string>
      tags: AsTags<Partial<Record<ListUserTags<Bot, IntegrationName>, string>>>
    }
  >
) => Res<Client['createUser']>

export type GetUser<_Bot extends BotProps> = Client['getUser']

export type ListUsers<Bot extends BotProps> = (
  x: Merge<
    Arg<Client['listUsers']>,
    {
      tags: AsTags<Partial<Record<ListUserTags<Bot, null>, string>>>
    }
  >
) => Res<Client['listUsers']>

export type GetOrCreateUser<Bot extends BotProps> = <IntegrationName extends Def<Bot['integrations']>[number]['name']>(
  x: Merge<
    Arg<Client['getOrCreateUser']>,
    {
      integrationName: Cast<IntegrationName, string>
      tags: AsTags<Partial<Record<ListUserTags<Bot, IntegrationName>, string>>>
    }
  >
) => Res<Client['getOrCreateUser']>

export type UpdateUser<Bot extends BotProps> = (
  x: Merge<
    Arg<Client['updateUser']>,
    {
      tags: AsTags<Partial<Record<ListUserTags<Bot, null>, string>>>
    }
  >
) => Res<Client['updateUser']>

export type DeleteUser<_Bot extends BotProps> = Client['deleteUser']

export type GetState<Bot extends BotProps> = <StateName extends keyof Bot['states']>(
  x: Merge<
    Arg<Client['getState']>,
    {
      name: Cast<StateName, string>
      type: GetStateByName<Bot, StateName>['type']
    }
  >
) => Res<Client['getState']>

export type SetState<Bot extends BotProps> = <StateName extends keyof Bot['states']>(
  x: Merge<
    Arg<Client['setState']>,
    {
      name: Cast<StateName, string>
      type: GetStateByName<Bot, StateName>['type']
      payload: z.infer<GetStateByName<Bot, StateName>['schema']>
    }
  >
) => Res<Client['setState']>

export type PatchState<Bot extends BotProps> = <StateName extends keyof Bot['states']>(
  x: Merge<
    Arg<Client['patchState']>,
    {
      name: Cast<StateName, string>
      type: GetStateByName<Bot, StateName>['type']
      payload: z.infer<GetStateByName<Bot, StateName>['schema']>
    }
  >
) => Res<Client['patchState']>

export type CallAction<Bot extends BotProps> = <ActionType extends keyof EnumerateActions<Bot>>(
  x: Merge<
    Arg<Client['callAction']>,
    {
      type: Cast<ActionType, string>
      input: z.infer<Cast<EnumerateActions<Bot>[ActionType], IntegrationActionDefinition>['input']['schema']>
    }
  >
) => Promise<{
  output: z.infer<Cast<EnumerateActions<Bot>[ActionType], IntegrationActionDefinition>['output']['schema']>
}>

// type Toto = 'toto' | 'titi' | 'tata' | 'tutu' | 'tete'
// type MyRecord = Partial<Record<Toto, string>>
// const _myRecord: MyRecord = {}

// type IsRecordOfString<T> = T extends Record<string, string> ? true : false
// type _Ok = IsRecordOfString<MyRecord>
