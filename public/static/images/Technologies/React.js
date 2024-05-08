import React from 'react';
import PropTypes from 'prop-types';

export const ReactIcon = ({
  viewBox,
  width,
  height,
  className="cls-react"
}) => {
  return (
    <svg viewBox={viewBox} width={width} height={height}>
      <g id="react" className={className}>
        <title>React</title>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-36 -37 161 143.25176">
          <circle fill="#61dafb" r="2.05" />
          <g fill="none" stroke="#61dafb">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="matrix(.5 .8660254 -.8660254 .5 0 0)" />
            <ellipse rx="11" ry="4.2" transform="matrix(-.5 .8660254 -.8660254 -.5 0 0)" />
          </g>
        </svg>
      </g>
    </svg>
  )
}


ReactIcon.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}