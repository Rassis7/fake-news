import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

export const LottierAnimate = styled(Lottie)`
  width: 400px;
  height: 400px;
`;

export const TextAnimate = styled.Text`
  font-size: 28px;
  text-align: center;
`;

export const Reload = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  background: #18121e;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 60%;
`;

export const TextReload = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
