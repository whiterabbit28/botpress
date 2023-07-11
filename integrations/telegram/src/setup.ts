import { Telegraf } from 'telegraf'
import { IntegrationProps } from '.botpress'

export const register: IntegrationProps['register'] = async ({ webhookUrl, ctx }) => {
  const telegraf = new Telegraf(ctx.configuration.botToken)
  await telegraf.telegram.setWebhook(webhookUrl)
}

export const unregister: IntegrationProps['unregister'] = async ({ ctx }) => {
  const telegraf = new Telegraf(ctx.configuration.botToken)
  await telegraf.telegram.deleteWebhook({ drop_pending_updates: true })
}

export const createUser: IntegrationProps['createUser'] = async ({ client, tags, ctx }) => {
  const userId = Number(tags['telegram:id'])

  if (isNaN(userId)) {
    return
  }

  const telegraf = new Telegraf(ctx.configuration.botToken)
  const member = await telegraf.telegram.getChatMember(userId, userId)

  const { user } = await client.getOrCreateUser({ tags: { 'telegram:id': `${member.user.id}` } })

  return {
    body: JSON.stringify({ user: { id: user.id } }),
    headers: {},
    statusCode: 200,
  }
}

export const createConversation: IntegrationProps['createConversation'] = async ({ client, channel, tags, ctx }) => {
  const chatId = tags['telegram:id']

  if (!chatId) {
    return
  }

  const telegraf = new Telegraf(ctx.configuration.botToken)
  const chat = await telegraf.telegram.getChat(chatId)

  const { conversation } = await client.getOrCreateConversation({
    channel,
    tags: { 'telegram:id': `${chat.id}` },
  })

  return {
    body: JSON.stringify({ conversation: { id: conversation.id } }),
    headers: {},
    statusCode: 200,
  }
}
