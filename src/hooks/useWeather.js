import {useEffect, useState} from 'react';
import weatherApi from '../services/weatherApi';

const getWeather = async (setWeather, coords) => {
  const {lat, lon} = coords;
  const response = await weatherApi.get('weather', {
    params: {
      lat,
      lon,
      lang: 'pt',
      appid: '5b92021c0f297c582df0a61880f97bba',
      units: 'metric',
    },
  });

  if (response && response.data) {
    const {weather, main, sys} = response.data;
    setWeather({weather: weather[0], main, sys});
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
