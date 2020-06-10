import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Header, HeaderTitle, UserName } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vinde, {'\n'}
          <UserName>Beatriz Murase</UserName>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Dashboard;
