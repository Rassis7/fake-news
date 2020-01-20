import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

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

export const StyledButton = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (!props.mt ? 0 : getHeight(props.mt))}px;
  margin-bottom: ${props => (!props.mb ? 0 : getHeight(props.mb))}px;
  width: ${props => getWidth(props.w)}px;
  height: ${props => getHeight(props.h)}px;
  background: ${props => props.background};
  border-radius: 4px;
`;

export const StyledTextButton = styled.Text`
  color: ${props => props.color};
  font-size: ${props => (props.fontSize ? getHeight(props.fontSize) : 14)}px;
`;
