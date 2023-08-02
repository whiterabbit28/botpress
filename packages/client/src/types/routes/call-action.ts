import { ActionDefinition, ClientDefinition, IntegrationDefinition } from '../definition'
import type * as utils from '../utils'

type EnumerateActions<C extends ClientDefinition> = C['integrations'] extends Record<string, IntegrationDefinition>
  ? FlattenIntegration<C['integrations'], 'actions'>
  : Record<string, ActionDefinition>

type FlattenIntegration<
  I extends Record<string, IntegrationDefinition>,
  Prop extends keyof IntegrationDefinition
> = utils.UnionToIntersection<
  {
    [IntegrationName in keyof I]: {
      [ActionName in keyof I[IntegrationName][Prop] as utils.Join<
        [IntegrationName, ':', ActionName]
      >]: I[IntegrationName][Prop][ActionName]
    }
  }[keyof I]
>

// type GithubFetchIssueInputSchema = { issueId: string }
// type GithubFetchIssueOutputSchema = { title: string; description: string }
// type LinearCreateIssueInputSchema = { title: string; description: string; priority: number }
// type LinearCreateIssueOutputSchema = { issueId: string }
// type LinearMoveIssueInputSchema = { issueId: string; column: string }
// type LinearMoveIssueOutputSchema = {}
// type BotClient = {
//   integrations: {
//     github: {
//       name: 'github'
//       version: '1.0.0'
//       configuration: { schema: any }
//       events: {}
//       channels: {}
//       states: {}
//       actions: {
//         fetchIssue: {
//           input: { schema: GithubFetchIssueInputSchema }
//           output: { schema: GithubFetchIssueOutputSchema }
//         }
//       }
//     }
//     linear: {
//       name: 'linear'
//       version: '1.0.0'
//       configuration: { schema: any }
//       events: {}
//       channels: {}
//       states: {}
//       actions: {
//         createIssue: {
//           input: { schema: LinearCreateIssueInputSchema }
//           output: { schema: LinearCreateIssueOutputSchema }
//         }
//         moveIssue: {
//           input: { schema: LinearMoveIssueInputSchema }
//           output: { schema: LinearMoveIssueOutputSchema }
//         }
//       }
//     }
//   }
//   events: {}
//   channels: null
//   actions: null
//   states: {}
// }
// type Lol = EnumerateActions<BotClient>

export type CallAction<C extends ClientDefinition> = <A extends keyof EnumerateActions<C>>(x: {
  type: A
  input: utils.Cast<EnumerateActions<C>[A], ActionDefinition>['input']['schema']
}) => Promise<{ output: utils.Cast<EnumerateActions<C>[A], ActionDefinition>['output']['schema'] }>
