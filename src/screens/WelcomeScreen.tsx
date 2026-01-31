import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import WraperContainer from '../components/WraperContainer';
import colors from '../styles/colors';
import imagesPath from '../constants/imagesPath';
import {
  height,
  moderateScaleVertical,
  scale,
  width,
} from '../styles/responsiveSize';
import fontFamily from '../constants/fontFamily';

const WelcomeScreen = () => {
  return (
    <WraperContainer>
      <View style={styles.mainViewStyle}>
        <Image source={imagesPath.umbrella} />
        <Text style={styles.text1}>Weather App</Text>
        <Text style={styles.text2}>Welcome</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Image source={imagesPath.right} />
        </TouchableOpacity>
      </View>
    </WraperContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: colors.textPrimary,
    fontSize: scale(24),
    marginTop: height / 8,
    fontFamily: fontFamily.poppinsBold,
  },
  text2: {
    color: colors.textSecondary,
    fontSize: scale(20),
    marginTop: moderateScaleVertical(6),
    fontFamily: fontFamily.poppinsRegular,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundSecondary,
    width: width / 2,
    height: height / 12,
    borderRadius: moderateScaleVertical(10),
    gap: moderateScaleVertical(10),
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: scale(20),
    fontFamily: fontFamily.poppinsRegular,
  },
});
