import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WraperContainer from '../components/WraperContainer';
import colors from '../styles/colors';
import imagesPath from '../constants/imagesPath';
import { moderateScaleVertical, scale } from '../styles/responsiveSize';
import fontFamily from '../constants/fontFamily';

const WelcomeScreen = () => {
  return (
    <WraperContainer>
      <View style={styles.mainViewStyle}>
        <Image source={imagesPath.umbrella} />
        <Text style={styles.text1}>Weather App</Text>
        <Text style={styles.text2}>Welcome</Text>
      </View>
    </WraperContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: colors.textPrimary,
    fontSize: scale(24),
    marginTop: moderateScaleVertical(60),
    fontFamily: fontFamily.poppinsBold,
  },
  text2: {
    color: colors.textSecondary,
    fontSize: scale(20),
    marginTop: moderateScaleVertical(6),
    fontFamily: fontFamily.poppinsRegular,
  },
});
