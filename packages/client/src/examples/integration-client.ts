import { Client } from '../index'
import { EnumerateActions } from '../types/functions'

type GithubFetchIssueInputSchema = { issueId: string }
type GithubFetchIssueOutputSchema = { title: string; description: string }
export type IntegrationClient = {
  type: 'integration'
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

type _AvailableActions = EnumerateActions<IntegrationClient>

const integrationClient = new Client<IntegrationClient>()

void integrationClient.callAction({
  type: 'fetchIssue',
  input: {},
})
