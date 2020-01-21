import React, {useEffect} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import AsyncStorage from '@react-native-community/async-storage';

import Lottie from 'lottie-react-native';

import {getHeight} from 'styles/global';
import styled from 'styled-components';
import ninja from '../../animations/ninja';

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

  const goToView = async navigate => {
    try {
      const userToken = await AsyncStorage.getItem('_userToken');
      navigate(!userToken ? 'Auth' : 'App');
    } catch (error) {
      console.log('ERROR - ', error);
    }

    return () => {};
  };

  useEffect(() => goToView(navigate), []);

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
