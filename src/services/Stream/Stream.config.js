import React from 'react'
import { Chat, Channel, ChannelList, ChannelHeader, Thread, Window } from 'stream-chat-react'
import { MessageList, MessageInput } from 'stream-chat-react'
import { StreamChat } from 'stream-chat'

import 'stream-chat-react/dist/css/index.css'


const chatClient = new StreamChat('rd6wfgby4fqx')
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib2xkLXJlc29uYW5jZS0wIn0.ovF9DuPkKoRxZNJYuhnjZASmGPVic1RshIxfT2CHNww'

chatClient.setUser(
  {
    id: 'old-resonance-0',
    name: 'Old resonance',
    image: 'https://getstream.io/random_png/?id=old-resonance-0&name=Old+resonance'
  },
  userToken,
)

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
})

const filters = {
  type: 'messaging',
  members: {
    $in: ['old-resonance-0']
  }
}
const sort = { last_message_at: -1 }
const channels = chatClient.queryChannels(filters, sort)