import React from 'react';
import { Button, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  async function handleLogout() {
    signOut();
  }

  return (
    <Container>
      <Text>{user?.name}</Text>
      <Button title="SAIA JÁ" onPress={handleLogout} />
    </Container>
  );
};

export default Dashboard;
