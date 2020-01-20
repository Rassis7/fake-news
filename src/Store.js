import React, {useState} from 'react';

export const WeatherContext = React.createContext();

export default function Store({children}) {
  const [weather, setWeather] = useState({coord: null, infos: null});

  return (
    <WeatherContext.Provider value={{weather, setWeather}}>
      {children}
    </WeatherContext.Provider>
  );
}
