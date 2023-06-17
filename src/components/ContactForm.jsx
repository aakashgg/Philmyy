import React, { useState } from 'react';
import { VStack, Input, Button } from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
  
    const mailtoLink = `mailto:mynameaakash46@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  
  
    setName('');
    setEmail('');
    setMessage('');
  
   
    setShowThankYou(true);
  
  
    setStep(1);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        handleSubmit();
      }
    }
  };

  return (
    <VStack spacing={4} alignItems="flex-start">
      {step === 1 && (
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          onKeyPress={handleKeyPress}
        />
      )}
      {step === 2 && (
        <Input
          placeholder="Enter your email"
          value={email}
          type="email"
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
        />
      )}
      {step === 3 && (
        <Input
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageChange}
          onKeyPress={handleKeyPress}
        />
      )}
      {step < 3 && (
        <Button colorScheme="purple" onClick={handleNext}>
          Next
        </Button>
      )}
      {step === 3 && (
        <Button colorScheme="purple" onClick={handleSubmit}>
          Submit
        </Button>
      )}
      {showThankYou && <p>Thank you for submitting the form!</p>}
    </VStack>
  );
};

export default ContactForm;
