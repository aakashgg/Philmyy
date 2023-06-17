import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
   <> <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '16vh',
          zIndex: '999', // Add this line
        }}
      >
        <Button
        
          
          colorScheme="purple"
          h={10}
          w={10}
          p={0}
          borderRadius="full"
          onClick={onOpen}
        >
          <BiMenuAltLeft size={20} />
        </Button>
        <Button
          pos='-moz-initial'
          colorScheme={'purple'}
          variant={'unstyled'}
          textColor={'purple.600'}
          style={{
            marginLeft: '10px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          <Link to={'/'}>Philmyy</Link>
        </Button>
        
      </div>
      <Drawer
        placement="left"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Button onClick={onClose} colorScheme={'purple'} variant={'unstyled'} textColor={'purple.600'}style={{ marginLeft: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}> <Link to={'/'}>Philmyy</Link></Button>
          </DrawerHeader>

          <DrawerBody>
            <VStack align={'flex-start'}>
              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/'}>Home</Link></Button>

              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/videos'}>Movies</Link></Button>

              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/bollywood'}>Bollywood</Link></Button>

              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/hollywood'}>Hollywood</Link></Button>

              <Button onClick={onClose} colorScheme='purple'  ml={36} mt={36}>
                <Link to={'/contact'}>Contact Us</Link></Button>
            </VStack>
            <HStack pos={'absolute'} bottom={5} right={10}>

              <Button onClick={onClose} colorScheme='purple' variant={'outline'}><Link to={'/login'}>Login</Link></Button>
              <Button onClick={onClose} colorScheme='purple' ><Link to={'/signup'}>Signup</Link></Button>


            </HStack>
          </DrawerBody>


        </DrawerContent>
      </Drawer>
      



    </>
  )
}

export default Header