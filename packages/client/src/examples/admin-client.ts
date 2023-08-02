import { Client } from '../index'

const adminClient = new Client()

void adminClient
  .callAction({
    type: '',
    input: {},
  })
  .then(({ output }) => {
    output.issueId
  })
