import styled from 'styled-components/native';

export const HeaderLeftView = styled.TouchableOpacity`
  padding: 5px;
`;

export const Header = styled.Image`
  width: 100%;
  flex-direction: row;
  aspect-ratio: 1.3;
`;

export const Content = styled.View`
  margin: 20px 0;
  padding: 15px;
`;

export const PublishedAt = styled.Text`
  align-self: flex-end;
  color: #999;
  margin: 0 10px 10px;
`;

export const Border = styled.View`
  border-bottom-width: 4px;
  border-color: ${props => props.border};
  width: 40%;
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ContentBody = styled.View`
  padding: 10px;
`;

export const ContentNews = styled.Text`
  font-size: 20px;
  color: #333;
`;

export const OriginalNews = styled.Text`
  color: #666;
  font-size: 18px;
  text-decoration: underline #666;
`;
