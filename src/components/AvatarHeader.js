import React, {useContext} from 'react';
import {useNavigation} from 'react-navigation-hooks';

import {UserContext} from '../Store';
import {StyledHeaderBar} from '../styles/global';

import Avatar from './Avatar';

export default function AvatarHeader() {
  const {navigate} = useNavigation();
  const {currentUser} = useContext(UserContext);

  return (
    <StyledHeaderBar onPress={() => navigate('Profile')}>
      <Avatar url={currentUser ? currentUser.photo : null} size={3} />
    </StyledHeaderBar>
  );
}
