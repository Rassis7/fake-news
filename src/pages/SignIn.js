import React, {useContext} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import AsyncStorage from '@react-native-community/async-storage';

import styled from 'styled-components';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

import {getWidth} from '../styles/global';
import {UserContext} from '../Store';

import GoogleLogin from '../components/GoogleLogin';

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledGoogleSigninButton = styled(GoogleLogin)`
  width: ${getWidth(80)}px;
  height: 50px;
  box-shadow: 0px 2px 3px #ccc;
  box-shadow: 0px -2px 3px #ccc;
  border-color: #fff;
  border-radius: 4px;
`;

const SignIn = () => {
  const {navigate} = useNavigation();
  const {setUser} = useContext(UserContext);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();

      const {email, name, photo} = user;
      await AsyncStorage.setItem('_user', JSON.stringify({email, name, photo}));
      setUser({email, name, photo});

      navigate('AuthLoading');
    } catch (error) {
      if (
        error.code !== statusCodes.SIGN_IN_CANCELLED &&
        error.code === statusCodes.IN_PROGRESS
      )
        alert('Houve um erro ao realizar o login');
      console.log('LOGIN ERROR -', error);
    }
  };

  return (
    <StyledContainer>
      <StyledGoogleSigninButton
        signIn={signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </StyledContainer>
  );
};

SignIn.navigationOptions = {
  header: null,
};

export default SignIn;
