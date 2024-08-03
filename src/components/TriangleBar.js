import React from 'react';

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const path = `M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`;

  return <path d={path} stroke="none" fill={fill} />;
};

export default TriangleBar;
