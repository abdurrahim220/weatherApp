import { Platform, StatusBar, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import colors from '../styles/colors';
export default function WraperContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
