import {useEffect, useState} from 'react';
import weatherApi from '../services/weatherApi';
import {WEATHER_API_KEY} from 'react-native-dotenv';

const getWeather = async (setWeather, coords) => {
  const {lat, lon} = coords;
  const response = await weatherApi.get('weather', {
    params: {
      lat,
      lon,
      lang: 'pt',
      appid: WEATHER_API_KEY,
      units: 'metric',
    },
  });

  if (response && response.data) {
    const {weather, main, sys, name} = response.data;
    setWeather({weather: weather[0], main, sys, location: name});
  }
};

export const useWeather = coords => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    try {
      if (coords) getWeather(setWeather, coords);
    } catch (error) {
      console.log('error', error.message);
    }
  }, [coords]);

  return weather;
};
