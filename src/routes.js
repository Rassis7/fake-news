import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';

import Main from 'pages/Main';
import News from 'pages/News';
import NotData from 'pages/NotData';

const Navigator = createStackNavigator(
  {
    Main,
    News,
    NotData,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    mode: 'modal',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
    },
    transition: (
      <Transition.Sequence>
        <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
        <Transition.Change />
        <Transition.Together>
          <Transition.In
            type="slide-bottom"
            durationMs={400}
            interpolation="easeOut"
            propagation="bottom"
          />
          <Transition.In type="fade" durationMs={200} delayMs={100} />
        </Transition.Together>
      </Transition.Sequence>
    ),
  },
);

export default createAppContainer(createSwitchNavigator({Navigator}));
