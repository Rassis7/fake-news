import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const List = styled(Animated.FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  flex: 1;
  padding: 10px;
`;

export const ItemList = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ImageList = styled.Image`
  width: 200px;
  height: 100px;
  background: #eee;
  border-width: 1px;
  border-color: #ddd;
`;

export const TitleNews = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-weight: bold;
  font-size: 15px;
  margin-top: 15px;
  padding: 10px;
`;

export const Footer = styled.View`
  padding: 10px;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const Author = styled.Text`
  color: #999;
`;