export const getColor = category => {
  const color = {
    general: () => '#d12ea3',
    business: () => '#FF0000',
    entertainment: () => '#00c6d1',
    technology: () => '#084d6e',
    health: () => '#117f2a',
    science: () => '#ff6828',
    sports: () => '#7659c1',
  };

  return color[category]();
};

export const getNavigateOptions = category => {
  const colorActive = getColor(category);

  return {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: colorActive,
      inactiveTintColor: 'rgba(0, 0, 0, 0.3)',
      upperCaseLabel: true,
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: colorActive,
      },
    },
  };
};
