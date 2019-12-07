import {createStackNavigator} from 'react-navigation-stack';

//Usarei em breve
// import {Transition} from 'react-native-reanimated';

import SignIn from 'pages/SignIn';
import Tabs from 'routes/tab';
// import NotData from 'pages/NotData';

export const AuthStack = createStackNavigator({SignIn});

export const AppStack = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: () => ({
      title: 'AQUELA LOGO FODA AQUI',
      headerTintColor: '#000',
      headerStyle: {borderBottomWidth: 0},
    }),
  },
});
