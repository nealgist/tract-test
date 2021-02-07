import React, { useEffect, useState } from "react"
import { Chat, Channel, Thread, Window } from 'stream-chat-react'
import { MessageList, MessageInput } from 'stream-chat-react'
import { CheckSignature, StreamChat } from 'stream-chat'
import 'stream-chat-react/dist/css/index.css'
import './Stream.css'

const chatClient = new StreamChat('rd6wfgby4fqx')
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib2xkLXJlc29uYW5jZS0wIn0.ovF9DuPkKoRxZNJYuhnjZASmGPVic1RshIxfT2CHNww'

// --------------------- //
// • Connect user
// • Load Stream Channel
// --------------------- //
const loadStreamChannel = (user, videoId, setChannel, ready) => {
  if (user.id && user.username && user.thumbnail && !ready) {

    // Set User
    chatClient.setUser({
      id: user.id,
      name: user.username,
      image: user.thumbnail
    }, userToken)

    // Arg 1: chat Type STR (messaging, livestream, team, gaming, commerce)
    // Arg 2: channelID STR (unique ID reference to a specific channel)
    // Arg 3: Fields OBJ (May add as many custom fields as we want)
    const channel = chatClient.channel('messaging', videoId)
    setChannel(channel)
  }
}

// -------------------------------- //
// Set Page Ready
// -------------------------------- //
const setPageReady = (channel, ready, setReady) => {
  if (channel && !ready)
    setReady(true)
}

// ################################# //
// #
// #        Stream Component
// #
// ################################# //
const Stream = (props) => {

  // Vars
  const user = {
    id: props.userId,
    username: props.username,
    thumbnail: props.thumbnail
  }
  const videoId = props.videoId

  // State
  const [channel, setChannel] = useState()
  const [ready, setReady] = useState(false)

  // Hooks
  useEffect(() => loadStreamChannel(user, videoId, setChannel, ready), [user.id])
  useEffect(() => setPageReady(channel, ready, setReady), [channel])

  return (
    <>
      { ready ?
        <Chat client={chatClient} theme={'messaging light'} style={{ maxHeight: '100%' }}>
          <Channel channel={channel}>
            <Window>
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
        : null}
    </>
  )
}

export default Stream