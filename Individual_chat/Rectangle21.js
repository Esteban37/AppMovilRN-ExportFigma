import React from 'react'
const Rectangle21 = ({
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
        width={width ? width : height ? undefined : "299"}
        height={height ? height : undefined}
        viewBox="0 0 299 84" 
        fill={color || "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <path d="M0 6C0 2.68629 2.68629 0 6 0H299V78C299 81.3137 296.314 84 293 84H6.00001C2.6863 84 0 81.3137 0 78V6Z"  fillOpacity="0.03"/>
      </svg>
    </React.Fragment>
  )
}
export default Rectangle21
