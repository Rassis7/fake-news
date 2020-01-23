import React, {useEffect, useContext} from 'react';

import {useNavigation} from 'react-navigation-hooks';

import {StyledHeaderBar} from 'styles/global';
import {getCurrentLocation} from '../hadware/location';
import {WeatherContext} from '../Store';
import WeatherLottie from './WeatherLottie';

export default function WeatherHeader() {
  const {navigate} = useNavigation();
  const {weather, setWeather} = useContext(WeatherContext);

  const currentLocation = async () => {
    const location = await getCurrentLocation();
    if (!location) return;

    const {latitude: lat, longitude: lon} = location;
    setWeather({...weather, coord: {lat, lon}});
  };

  useEffect(() => {
    try {
      currentLocation();
    } catch (error) {
      console.log('WEATHER HEADER ERROR', error);
    }
  }, []);

  return (
    <StyledHeaderBar onPress={() => navigate('WeatherPage')}>
      <WeatherLottie size={6} />
    </StyledHeaderBar>
  );
}
