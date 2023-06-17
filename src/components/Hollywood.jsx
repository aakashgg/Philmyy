import { Box, Button, Icon, HStack, VStack, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { AiFillPlayCircle } from 'react-icons/ai';
import axios from 'axios';

const buttonStyle = {
  colorScheme: 'purple',
  variant: 'outline',
  leftIcon: <Icon as={AiFillPlayCircle} />,
};

const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const Row = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'bd2e8ffd6ca15cb5965cc489ff961580';
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_original_language=en`
        );

        const movieData = response.data.results.map((movie) => ({
          img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          title: movie.title,
        }));

        setMovies(movieData);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  const chunkedData = chunk(movies, 5); 

  return (
    <div>
      <Heading ml={4} fontSize={20} my={4}>
          Featured Hollywood
      </Heading>
      <VStack spacing={4}>
        {chunkedData.map((chunk, index) => (
          <HStack key={index} py={2} pl={2}>
            {chunk.map((item, itemIndex) => (
              <Box justifyContent="center" key={itemIndex}>
                <Card img={item.img} title={item.title} />
                <Button {...buttonStyle}>{'Watch Now'}</Button>
              </Box>
            ))}
          </HStack>
        ))}
      </VStack>
    </div>
  );
};

export default Row;
