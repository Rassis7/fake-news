import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {getColor} from 'utils/category';
import {getNews} from 'services/api/news';

const Main = ({category}) => {
  const [news, setNews] = useState();

  useEffect(() => {
    const syncNews = async () => {
      const response = await getNews(category, 1);
      setNews(response);
    };
    // console.log(getColor(category));
  }, []);

  console.log(news);

  return <View />;
};

Main.navigationOptions = {
  // tabBarLabe: {
  //   tintColor: '#000',
  // },
};

export default Main;
