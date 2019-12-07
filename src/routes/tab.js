import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {getNavigateOptions} from 'utils/category';

import News from '../pages/News';

export default Tabs = createMaterialTopTabNavigator(
  {
    geral: {
      screen: () => <News category="general" />,
      navigationOptions: getNavigateOptions('general'),
    },
    tecnológia: {
      screen: () => <News category="technology" />,
      navigationOptions: getNavigateOptions('technology'),
    },
    negócios: {
      screen: () => <News category="business" />,
      navigationOptions: getNavigateOptions('business'),
    },
    entreterimento: {
      screen: () => <News category="entertainment" />,
      navigationOptions: getNavigateOptions('entertainment'),
    },
    saúde: {
      screen: () => <News category="health" />,
      navigationOptions: getNavigateOptions('health'),
    },
    ciências: {
      screen: () => <News category="science" />,
      navigationOptions: getNavigateOptions('science'),
    },
    esporte: {
      screen: () => <News category="sports" />,
      navigationOptions: getNavigateOptions('sports'),
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
  },
);
