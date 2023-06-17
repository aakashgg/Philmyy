import React from 'react';
import { Box,  Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box color='purple.600' pt={10}pb={4}>
      <VStack justify="center" align="center">
        <Text> Philmyy 2023 </Text>
        <Text>Made with❤️ By Aakash </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
