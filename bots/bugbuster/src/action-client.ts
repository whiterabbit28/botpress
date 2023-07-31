import { Integration as ApiIntegration, Client } from '@botpress/client'
import { FromSchema } from 'json-schema-to-ts'
import { linear } from './integrations.example'

export class ActionClient<Integration extends ApiIntegration> {
  public constructor(private integrationName: Integration['name'], private client: Client) {}

  public async call<T extends keyof Integration['actions']>(x: {
    type: T
    input: FromSchema<Integration['actions'][T]['input']['schema']>
  }): Promise<FromSchema<Integration['actions'][T]['output']['schema']>> {
    const { output } = await this.client.callAction({
      type: `${this.integrationName}:${String(x.type)}`,
      input: x.input,
    })

    return output
  }
}

const client = new Client({ botId: 'bugbuster', token: 'secret' })
const actionClient = new ActionClient<typeof linear>('github', client)

void actionClient.call({
  type: 'createIssue',
  input: {},
})
