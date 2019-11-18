import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const List = styled(Animated.FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
`;

export const Card = styled.View`
  background: #fff;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #ddd;
`;

export const CardImage = styled.Image`
  width: 100%;
  flex-direction: row;
  aspect-ratio: 1.9;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const CardContent = styled.View`
  padding: 15px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 20px;
  color: #666;
  margin-bottom: 5px;
`;

export const CardFooter = styled.View``;
