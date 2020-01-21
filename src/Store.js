import React, {useState} from 'react';

export const WeatherContext = React.createContext();
export const UserContext = React.createContext();

export default function Store({children}) {
  const [weather, setWeather] = useState({coord: null, infos: null});
  const [currentUser, setCurrentUser] = useState({
    email: null,
    name: null,
    photo: null,
  });

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <WeatherContext.Provider value={{weather, setWeather}}>
        {children}
      </WeatherContext.Provider>
    </UserContext.Provider>
  );
}
