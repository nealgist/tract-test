import React from 'react'
import { Button, Center } from '@chakra-ui/react'
import { useHistory } from "react-router-dom";
import Router from '../../routes/Router.js'

const Home = () => {

  // Vars
  const history = useHistory();

  // Events
  const click_proofOfConcept = e => {
    const path = Router.getPath('livestream', { videoId: 'Ync02d3ih' })
    history.push(path);
  }

  // JSX
  return (
    <>
      <Center>
        <Button onClick={e => click_proofOfConcept(e)}>Proof of Concept</Button>
      </Center>
    </>
  )
}

export default Home