import React, {useContext, useEffect} from 'react';
import {useNavigation} from 'react-navigation-hooks';

import {getCurrentLocation} from '../hadware/location';
import {WeatherContext} from '../Store';
import {StyledHeaderBar} from '../styles/global';

import WeatherLottie from './WeatherLottie';

export default function WeatherHeader() {
  const {navigate} = useNavigation();
  const {weather, setWeather} = useContext(WeatherContext);

  const currentLocation = async () => {
    try {
      const location = await getCurrentLocation();
      if (!location) return;

      const {latitude: lat, longitude: lon} = location;
      setWeather({...weather, coord: {lat, lon}});
    } catch (error) {
      console.log('LOCATION ERROR - ', error);
    }
  };

  useEffect(() => currentLocation(), []);

  return (
    <StyledHeaderBar onPress={() => navigate('WeatherPage')}>
      <WeatherLottie size={6} />
    </StyledHeaderBar>
  );
}
