import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppStack} from 'routes/stacks';
import {createStackNavigator} from 'react-navigation-stack';
import AuthLoading from './pages/AuthLoading';
import SignIn from './pages/SignIn';

//https://reactnavigation.org/docs/en/auth-flow.html
const stacks = createStackNavigator(
  {
    Auth: SignIn,
    App: AppStack,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      stacks,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
