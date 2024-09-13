import React from 'react'
import { Box, theme } from "@chakra-ui/react";
import CodeEditor from './CodeEditor'
import './Final.css'
import { ChakraProvider } from "@chakra-ui/react";
import user_icon from '../../../assets/user_icon.png';

function Final() {
  return (
  
   <div className='editor'>
      
        <ChakraProvider theme={theme}>
    <Box minH="100vh" bg="#0f0a18" color="gray.500" px={6} py={8}>
        <div className='text'>
      <h2 className="subtext">Welcome to Our Compiler By <img src={user_icon} alt="" className='logo shrink' /></h2>
      </div>
      <CodeEditor />
    </Box>
       </ChakraProvider>
    



    
    </div>
    
  )
}

export default Final
