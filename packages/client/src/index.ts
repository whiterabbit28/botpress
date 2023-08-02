import axios from 'axios'
export * as axios from 'axios'
import { getClientConfig, ClientProps, ClientConfig } from './config'
export type { Message, Conversation, User, State, Event, ModelFile as File, Bot, Integration } from './gen'
export * from './gen/errors'
import { ApiClient as AutoGeneratedClient } from './gen/client'
import type * as routes from './routes'
import { ClientDefinition } from './types/definition'
import { MethodsOf } from './types/utils'

// enforces that all routes are implemented
type AllRoutes = {
  [K in keyof MethodsOf<AutoGeneratedClient>]: (x: any) => Promise<any>
}

export class Client<C extends ClientDefinition = { type: undefined }> implements AllRoutes {
  private _client: AutoGeneratedClient
  public config: ClientConfig

  public constructor(clientProps: ClientProps = {}) {
    const clientConfig = getClientConfig(clientProps)
    const { host, headers, withCredentials, timeout } = clientConfig

    const axiosClient = axios.create({
      maxBodyLength: 100 * 1024 * 1024, // 100MB
      maxContentLength: 1024 * 1024 * 1024, // 100MB
      timeout: timeout ?? 60_000,
      withCredentials,
      headers,
    })

    this._client = new AutoGeneratedClient(undefined, host, axiosClient)
    this.config = clientConfig
  }

  public createConversation: routes.CreateConversation<C> = (x) => this._client.createConversation(x)
  public getConversation: routes.GetConversation<C> = (x) => this._client.getConversation(x)
  public listConversations: routes.ListConversations<C> = (x) => this._client.listConversations(x)
  public getOrCreateConversation: routes.GetOrCreateConversation<C> = (x) => this._client.getOrCreateConversation(x)
  public updateConversation: routes.UpdateConversation<C> = (x) => this._client.updateConversation(x)
  public deleteConversation: routes.DeleteConversation<C> = (x) => this._client.deleteConversation(x)
  public createEvent: routes.CreateEvent<C> = (x) => this._client.createEvent(x)
  public getEvent: routes.GetEvent<C> = (x) => this._client.getEvent(x)
  public listEvents: routes.ListEvents<C> = (x) => this._client.listEvents(x)
  public createMessage: routes.CreateMessage<C> = (x) => this._client.createMessage(x)
  public getOrCreateMessage: routes.GetOrCreateMessage<C> = (x) => this._client.getOrCreateMessage(x)
  public getMessage: routes.GetMessage<C> = (x) => this._client.getMessage(x)
  public updateMessage: routes.UpdateMessage<C> = (x) => this._client.updateMessage(x)
  public listMessages: routes.ListMessages<C> = (x) => this._client.listMessages(x)
  public deleteMessage: routes.DeleteMessage<C> = (x) => this._client.deleteMessage(x)
  public createUser: routes.CreateUser<C> = (x) => this._client.createUser(x)
  public getUser: routes.GetUser<C> = (x) => this._client.getUser(x)
  public listUsers: routes.ListUsers<C> = (x) => this._client.listUsers(x)
  public getOrCreateUser: routes.GetOrCreateUser<C> = (x) => this._client.getOrCreateUser(x)
  public updateUser: routes.UpdateUser<C> = (x) => this._client.updateUser(x)
  public deleteUser: routes.DeleteUser<C> = (x) => this._client.deleteUser(x)
  public getState: routes.GetState<C> = (x) => this._client.getState(x)
  public setState: routes.SetState<C> = (x) => this._client.setState(x)
  public patchState: routes.PatchState<C> = (x) => this._client.patchState(x)
  public callAction: routes.CallAction<C> = (x) => this._client.callAction(x)
  public configureIntegration: routes.ConfigureIntegration<C> = (x) => this._client.configureIntegration(x)
  public listPublicIntegrations: routes.ListPublicIntegrations<C> = (x) => this._client.listPublicIntegrations(x)
  public getPublicIntegrationById: routes.GetPublicIntegrationById<C> = (x) => this._client.getPublicIntegrationById(x)
  public getPublicIntegration: routes.GetPublicIntegration<C> = (x) => this._client.getPublicIntegration(x)
  public createBot: routes.CreateBot<C> = (x) => this._client.createBot(x)
  public updateBot: routes.UpdateBot<C> = (x) => this._client.updateBot(x)
  public transferBot: routes.TransferBot<C> = (x) => this._client.transferBot(x)
  public listBots: routes.ListBots<C> = (x) => this._client.listBots(x)
  public getBot: routes.GetBot<C> = (x) => this._client.getBot(x)
  public deleteBot: routes.DeleteBot<C> = (x) => this._client.deleteBot(x)
  public getBotLogs: routes.GetBotLogs<C> = (x) => this._client.getBotLogs(x)
  public getBotWebchat: routes.GetBotWebchat<C> = (x) => this._client.getBotWebchat(x)
  public getBotAnalytics: routes.GetBotAnalytics<C> = (x) => this._client.getBotAnalytics(x)
  public createWorkspace: routes.CreateWorkspace<C> = (x) => this._client.createWorkspace(x)
  public getWorkspace: routes.GetWorkspace<C> = (x) => this._client.getWorkspace(x)
  public updateWorkspace: routes.UpdateWorkspace<C> = (x) => this._client.updateWorkspace(x)
  public listWorkspaces: routes.ListWorkspaces<C> = (x) => this._client.listWorkspaces(x)
  public changeWorkspacePlan: routes.ChangeWorkspacePlan<C> = (x) => this._client.changeWorkspacePlan(x)
  public deleteWorkspace: routes.DeleteWorkspace<C> = (x) => this._client.deleteWorkspace(x)
  public createIntegration: routes.CreateIntegration<C> = (x) => this._client.createIntegration(x)
  public updateIntegration: routes.UpdateIntegration<C> = (x) => this._client.updateIntegration(x)
  public listIntegrations: routes.ListIntegrations<C> = (x) => this._client.listIntegrations(x)
  public getIntegration: routes.GetIntegration<C> = (x) => this._client.getIntegration(x)
  public getIntegrationLogs: routes.GetIntegrationLogs<C> = (x) => this._client.getIntegrationLogs(x)
  public getIntegrationByName: routes.GetIntegrationByName<C> = (x) => this._client.getIntegrationByName(x)
  public deleteIntegration: routes.DeleteIntegration<C> = (x) => this._client.deleteIntegration(x)
  public listWorkspaceMembers: routes.ListWorkspaceMembers<C> = (x) => this._client.listWorkspaceMembers(x)
  public deleteWorkspaceMember: routes.DeleteWorkspaceMember<C> = (x) => this._client.deleteWorkspaceMember(x)
  public createWorkspaceMember: routes.CreateWorkspaceMember<C> = (x) => this._client.createWorkspaceMember(x)
  public updateWorkspaceMember: routes.UpdateWorkspaceMember<C> = (x) => this._client.updateWorkspaceMember(x)
  public introspect: routes.Introspect<C> = (x) => this._client.introspect(x)
  public createFile: routes.CreateFile<C> = (x) => this._client.createFile(x)
  public getFile: routes.GetFile<C> = (x) => this._client.getFile(x)
  public downloadFile: routes.DownloadFile<C> = (x) => this._client.downloadFile(x)
  public deleteFile: routes.DeleteFile<C> = (x) => this._client.deleteFile(x)
  public listFiles: routes.ListFiles<C> = (x) => this._client.listFiles(x)
}
