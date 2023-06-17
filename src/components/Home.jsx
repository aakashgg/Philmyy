import { Box, Heading, Image, Button, Icon, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import Row from './Row';


const Home = () => {
  return<div>
   <Heading ml={4} fontSize={20} mb={4}>
        Featured on Philmyy
      </Heading>
    <MyCarousel/>
    <Heading ml={4} fontSize={20} my={4}> Popular on Philmyy</Heading>
     <Row />
  </div> 
    
  ;
};
const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  opacity: 0.7,
};

const overlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '2rem',
  transform: 'translateY(-50%)',
  textAlign: 'left',
  padding: '1rem',
  background: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '0.5rem',
};

const buttonStyle = {
  colorScheme: 'purple',
  variant: 'outline',
  leftIcon: <Icon as={AiFillPlayCircle} />,
};





const MyCarousel = () => {
  

  return (
    <Carousel
      infiniteLoop
      autoPlay
      interval={1000}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
    >
      <Box w="full" h="calc(100vh - 64px)" position="relative">
        <Image src={img1} alt="Image 1" style={imageStyle} />
        <Box style={overlayStyle}>
          <VStack spacing={4} alignItems="flex-start">
            <Heading color="white" fontSize={['xl', '2xl']}>
              Jab We Met
            </Heading>
            <Text color="white" fontSize={['sm', 'md']} maxW="300px">
              A depressed wealthy businessman finds his life changing after he meets a spunky and care-free young woman.
            </Text>
            <Button {...buttonStyle}>Watch Now</Button>
          </VStack>
        </Box>
      </Box>
      <Box w="full" h="calc(100vh - 64px)" position="relative">
        <Image src={img2} alt="Image 2" style={imageStyle} />
        <Box style={overlayStyle}>
          <VStack spacing={4} alignItems="flex-start">
            <Heading color="white" fontSize="2xl">
              Karthik Calling Karthik
            </Heading>
            <Text color="white" fontSize="sm" maxW="300px">
              Unlucky in love and bullied at work, an office drone is resigned to his dead-end life until it’s transformed by mysterious calls from ... himself.
            </Text>
            <Button {...buttonStyle}>Watch Now</Button>
          </VStack>
        </Box>
      </Box>
      <Box w="full" h="calc(100vh - 64px)" position="relative">
        <Image src={img3} alt="Image 3" style={imageStyle} />
        <Box style={overlayStyle}>
          <VStack spacing={4} alignItems="flex-start">
            <Heading color="white" fontSize="2xl">
              Main Hoon Na
            </Heading>
            <Text color="white" fontSize="sm" maxW="300px">
              An army major goes undercover as a college student. His mission is both professional and personal: to protect his general's daughter from a radical militant and to find his estranged half-brother.
            </Text>
            <Button {...buttonStyle}>Watch Now</Button>
          </VStack>
        </Box>
      </Box>
      <Box w="full" h="calc(100vh - 64px)" position="relative">
        <Image src={img4} alt="Image 4" style={imageStyle} />
        <Box style={overlayStyle}>
          <VStack spacing={4} alignItems="flex-start">
            <Heading color="white" fontSize="2xl">
              Guru
            </Heading>
            <Text color="white" fontSize="sm" maxW="300px">
              In 1950s India, a tenacious small-town man sets out to pursue his capitalist dreams in Mumbai, starting a checkered rise to become a powerful tycoon.
            </Text>
            <Button {...buttonStyle}>Watch Now</Button>
          </VStack>
        </Box>
      </Box>
      <Box w="full" h="calc(100vh - 64px)" position="relative">
        <Image src={img5} alt="Image 5" style={imageStyle} />
        <Box style={overlayStyle}>
          <VStack spacing={4} alignItems="flex-start">
            <Heading color="white" fontSize="2xl">
              Rajneeti
            </Heading>
            <Text color="white" fontSize="sm" maxW="300px">
              Samar, the son of a political family, has chosen to go to the USA to live with his girlfriend. However, the death of his father makes him put his plans on hold and enter the dirty world of politics.
            </Text>
            <Button {...buttonStyle}>Watch Now</Button>
          </VStack>
        </Box>
      </Box>
    </Carousel>
    
    
  );
};

export default Home;
