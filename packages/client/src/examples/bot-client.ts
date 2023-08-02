import { Client } from '../index'
import { EnumerateActions } from '../types/functions'

type GithubFetchIssueInputSchema = { issueId: string }
type GithubFetchIssueOutputSchema = { title: string; description: string }
type LinearCreateIssueInputSchema = { title: string; description: string; priority: number }
type LinearCreateIssueOutputSchema = { issueId: string }
type LinearMoveIssueInputSchema = { issueId: string; column: string }
type LinearMoveIssueOutputSchema = {}
export type BotClient = {
  type: 'bot'
  integrations: {
    github: {
      name: 'github'
      version: '1.0.0'
      configuration: { schema: any }
      events: {}
      channels: {}
      states: {}
      actions: {
        fetchIssue: {
          input: { schema: GithubFetchIssueInputSchema }
          output: { schema: GithubFetchIssueOutputSchema }
        }
      }
    }
    linear: {
      name: 'linear'
      version: '1.0.0'
      configuration: { schema: any }
      events: {}
      channels: {}
      states: {}
      actions: {
        createIssue: {
          input: { schema: LinearCreateIssueInputSchema }
          output: { schema: LinearCreateIssueOutputSchema }
        }
        moveIssue: {
          input: { schema: LinearMoveIssueInputSchema }
          output: { schema: LinearMoveIssueOutputSchema }
        }
      }
    }
  }
  events: {}
  states: {}
}

type _AvailableActions = EnumerateActions<BotClient>

const botClient = new Client<BotClient>()

void botClient
  .callAction({
    type: 'linear:createIssue',
    input: { description: '', priority: 1, title: '' },
  })
  .then(({ output }) => {
    output.issueId
  })

void botClient
  .callAction({
    type: 'github:fetchIssue',
    input: { issueId: '' },
  })
  .then(({ output }) => {
    output.description
    output.title
  })
