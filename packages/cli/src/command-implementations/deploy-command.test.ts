import * as mock from 'ts-mockito'
import * as utils from '../utils'
import { ApiClient, ApiClientFactory } from '../api-client'
import { test, expect, beforeEach, describe, afterEach } from 'vitest'
import { DeployCommand } from './deploy-command'
import { projectArgv, stubLogger } from './command.utils.test'
import * as tmp from 'tmp'
import * as uuid from 'uuid'
import * as fs from 'fs'
import { LoginCommand } from './login-command'
import { InitCommand } from './init-command'
import { Client, ResourceNotFoundError } from '@botpress/client'

describe('DeployCommand', () => {
  let botpressHome: tmp.DirResult
  let cliRoot: tmp.DirResult

  beforeEach(() => {
    botpressHome = tmp.dirSync({ unsafeCleanup: true })
    cliRoot = tmp.dirSync({ unsafeCleanup: true })
  })

  afterEach(() => {
    botpressHome.removeCallback()
    cliRoot.removeCallback()
  })

  test('deploy should build and call create integration of the API', async () => {
    const clientMock = mock.mock(Client)
    mock.when(clientMock.listBots(mock.anything())).thenResolve({ bots: [], meta: {} })
    mock.when(clientMock.getIntegrationByName(mock.anything())).thenReject(new ResourceNotFoundError(''))
    mock.when(clientMock.getPublicIntegration(mock.anything())).thenReject(new ResourceNotFoundError(''))
    mock.when(clientMock.createIntegration(mock.anything())).thenResolve({
      integration: {
        id: uuid.v4(),
        name: 'my-integration',
        title: 'My Integration',
        dev: false,
        iconUrl: '',
        readmeUrl: '',
        states: {},
        user: { tags: {}, creation: { enabled: false, requiredTags: [] } },
        version: '1.0.0',
        description: '',
        actions: {},
        channels: {},
        configuration: { schema: {} },
        events: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    })
    const client = mock.instance(clientMock)

    const apiClient = new ApiClient({ apiUrl: 'apiurl', token: 'token', workspaceId: 'workspaceid' }, stubLogger)
    const spiedApiClient = mock.spy(apiClient)
    mock.when(spiedApiClient.client).thenReturn(client)

    const promptMock = mock.mock(utils.prompt.CLIPrompt)
    mock.when(promptMock.confirm(mock.anything())).thenResolve(true)
    const prompt = mock.instance(promptMock)

    const clientFactory: ApiClientFactory = { newClient: () => apiClient }
    const argv = projectArgv({ botpressHome: botpressHome.name, workDir: botpressHome.name })

    const loginCommand = new LoginCommand(clientFactory, prompt, stubLogger, {
      ...argv,
      apiUrl: 'apiurl',
      token: 'token',
      workspaceId: 'workspaceid',
    })

    const initCommand = new InitCommand(clientFactory, prompt, stubLogger, {
      ...argv,
      type: 'integration',
      name: 'my-integration',
    })

    const deployCommand = new DeployCommand(clientFactory, prompt, stubLogger, {
      ...argv,
      workDir: `${argv.workDir}/my-integration`,
      noBuild: false,
      sourceMap: false,
      botId: 'botid',
      createNewBot: false,
      secrets: [],
      apiUrl: 'apiurl',
      token: 'token',
      workspaceId: 'workspaceid',
    })

    await loginCommand.run()
    await initCommand.run()
    await deployCommand.run()

    const buildFiles = fs.readdirSync(`${argv.workDir}/my-integration/${argv.outDir}/dist`)
    expect(buildFiles).toContain('index.js')

    mock.verify(clientMock.createIntegration(mock.anything())).called()
  }, 10_000)
})
