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
    'ciências e tecnológia': {
      screen: () => <News category="science&technology" />,
      navigationOptions: getNavigateOptions('science&technology'),
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
