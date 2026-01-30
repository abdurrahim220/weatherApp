import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import RootStack from './RootStack';

const Routes = () => {
  const isToken = false;
  return (
    <NavigationContainer>
      {isToken ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
