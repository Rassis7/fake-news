import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const AuthLoading = ({navigation}) => {
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      navigation.navigate(userToken ? 'App' : 'Auth');
    };

    bootstrapAsync();
  }, []);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;
