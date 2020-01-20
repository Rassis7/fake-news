import React from 'react';
import styled from 'styled-components';
import {
  getWidth,
  getHeight,
  StyledButton,
  StyledTextButton,
} from 'styles/global';
import Avatar from 'components/Avatar';

import {Transition} from 'react-navigation-fluid-transitions';

const Container = styled.SafeAreaView`
  padding: ${getWidth(0.05)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${getHeight(5)}px;
`;

export default function Profile() {
  return (
    <Container>
      <Transition shared="avatarProfile">
        <Avatar
          url="https://avatars3.githubusercontent.com/u/6963242?s=400&u=20e06b9d3692da2a949349b9979e5221cd34178e&v=4"
          size={15}
        />
      </Transition>

      <StyledButton background="#02bbee" w={70} h={5} mt={6}>
        <StyledTextButton color="#fff" fontSize={3}>
          Trocar Avatar
        </StyledTextButton>
      </StyledButton>

      <StyledButton background="#e02200" w={70} h={5} mt={30}>
        <StyledTextButton color="#fff" fontSize={3}>
          Sair
        </StyledTextButton>
      </StyledButton>
    </Container>
  );
}
