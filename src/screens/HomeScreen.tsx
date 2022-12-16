import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { MainNavigatorParamList } from 'navigators/MainNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button, Spacer } from 'components';
import { GITHUB_URL, LIBRARY_VERSION, RN_VERSION, SCREEN_NAMES } from 'utils/constants';

type NavigationProps = NativeStackNavigationProp<MainNavigatorParamList>;

const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.firstPart}>
        <Text style={styles.rnVersion}>{`React Native v${RN_VERSION}`}</Text>
        <Text style={styles.screenName}>{SCREEN_NAMES.Home}</Text>
      </View>
      <View style={styles.secondPart}>
        <Button title="Go to Test Screen" onPress={() => navigate('Test')} />
        <Spacer size={16} />
        <Button
          title="Go to Github Page"
          onPress={() => Linking.openURL(GITHUB_URL)}
          bgColor="#FFD64D"
          textColor="black"
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
    backgroundColor: '#FFD64D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rnVersion: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    color: 'black',
  },
  screenName: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '800',
    color: 'black',
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

export default HomeScreen;
