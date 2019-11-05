import React from 'react';
import {View} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import {
  Container,
  LottierAnimate,
  TextAnimate,
  Reload,
  TextReload,
} from './styles';

export default function Animate({animateJson, message}) {
  const {goBack} = useNavigation();

  return (
    <Container>
      <TextAnimate>{message}</TextAnimate>
      <View>
        <LottierAnimate
          autoSize
          resizeMode="contain"
          source={animateJson}
          autoPlay
          loop
        />
      </View>

      <Reload onPress={() => goBack()}>
        <TextReload>Tente novamente</TextReload>
      </Reload>
    </Container>
  );
}
