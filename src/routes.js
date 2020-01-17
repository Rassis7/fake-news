import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AuthStack, AppStack} from 'routes/stacks';

import AuthLoading from './pages/AuthLoading';

//https://reactnavigation.org/docs/en/auth-flow.html
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
