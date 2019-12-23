import React, {useContext} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {WeatherContext} from '../Store';
import {getIconWeather} from '../utils/weather';
import Lottie from 'lottie-react-native';
import {getHeight} from 'styles/global';

const StyledLottie = styled(Lottie)`
  height: ${getHeight(6)}px;
`;

const WeatherHeader = () => {
  const {weather: weatherContext} = useContext(WeatherContext);
  const {infos} = weatherContext;

  if (!infos) return <View />;

  const json = getIconWeather(infos.weather.icon);
  return (
    <StyledLottie
      autoSize
      resizeMode="contain"
      source={json}
      autoPlay
      loop
      style={{}}
    />
  );
};

export default WeatherHeader;
