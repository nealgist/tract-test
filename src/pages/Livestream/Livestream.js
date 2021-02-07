// TODO: Remove inline CSS and replace with w/ emotion
// TODO: Remove this reference before finishing: https://raptis.wtf/blog/build-a-landing-page-with-chakra-ui-part-1/
// TODO: Make <P> tag
// TODO: Make <Hr> tag
// TODO: max-width page wrapper (or app-wide parent container)

import React, { useEffect, useState } from "react"
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Divider,
  IconButton,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Square,
  Text,
} from '@chakra-ui/react'
import { Stream } from '../../services'
import { Users, Videos } from '../../api'
import { Loading } from '../../layout'

// --------------------- //
// Fetch current user
// --------------------- //
const fetchCurrentUser = (setUser) => {
  Users.fetchOne('old-resonance-0').then(user => {
    console.log('%cUser: ', 'color:DarkTurquoise', user)
    setUser(user)
  })
}

// --------------------- //
// Fetch video
// --------------------- //
const fetchVideo = (videoId, setVideo) => {
  Videos.fetchOne(videoId).then(video => {
    console.log('%cVideo: ', 'color:LightCoral', video)
    setVideo(video)
  })
}

// -------------------------------- //
// Set Page Ready
// -------------------------------- //
const setPageReady = (user, video, ready, setReady) => {
  if (user && video && !ready)
    setReady(true)
}

// ################################# //
// #
// #        Livestream Page
// #
// ################################# //
const LiveStream = () => {

  // Vars
  const { videoId } = useParams()

  // State
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState({})
  const [video, setVideo] = useState({})
  const [chatVisible, setChatVisible] = useState(true)

  // Hooks
  useEffect(() => fetchCurrentUser(setUser), [])
  useEffect(() => fetchVideo(videoId, setVideo), [])
  useEffect(() => setPageReady(user, video, ready, setReady), [user, video])

  // Events
  const click_toggleChat = e => setChatVisible(!chatVisible)

  // JSX
  return (
    <>
      { ready ?
        <Flex
          width="100%"
          justify="space-between"
          wrap="wrap"
          pl={{ base: 3, sm: 10 }}
          pr={{ base: 3, sm: 10 }}
        >

          {/* =-=-=-=-= Left Column =-=-=-=-= */}
          <Box
            width={{ base: "100%", md: chatVisible ? "65%" : "100%" }}
            style={{
              transition: "width .5s"
            }}
          >

            {/* ----- Show Chat ----- */}
            {chatVisible ? null :
              <Button
              leftIcon={<ArrowLeftIcon />}
              variant="solid"
              size="xs"
              bg="#fff"
              style={{
                position: "fixed",
                right: 0,
                zIndex: 3,
                borderRadius: ".375rem 0 0 .375rem",
              }}
              onClick={e => click_toggleChat(e)}
              >Live Chat</Button>
            }

            {/* -------------------------------
              Video Player
            ------------------------------- */}
            <Box
              borderRadius="3xl"
              style={{ overflow: "hidden" }}
              height="fit-content"
              mb={6}
            >
              <AspectRatio maxW="100%" ratio={16 / 9}>
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                />
              </AspectRatio>
            </Box>

            {/* -------------------------------
                  Video Meta
                ------------------------------- */}
            <Flex>

              {/* ----- Avatar ----- */}
              <Box width="80px">
                <Avatar
                  src={video.creatorThumbnail}
                  name={video.creatorName}
                  size="lg"
                  style={{
                    border: "solid 3px white",
                    boxShadow: "0px 0px 0px 3px #36a169"
                  }}
                >
                  <Button colorScheme="green" size="xs" style={{
                    position: "absolute",
                    bottom: "-1rem",
                    border: "solid 2px white",
                    boxSizing: "border-box",
                    textTransform: "uppercase"
                  }}>
                    Live
                </Button>
                </Avatar>
              </Box>

              {/* ----- Title, SubTitle, Desc ----- */}
              <Box flex="1">
                <Heading as="h1" size="md" mt={2} mb={2}>{video.title}</Heading>
                <Heading color="#4c5566" as="h2" size="sm">Hosted by {video.creatorName} • {video.liveStart}-{video.liveEnd} {video.liveTimeZone}</Heading>
                <Divider mt={7} mb={7} />
                <Text color="#171922" style={{ fontWeight: "500" }} dangerouslySetInnerHTML={{ __html: video.description }} />
              </Box>

            </Flex>
          </Box> {/* end left col */}

          {/* =-=-=-=-= Right Column =-=-=-=-= */}
          <Box
            width={{ base: "100%", md: "calc(35% - 3.5rem)" }}
            display={{ base: "none", md: "block" }}
            style={{
              height: "calc(100vh - 100px)",
              position: "fixed",
              right: "2.5rem",
              overflow: "hidden",
              width: chatVisible ? "calc(35% - 3.5rem)" : "0%",
              transition: "width .5s"
            }}
          >

            {/* -------------------------------
              Chat
            ------------------------------- */}
            <Box
              bg="#ffffff"
              style={{
                width: "100%",
                position: "absolute",
                top: "-1.25rem",
                right: 0,
                zIndex: 2,
                paddingTop: "1.25rem",
                paddingBottom: "1rem",
                borderBottom: "solid 2px #cdd5df",
                boxShadow: "0px 30px 20px 10px rgba(255,255,255,.9)",
              }}
            >
              {/* ----- Hide Chat ----- */}
              <IconButton
                icon={<ArrowRightIcon />}
                variant="ghost"
                isRound={true}
                style={{ position: "absolute" }}
                onClick={e => click_toggleChat(e)}
              />
              <Center>
                <Heading as="h6" size="md" mt={2} mb={2}>Live Chat</Heading>
              </Center>
            </Box>

            {/* ----- StreamChat ----- */}
            <Stream
              userId={user.id}
              username={user.username}
              thumbnail={user.thumbnail}
              videoId={videoId}
            />

          </Box> {/* end right col */}
        </Flex>

        : <Loading />}

    </>
  )
}

export default LiveStream
