import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';
import Store from './Store';

export default function App() {
  return (
    <Store>
      <StatusBar headerTintColor="#000" barStyle="dark-content" />
      <Routes />
    </Store>
  );
}
