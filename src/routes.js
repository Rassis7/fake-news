import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AuthStack} from 'routes/stacks';
import {TransitionAppStack} from 'routes/transition';

import AuthLoading from './pages/AuthLoading';

//https://reactnavigation.org/docs/en/auth-flow.html
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: AuthStack,
      App: TransitionAppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
