import { IntegrationProps } from '.botpress'

export const handler: IntegrationProps['handler'] = async ({ req, client }) => {
  console.info('Handler received request')

  if (!req.body) {
    console.warn('Handler received an empty body')
    return
  }

  const data = JSON.parse(req.body)

  if (data.my_chat_member) {
    return
  }

  if (data.channel_post) {
    return
  }

  if (data.edited_message) {
    return
  }

  if (data.message.from.is_bot) {
    return
  }

  if (!data.message.text) {
    return
  }

  const conversationId = data.message.chat.id

  if (!conversationId) {
    throw new Error('Handler received an empty chat id')
  }

  const { conversation } = await client.getOrCreateConversation({
    channel: 'channel',
    tags: {
      'telegram:id': `${conversationId}`,
    },
  })

  const userId = data.message.from.id

  if (!userId) {
    throw new Error('Handler received an empty from id')
  }

  const { user } = await client.getOrCreateUser({
    tags: {
      'telegram:id': `${userId}`,
    },
  })

  const messageId = data.message.message_id

  if (!messageId) {
    throw new Error('Handler received an empty message id')
  }

  await client.createMessage({
    tags: { 'telegram:id': `${messageId}` },
    type: 'text',
    userId: user.id,
    conversationId: conversation.id,
    payload: { text: data.message.text },
  })
}
