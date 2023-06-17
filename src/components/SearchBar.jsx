import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
   
    console.log('Searching for:', searchValue);
   
    navigate('/home');
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <InputGroup ml={4}>
        <InputLeftElement pointerEvents="none" children={<BiSearch />}color="purple.700" />
        <Input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
          fontSize="xl"
          fontWeight="bold"
         
        />
        <Button type="submit" colorScheme="purple" variant='solid' ml={13} mr={8} mb={4}>
          Go
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
