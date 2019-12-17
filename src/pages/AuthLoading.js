import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import Lottie from 'lottie-react-native';
import {getHeight} from 'styles/global';
import styled from 'styled-components';
import ninja from '../../animations/ninja';
import {getCurrentLocation} from '../hadware/location';
import {isAfter, subHours, addDays} from 'date-fns';

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

  const currentLocation = async () => {
    const localStorage = await AsyncStorage.getItem('_myLocation');
    if (!localStorage) return;

    const {time} = JSON.parse(localStorage);

    if (isAfter(new Date(), time)) {
      const location = await getCurrentLocation();
      if (location.error) alert('Houve um erro ao pegar a sua localixação');

      await AsyncStorage.setItem(
        '_myLocation',
        JSON.stringify({...location, time: addDays(new Date(), 1)}),
      );
    }
  };

  const goToView = async () => {
    userToken = await AsyncStorage.getItem('_userToken');
    return navigate(!userToken ? 'App' : 'Auth');
  };

  useEffect(() => {
    currentLocation();
    goToView();
  }, []);

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
