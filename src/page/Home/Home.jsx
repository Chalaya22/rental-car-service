import React from 'react';
import { Wrapper, WrapperTitle, Text, Title, Span } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <Text>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </Text>
        <Title>
          Save <Span> big </Span> with our car rental
        </Title>
      </WrapperTitle>
    </Wrapper>
  );
};
export default Home;
