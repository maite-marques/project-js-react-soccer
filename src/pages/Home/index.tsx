import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPlayerRequest } from '@store/modules/players/actions';

import { api } from '@services';

import { Carrousel } from '@components';

import { Container } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('atletas/1').then(response => {
      dispatch(getPlayerRequest(response.data));
    });
  }, []);

  return (
    <Container>
      <h1>Home Tests</h1>
      <Carrousel />
    </Container>
  );
};

export default Home;
