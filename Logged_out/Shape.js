import React from 'react'
const Shape = ({
  activeColor,
  className,
  color,
  desc,
  focusColor,
  height,
  hoverColor,
  title,
  width,
}) => {
  const css = `
    ${hoverColor ? `svg[data-hover="${hoverColor}"]:hover {
      fill: ${hoverColor};
    }` : ''}
    ${focusColor ? `svg[data-focus="${focusColor}"]:focus {
      fill: ${focusColor};
    }` : ''}
    ${activeColor ? `svg[data-active="${activeColor}"]:active {
      fill: ${activeColor};
    }` : ''}
  `
  return (
    <React.Fragment>
      <style>
        {css}
      </style>
      <svg
        {...{ className }}
        data-hover={hoverColor}
        data-focus={focusColor}
        data-active={activeColor}
        width={width ? width : height ? undefined : "135"}
        height={height ? height : undefined}
        viewBox="0 0 135 5" 
        fill={color || "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <rect width="135" height="5" rx="2.5" />
      </svg>
    </React.Fragment>
  )
}
export default Shape
