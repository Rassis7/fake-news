import React, {useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from 'react-navigation-hooks';

import {GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID} from 'react-native-dotenv';
import {UserContext} from '../Store';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const SignIn = () => {
  const {setCurrentUser} = useContext(UserContext);
  const {navigate} = useNavigation();

  useEffect(
    () =>
      GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        hostedDomain: '',
        loginHint: '',
        forceConsentPrompt: true,
        accountName: '',
        iosClientId: GOOGLE_IOS_CLIENT_ID,
      }),
    [],
  );

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken, user} = await GoogleSignin.signIn();
      const {email, name, photo} = user;

      setCurrentUser({email, name, photo});
      await AsyncStorage.setItem('_userToken', idToken);

      navigate('AuthLoading');
    } catch (error) {
      alert('Houve um erro ao realizar o login');
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </SafeAreaView>
  );
};

SignIn.navigationOptions = {
  header: null,
};

export default SignIn;
