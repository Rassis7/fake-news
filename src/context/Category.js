import React from 'react';

const CategorySelectedContext = React.createContext({
  selectedCategory: {},
  setSelectedCategory: () => {},
});

export default CategorySelectedContext;
