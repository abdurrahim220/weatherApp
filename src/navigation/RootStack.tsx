import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import { DetailsScreen, SearchScreeen } from '../screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CurrentWeather" component={BottomTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Search" component={SearchScreeen} />
    </Stack.Navigator>
  );
};

export default RootStack;
