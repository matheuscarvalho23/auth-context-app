import React, { useContext } from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  async function handleSubmit() {
    signIn();
  }

  return (
    <Container>
      <Button title="Entra aí brod" onPress={handleSubmit} />
    </Container>
  );
};

export default SignIn;
