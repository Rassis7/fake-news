import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const getFullSizeView = () => ({
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
});

export const getWidth = percent =>
  parseInt(Dimensions.get('window').width * (percent / 100));

export const getHeight = percent =>
  parseInt(Dimensions.get('window').height * (percent / 100));

export const Container = styled.View`
  padding: ${getWidth(0.05)}px;
`;
