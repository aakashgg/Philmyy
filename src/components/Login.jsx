import React, { useState } from 'react';
import { VStack, Input, Button } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Perform login logic here
    // You can access the email and password in the state variables
    // email and password

    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <VStack spacing={4} alignItems="center" width="100%">
      <Input
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        width="33%"
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        width="33%"
      />
      <Button colorScheme="purple" onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
};

export default Login;
