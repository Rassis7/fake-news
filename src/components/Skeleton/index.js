import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const Skeleton = React.memo(({children, ...props}) => {
  console.tron.log(children);
});

Skeleton.Image = ({height = 150, width = 350, ...style}) => (
  <ShimmerPlaceHolder
    autoRun={true}
    height={height}
    width={width}
    style={{marginBottom: 7, ...style}}
  />
);

Skeleton.Text = ({height = 10, width = 350, ...style}) => (
  <ShimmerPlaceHolder
    autoRun={true}
    height={height}
    width={width}
    style={{marginBottom: 3, ...style}}
  />
);

export default Skeleton;
