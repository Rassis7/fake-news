import React, {useContext} from 'react';
import styled from 'styled-components';
import {useNavigation} from 'react-navigation-hooks';
import AsyncStorage from '@react-native-community/async-storage';

import {GoogleSignin} from '@react-native-community/google-signin';
import Avatar from 'components/Avatar';
import {UserContext} from '../Store';

import {
  getWidth,
  getHeight,
  StyledButton,
  StyledTextButton,
} from 'styles/global';

const Container = styled.SafeAreaView`
  padding: ${getWidth(0.05)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${getHeight(5)}px;
`;

const StyledText = styled.View`
  margin-top: ${getHeight(3)}px;
`;

const StyledName = styled.Text`
  font-size: ${getHeight(5)}px;
  color: #999;
`;

const StyledEmail = styled.Text`
  font-size: ${getHeight(3)}px;
  color: #ccc;
`;

export default function Profile() {
  const {navigate} = useNavigation();
  const {user} = useContext(UserContext);

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('_user');
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigate('Auth');
    } catch (error) {
      console.log('PROFILE ERROR', error);
    }
  };

  return (
    <Container>
      <Avatar url={user && user.photo} size={15} />

      <StyledText>
        <StyledName>{user && user.name}</StyledName>
        <StyledEmail>{user && user.email}</StyledEmail>
      </StyledText>

      <StyledButton background="#e02200" w={70} h={5} mt={40} onPress={signOut}>
        <StyledTextButton color="#fff" fontSize={3}>
          Sair
        </StyledTextButton>
      </StyledButton>
    </Container>
  );
}
