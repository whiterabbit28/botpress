import { Client } from '@botpress/client'
import { BotProps as BotDefinition } from '../implementation'
import * as routes from './routes'

type ClientProps = ConstructorParameters<typeof Client>

export class BotSpecificClient<Bot extends BotDefinition = BotDefinition> {
  private readonly client: Client

  public constructor(...props: ClientProps) {
    this.client = new Client(...props)
  }

  public createConversation: routes.CreateConversation<Bot> = (x) => this.client.createConversation(x)
  public getConversation: routes.GetConversation<Bot> = (x) => this.client.getConversation(x)
  public listConversations: routes.ListConversations<Bot> = (x) => this.client.listConversations(x)
  public getOrCreateConversation: routes.GetOrCreateConversation<Bot> = (x) => this.client.getOrCreateConversation(x)
  public updateConversation: routes.UpdateConversation<Bot> = (x) => this.client.updateConversation(x)
  public deleteConversation: routes.DeleteConversation<Bot> = (x) => this.client.deleteConversation(x)

  public createEvent: routes.CreateEvent<Bot> = (x) => this.client.createEvent(x)
  public getEvent: routes.GetEvent<Bot> = (x) => this.client.getEvent(x)
  public listEvents: routes.ListEvents<Bot> = (x) => this.client.listEvents(x)

  public createMessage: routes.CreateMessage<Bot> = (x) => this.client.createMessage(x)
  public getOrCreateMessage: routes.GetOrCreateMessage<Bot> = (x) => this.client.getOrCreateMessage(x)
  public getMessage: routes.GetMessage<Bot> = (x) => this.client.getMessage(x)
  public updateMessage: routes.UpdateMessage<Bot> = (x) => this.client.updateMessage(x)
  public listMessages: routes.ListMessages<Bot> = (x) => this.client.listMessages(x)
  public deleteMessage: routes.DeleteMessage<Bot> = (x) => this.client.deleteMessage(x)

  public createUser: routes.CreateUser<Bot> = (x) => this.client.createUser(x)
  public getUser: routes.GetUser<Bot> = (x) => this.client.getUser(x)
  public listUsers: routes.ListUsers<Bot> = (x) => this.client.listUsers(x)
  public getOrCreateUser: routes.GetOrCreateUser<Bot> = (x) => this.client.getOrCreateUser(x)
  public updateUser: routes.UpdateUser<Bot> = (x) => this.client.updateUser(x)
  public deleteUser: routes.DeleteUser<Bot> = (x) => this.client.deleteUser(x)

  public getState: routes.GetState<Bot> = (x) => this.client.getState(x)
  public setState: routes.SetState<Bot> = (x) => this.client.setState(x)
  public patchState: routes.PatchState<Bot> = (x) => this.client.patchState(x)

  public callAction: routes.CallAction<Bot> = (x) => this.client.callAction(x)
}
