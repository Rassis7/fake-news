import React, {useState} from 'react';

export const WeatherContext = React.createContext();
export const UserContext = React.createContext();

export default function Store({children}) {
  const [weather, setWeather] = useState({coord: null, infos: null});
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <WeatherContext.Provider value={{weather, setWeather}}>
        {children}
      </WeatherContext.Provider>
    </UserContext.Provider>
  );
}
