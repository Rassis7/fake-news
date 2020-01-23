import React, {useEffect, useContext} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import Lottie from 'lottie-react-native';

import {getHeight} from 'styles/global';
import styled from 'styled-components';
import ninja from '../../animations/ninja';
import {UserContext} from '../Store';

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledLottie = styled(Lottie)`
  height: ${getHeight(40)}px;
`;

const AuthLoading = () => {
  const {navigate} = useNavigation();
  const {user, setUser} = useContext(UserContext);

  const goToView = async () => {
    const userStorage = JSON.parse(await AsyncStorage.getItem('_user'));

    if (userStorage) {
      setUser(userStorage);
      return setTimeout(() => navigate('App'), 2000);
    }
    setTimeout(() => navigate('Auth'), 3000);
  };

  useEffect(() => {
    try {
      goToView();
    } catch (error) {
      console.log('AUTH_LOADING ERROR', error);
    }
  }, [user]);

  return (
    <StyledContainer>
      <StyledLottie
        autoSize
        resizeMode="contain"
        source={ninja}
        autoPlay
        loop
      />
    </StyledContainer>
  );
};

export default AuthLoading;
