import React from 'react';

const getSVG = (name, styles) => {
  switch (name) {
    case 'circle':
      return (
        <circle cx="50" cy="50" r="40" stroke={styles.stroke} stroke-width="3" fill={styles.fill} />
      );

    case 'rectangle':
      return (
        <rect width="200" height="100" stroke={styles.stroke} stroke-width="6" fill={styles.fill} />
      );

    default:
      return <path />
  }
}

const SVG = ({
  name = ' ',
  style = {},
  fill = '#000000',
  viewBox = ' ',
  width = ' ',
  className = ' ',
  id = ' ',
  stroke = ' '
}) => (
  <svg
    width={width}
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id={id}
  >
    {getSVG(name, { fill, stroke })}
  </svg>
);
export default SVG;