import React from 'react';
import {Share} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

Icon.loadFont();
export default function ShareNews({news, ...props}) {
  const {title, url} = news;

  const handleShare = () => {
    Share.share({
      message: `${title}. Veja mais em: ${url}`,
    })
      .then(result => console.tron.log(result))
      .catch(errorMsg => console.tron.log(errorMsg));
  };

  return (
    <Container onPress={handleShare}>
      <Icon name="share" {...props} />
    </Container>
  );
}
