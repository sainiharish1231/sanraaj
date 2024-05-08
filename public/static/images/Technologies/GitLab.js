import React from 'react';
import PropTypes from 'prop-types';

export const GitLab = ({
  viewBox,
  width,
  height,
  className="cls-gitLab"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_12" className={className} data-name="Layer 12">
        <title>GitLab</title>
        <g id="Group">
          <g id="g44">
            <path id="path46-2" data-name="path46" className="cls-24" d="M434.68,179l-2.5-7.8-5-15.4a.83.83,0,0,0-1.6,0l-5,15.4h-16.7l-5-15.4a.83.83,0,0,0-1.6,0l-5,15.4-2.5,7.8a1.71,1.71,0,0,0,.6,1.9l21.9,15.9,21.9-15.9a1.67,1.67,0,0,0,.5-1.9" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g48">
            <path id="path50-2" data-name="path50" className="cls-25" d="M412.14,196.81h0l8.3-25.6h-16.6l8.3,25.6Z" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g56">
            <path id="path58" className="cls-24" d="M412.18,196.81l-8.3-25.6h-11.7l20,25.6Z" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g64">
            <path id="path66" className="cls-26" d="M392.13,171.21h0l-2.5,7.8a1.71,1.71,0,0,0,.6,1.9l21.9,15.9-20-25.6Z" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g72">
            <path id="path74" className="cls-25" d="M392.17,171.21h11.7l-5-15.4a.83.83,0,0,0-1.6,0l-5.1,15.4Z" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g76">
            <path id="path78" className="cls-24" d="M412.14,196.81l8.3-25.6h11.7l-20,25.6Z" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g80">
            <path id="path82" className="cls-26" d="M432.15,171.21h0l2.5,7.8a1.71,1.71,0,0,1-.6,1.9l-21.9,15.9,20-25.6Z" transform="translate(-58.73 -95.39)" />
          </g>
          <g id="g84">
            <path id="path86" className="cls-25" d="M432.22,171.21h-11.7l5-15.4a.83.83,0,0,1,1.6,0l5.1,15.4Z" transform="translate(-58.73 -95.39)" />
          </g>
        </g>

      </g>
    </svg>
  )
}


GitLab.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}
