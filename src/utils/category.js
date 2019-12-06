export const getColor = category => {
  const color = {
    general: () => '#d12ea3',
    technology: () => '#084d6e',
    business: () => '#FF0000',
    entertainment: () => '#00c6d1',
    health: () => '#117f2a',
    science: () => '#ff6828',
    sports: () => '#7659c1',
  };

  return color[category]();
};
