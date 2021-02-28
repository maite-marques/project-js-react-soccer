import React from 'react';

import { Carrousel } from '@components';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home Tests</h1>
      <Carrousel />
    </Container>
  );
};

export default Home;
