import React from 'react';
import PropTypes from 'prop-types';

export const Vue = ({
  viewBox,
  width,
  height,
  className="cls-vue"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_11" className={className} data-name="Layer 11">
        <title>Vue</title>
        <path className="cls-22" d="M602.29,352.45h9l-22.44,38.67-22.36-38.67h17.11l5.25,9,5.17-9Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-22" d="M566.48,352.45l22.36,38.67,22.44-38.67h-9l-13.45,23.16-13.53-23.16Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-23" d="M575.23,352.45l13.53,23.32,13.53-23.32H594l-5.17,9-5.25-9Z" transform="translate(-58.73 -95.39)" />
      </g>
    </svg>
  )
}


Vue.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}
