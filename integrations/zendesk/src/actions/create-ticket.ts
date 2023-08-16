import { transformTicket } from 'src/definitions/schemas'
import { getZendeskClient } from '../client'
import type { Implementation } from '../types'

export const createTicket: Implementation['actions']['createTicket'] = async ({ ctx, client, input }) => {
  const zendeskClient = getZendeskClient(ctx.configuration)
  const ticket = await zendeskClient.createTicket(input.subject, input.comment, {
    name: input.requesterName,
    email: input.requesterEmail,
  })

  const { conversation } = await client.getOrCreateConversation({
    channel: 'ticket',
    tags: {
      id: ticket.id.toString(),
    },
  })

  await zendeskClient.updateTicket(ticket.id, {
    external_id: conversation.id,
  })

  const patientId = ticket.requester_id.toString()
  await client.setState({
    name: 'patient',
    type: 'conversation',
    id: conversation.id,
    payload: {
      patientId,
    },
  })

  return {
    ticket: transformTicket(ticket),
    conversationId: conversation.id,
  }
}
