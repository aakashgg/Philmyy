import React from 'react'
import { Box, Heading } from '@chakra-ui/react';
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <Box maxWidth="500px" mx="auto" my={8} p={4}>
      <Heading as="h1" mb={4} textColor={'purple.700'}>
        Contact Me
      </Heading>
      <ContactForm />
    </Box>
  )
}

export default Contact