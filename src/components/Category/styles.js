import styled, {css} from 'styled-components/native';
import Touchable from 'react-native-platform-touchable';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  margin-bottom: 35px;
  max-height: 150px;
`;

export const TitleCategory = styled.Text`
  font-size: 25px;
  color: #999;
  margin-bottom: 15px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  height: 100px;
`;

export const Item = styled(Touchable)`
  background: ${props => props.color};
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;

  ${props =>
    !props.selected &&
    css`
      background: rgba(0, 0, 0, 0.3);
    `}
`;

export const ItemText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;
