import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { MainNavigatorParamList } from 'navigators/MainNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button, Spacer } from 'components';
import { GITHUB_URL, LIBRARY_VERSION, RN_VERSION, SCREEN_NAMES } from 'utils/constants';

type NavigationProps = NativeStackNavigationProp<MainNavigatorParamList>;

const TestScreen = () => {
  const { goBack } = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.firstPart}>
        <Text style={styles.rnVersion}>{`React Native v${RN_VERSION}`}</Text>
        <Text style={styles.screenName}>{SCREEN_NAMES.Test}</Text>
      </View>
      <View style={styles.secondPart}>
        <Button title="Go Back to Home" onPress={() => goBack()} />
        <Spacer size={16} />
        <Button
          title="Go to Github Page"
          onPress={() => Linking.openURL(GITHUB_URL)}
          bgColor="#35B761"
        />
        <Spacer size={16} />
        <Text style={styles.libraryVersion}>{`rn-template-app@${LIBRARY_VERSION}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstPart: {
    flex: 2,
    backgroundColor: '#35B761',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rnVersion: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    color: '#fff',
  },
  screenName: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
  },
  secondPart: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  libraryVersion: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default TestScreen;
