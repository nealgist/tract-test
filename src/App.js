import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Router from './routes/Router.js'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {Router.init()}
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
