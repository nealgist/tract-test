// TODO: Remove hardcoded 'color' value from <Logo>
// TODO: Move inline styles into Nav.styles.js
// TODO: Replace hardcoded colors with theme color
import React from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Flex,
  Spacer,
} from '@chakra-ui/react'

import { Logo } from '../'
import Router from '../../routes/Router.js'

const Nav = () => {

  // Events
  const click_close = (e) => console.log('Close window now.')

  // JSX
  return (
    <>
      <Flex
        p={5}
        mb={4}
        boxShadow={'md'}
        style={{
          position: 'fixed',
          zIndex: 99,
          background: '#ffffff',
          width: '100%',
        }}
      >
        <Box>
          <Link to={Router.getPath('home')}>
            <Logo color="#1826d5" width="70px" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <IconButton
            variant="outline"
            aria-label="Close"
            icon={<CloseIcon />}
            isRound={true}
            onClick={e => click_close(e)}
          />
        </Box>
      </Flex>
      {/* Spacer for content below fixed nav */}
      <div style={{ height: '100px' }}></div>
    </>
  )
}

export default Nav

