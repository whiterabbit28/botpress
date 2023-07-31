import { Client } from './index'

type GithubFetchIssueInputSchema = { issueId: string }
type GithubFetchIssueOutputSchema = { title: string; description: string }
type LinearCreateIssueInputSchema = { title: string; description: string; priority: number }
type LinearCreateIssueOutputSchema = { issueId: string }
export type MyClient = {
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
      }
    }
  }
}

const client = new Client<MyClient>()

void client
  ._callAction({
    type: 'linear:createIssue',
    input: { description: '', priority: 1, title: '' },
  })
  .then(({ output }) => {
    output.issueId
  })

void client
  ._callAction({
    type: 'github:fetchIssue',
    input: { issueId: '' },
  })
  .then(({ output }) => {
    output.description
    output.title
  })
