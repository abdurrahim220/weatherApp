import React from 'react';
import Routes from './src/navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0B131D'} />
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
