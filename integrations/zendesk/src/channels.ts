import { getZendeskClient } from './client'
import { INTEGRATION_NAME } from './const'
import type { Channels } from './types'

export default {
  ticket: {
    messages: {
      text: async ({ ...props }) => {
        const ticketId = props.conversation!.tags[`${INTEGRATION_NAME}:id`]!

        const { state } = await props.client.getState({
          name: 'patient',
          id: props.conversation.id,
          type: 'conversation',
        })

        return await getZendeskClient(props.ctx.configuration).createComment(
          ticketId,
          state.payload.patientId,
          props.payload.text
        )
      },
    },
  },
} satisfies Channels
