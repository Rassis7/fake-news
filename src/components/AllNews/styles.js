import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Card = styled.View`
  background: #fff;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #eee;
`;

export const CardImage = styled.Image`
  width: 100%;
  flex-direction: row;
  aspect-ratio: 1.9;
  border-radius: 10px;
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
