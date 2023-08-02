import { Client } from '../index'

type GithubFetchIssueInputSchema = { issueId: string }
type GithubFetchIssueOutputSchema = { title: string; description: string }
export type IntegrationClient = {
  integrations: null
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

const integrationClient = new Client<IntegrationClient>()

void integrationClient.callAction({
  type: 'fetchIssue',
  input: {},
})
