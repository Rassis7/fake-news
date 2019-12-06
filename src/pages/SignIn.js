import React from 'react';
import {View, Text} from 'react-native';

import {ContainerSafeAreaView} from 'styles/global';

const SignIn = () => {
  return (
    <ContainerSafeAreaView>
      <Text>SignIn</Text>
    </ContainerSafeAreaView>
  );
};

SignIn.navigationOptions = {
  header: null,
};

export default SignIn;
