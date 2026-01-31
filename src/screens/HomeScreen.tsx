import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WraperContainer from '../components/WraperContainer';
import fontFamily from '../constants/fontFamily';
import { moderateScale, scale } from '../styles/responsiveSize';
import colors from '../styles/colors';

const HomeScreen = () => {
  return (
    <WraperContainer>
      <View style={styles.container}>
        <Text style={styles.title}>{'Dhaka'}</Text>
        <Text style={styles.subTitle}>{'Chance of rain : 20%'}</Text>
      </View>
    </WraperContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.poppinsBold,
    fontSize: scale(24),
    color: colors.textPrimary,
    marginTop: moderateScale(20),
  },
  subTitle: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: scale(16),
    color: colors.textSecondary,
    marginTop: moderateScale(2),
  },
});
