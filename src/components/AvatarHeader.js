import React, {useContext} from 'react';
import {useNavigation} from 'react-navigation-hooks';

import {StyledHeaderBar} from 'styles/global';
import Avatar from './Avatar';
import {UserContext} from '../Store';

export default function AvatarHeader() {
  const {navigate} = useNavigation();
  const {user} = useContext(UserContext);

  return (
    <StyledHeaderBar onPress={() => navigate('Profile')}>
      <Avatar url={user && user.photo} size={3} />
    </StyledHeaderBar>
  );
}
