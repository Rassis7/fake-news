import React, {useEffect, useContext} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import Lottie from 'lottie-react-native';
import {getHeight} from 'styles/global';
import styled from 'styled-components';
import ninja from '../../animations/ninja';
import {getCurrentLocation} from '../hadware/location';
import {WeatherContext} from '../Store';

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
  const {weather, setWeather} = useContext(WeatherContext);

  const currentLocation = async () => {
    const location = await getCurrentLocation();
    if (!location) return;

    const {latitude: lat, longitude: lon} = location;
    setWeather({...weather, coord: {lat, lon}});
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
