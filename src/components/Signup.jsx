import React, { useState } from 'react';
import { VStack, Input, Button, Select } from '@chakra-ui/react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = () => {
    // Perform signup logic here
    // You can access the form values in the state variables
    // name, email, password, gender, location, and zipCode

    // Reset the form after submission
    setName('');
    setEmail('');
    setPassword('');
    setGender('');
    setLocation('');
    setZipCode('');
  };

  return (
    <VStack spacing={4} alignItems="center">
      <Input
        placeholder="Name"
        value={name}
        width={'33%'}
        onChange={handleNameChange}
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        width={'33%'}
        onChange={handleEmailChange}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        width={'33%'}
        onChange={handlePasswordChange}
      />
      <Select placeholder="Gender" value={gender} width={'33%'} onChange={handleGenderChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
      <Input
        placeholder="Location"
        value={location}
        width={'33%'}
        onChange={handleLocationChange}
      />
      <Input
        placeholder="Zip Code"
        value={zipCode}
        width={'33%'}
        onChange={handleZipCodeChange}
      />
      <Button colorScheme="purple" onClick={handleSubmit}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
