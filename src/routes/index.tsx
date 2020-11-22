import React from 'react';
import { useAuth } from '../contexts/auth';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { logged, loading } = useAuth();

  console.log(loading)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return (logged) ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;