import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

//Usarei em breve
// import {Transition} from 'react-native-reanimated';

import Main from 'pages/Main';
import News from 'pages/News';
import SignIn from 'pages/SignIn';
import AuthLoading from 'pages/AuthLoading';
// import NotData from 'pages/NotData';

const AppStack = createStackNavigator({News});
const AuthStack = createStackNavigator({SignIn});

const Tabs = createMaterialTopTabNavigator(
  {
    Geral: () => <Main category="general" />,
    Tecnologia: () => <Main category="technology" />,
    Negócios: () => <Main category="business" />,
    Entreterimento: () => <Main category="entertainment" />,
    Saúde: () => <Main category="health" />,
    Ciências: () => <Main category="science" />,
    Esporte: () => <Main category="sports" />,
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#000',
      inactiveTintColor: 'red',

      style: {
        backgroundColor: '#fff',
      },
    },
  },
);

const TabsStack = createStackNavigator({Tabs});

//https://reactnavigation.org/docs/en/auth-flow.html
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: AuthStack,
      App: AppStack,
      Tabs: TabsStack,
    },
    {
      initialRouteName: 'Tabs',
    },
  ),
);
