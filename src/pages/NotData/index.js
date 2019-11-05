import React from 'react';

import Animate from 'components/Animate';

// import { Container } from './styles';
import sad from '../../../animations/sad.json';

const NotData = () => {
  return (
    <Animate animateJson={sad} message="Houve um erro ao retornar os dados" />
  );
};

NotData.navigationOptions = {
  header: null,
  mode: 'card',
  transition: {},
};

export default NotData;
