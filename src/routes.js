import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';

import Main from 'pages/Main';
import News from 'pages/News';

const main = createAnimatedSwitchNavigator(
  {
    Main: {
      screen: Main,
    },
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

const news = createStackNavigator(
  {
    News: {
      screen: News,
    },
  },
  {
    mode: 'modal',
    headerLayoutPreset: 'center',
    headerBackTitleVisible: true,
  },
);

export default createAppContainer(createSwitchNavigator({main, news}));
