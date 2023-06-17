import React from 'react'
import { Box, Heading,} from '@chakra-ui/react';


const Card =({img ,title})=>{
    return(
    <Box
    width="200px"
    margin="0.3rem"
    cursor="pointer"
    transition="transform 0.5s"
    _hover={{ transform: "translateY(-10px)" }}
  >
   
    <img  src={img} alt='cover' />
    <Heading size={'2'} textColor={'BlackAplpha.800'}>{title}</Heading>
  </Box>)
};

export default Card;