import React from 'react'
import Main from './Main'
import './style.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Box, theme } from "@chakra-ui/react";

function Elib() {
  return (

    <div className='main-lib'>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="#0f0a18" color="gray.500" px={6} py={8}>
          <Main />
        </Box>

      </ChakraProvider>

    </div>
  )
}

export default Elib
