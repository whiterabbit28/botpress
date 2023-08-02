import { Client } from '../index'
import { EnumerateActions } from '../types'

type _AvailableActions = EnumerateActions<{ type: undefined }>

const adminClient = new Client()

void adminClient
  .callAction({
    type: '',
    input: {},
  })
  .then(({ output }) => {
    output.issueId
  })
