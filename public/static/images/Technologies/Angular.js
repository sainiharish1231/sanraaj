import React from 'react';
import PropTypes from 'prop-types';

export const Angular = ({
  viewBox,
  width,
  height,
  className="cls-angular"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_27" className={className} data-name="Layer 27">
        <title>Angular</title>
        <path className="cls-11" d="M536.48,362.62l-22.24,7.85,3.5,29.1,18.74,10.28,18.81-10.44,3.5-29.1Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-12" d="M556.59,372l-20.19-6.86v42.28L553.31,398Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-13" d="M516.75,372.14l3,26.05,16.68,9.22V365.06Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-14" d="M542,387.61l-5.56,2.59h-5.87l-2.74,6.86-5.1.08,13.71-30.55Zm-.53-1.29-5-9.9-4.11,9.67h4l5,.23Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-11" d="M536.4,366.66v9.83l4.65,9.67H536.4v4h6.47l3,7,4.88.08Z" transform="translate(-58.73 -95.39)" />
      </g>
    </svg>
  )
}

Angular.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}
