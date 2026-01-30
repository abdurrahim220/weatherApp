import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MapScreen, MyCityScreen, SettingScreen } from '../screens';
import { Image } from 'react-native';
import imagesPath from '../constants/imagesPath';
import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import { BottomTabsProps } from '../types/bottomTabsTypes';

const Tab = createBottomTabNavigator();

const HomeIcon = ({ focused }: BottomTabsProps) => (
  <Image
    tintColor={focused ? colors.bottomTabActive : colors.bottomTabInactive}
    source={imagesPath.rain}
    style={style.imagesStyle}
  />
);

const MyCityIcon = ({ focused }: BottomTabsProps) => (
  <Image
    tintColor={focused ? colors.bottomTabActive : colors.bottomTabInactive}
    source={imagesPath.home}
    style={style.imagesStyle}
  />
);

const MapIcon = ({ focused }: BottomTabsProps) => (
  <Image
    tintColor={focused ? colors.bottomTabActive : colors.bottomTabInactive}
    source={imagesPath.map}
    style={style.imagesStyle}
  />
);

const SettingIcon = ({ focused }: BottomTabsProps) => (
  <Image
    tintColor={focused ? colors.bottomTabActive : colors.bottomTabInactive}
    source={imagesPath.setting}
    style={style.imagesStyle}
  />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.bottomTabBarColor },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="MyCity"
        component={MyCityScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: MyCityIcon,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: MapIcon,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: SettingIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const style = StyleSheet.create({
  imagesStyle: {
    marginTop: moderateScale(20),
    width: moderateScale(32),
    height: moderateScaleVertical(32),
  },
});
