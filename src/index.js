import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar headerTintColor="#000" barStyle="dark-content" />
      <Routes />
    </>
  );
}
