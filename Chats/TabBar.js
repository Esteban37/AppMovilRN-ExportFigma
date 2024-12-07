import React from 'react'
const TabBar = ({
  className,
  desc,
  height,
  title,
  width,
}) => {
  return (
      <svg
        {...{ className }}
        width={width ? width : height ? undefined : "375"}
        height={height ? height : undefined}
        viewBox="0 0 375 84" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <g filter="url(#filter0_bd_1_582)"><rect y="1" width="375" height="83" fill="white"/></g><path fillRule="evenodd" clipRule="evenodd" d="M23.7071 31.4853L24.7782 30.4142V36.0563V36.0564V37.0563H36.7782V36.0564V36.0563V30.4142L37.8492 31.4853L38.5563 30.7782L31.4853 23.7071L30.7782 23L30.0711 23.7071L23 30.7782L23.7071 31.4853ZM25.7782 36.0563V29.4142L30.7782 24.4142L35.7782 29.4142V36.0563H32.7782V32.0564V31.0564H28.7782V32.0564V36.0563H25.7782ZM29.7782 32.0564V36.0563H31.7782V32.0564H29.7782Z" fill="black" fillOpacity="0.8"/><path fillRule="evenodd" clipRule="evenodd" d="M106 28.5C106 31.5376 103.538 34 100.5 34C97.4624 34 95 31.5376 95 28.5C95 25.4624 97.4624 23 100.5 23C103.538 23 106 25.4624 106 28.5ZM104.729 33.4362C103.592 34.411 102.115 35 100.5 35C96.9101 35 94 32.0899 94 28.5C94 24.9101 96.9101 22 100.5 22C104.09 22 107 24.9101 107 28.5C107 30.1149 106.411 31.5923 105.436 32.7291L109.854 37.1464L109.146 37.8536L104.729 33.4362Z" fill="black" fillOpacity="0.8"/><g clipPath="url(#clip0_1_582)"><rect x="153" y="10" width="70" height="40" rx="20" fill="#007BFF"/><path fillRule="evenodd" clipRule="evenodd" d="M188.5 23.5H187.5V29.5H181.5V30.5H187.5V36.5H188.5V30.5H194.5V29.5H188.5V23.5Z" fill="white"/></g><path fillRule="evenodd" clipRule="evenodd" d="M267.927 33.5266L267.69 33.0341C267.248 32.1174 267 31.0891 267 30C267 26.134 270.134 23 274 23C277.866 23 281 26.134 281 30C281 33.866 277.866 37 274 37C272.895 37 271.853 36.7448 270.926 36.2911L270.658 36.1599L270.362 36.1969L265.944 36.7492L267.64 33.9923L267.927 33.5266ZM264.672 36.9082L264 38L265.272 37.841L270.487 37.1892C271.547 37.7085 272.74 38 274 38C278.418 38 282 34.4183 282 30C282 25.5817 278.418 22 274 22C269.582 22 266 25.5817 266 30C266 31.2426 266.283 32.419 266.789 33.4682L264.672 36.9082Z" fill="black" fillOpacity="0.8"/><path d="M344.217 30.4783C341.336 30.4783 339 32.8142 339 35.6957V37H349.435V35.6957C349.435 32.8142 347.099 30.4783 344.217 30.4783Z" stroke="black"/><ellipse cx="344.218" cy="25.913" rx="3.91307" ry="3.91304" stroke="black" strokeLinecap="square"/><rect x="120" y="71" width="135" height="5" rx="2.5" fill="black"/><defs><filter id="filter0_bd_1_582" x="-27.1828" y="-26.1828" width="429.366" height="137.366" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5914"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_582"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="-0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/><feBlend mode="normal" in2="effect1_backgroundBlur_1_582" result="effect2_dropShadow_1_582"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_582" result="shape"/></filter><clipPath id="clip0_1_582"><rect width="70" height="40" fill="white" transform="translate(153 10)"/></clipPath></defs>
      </svg>
  )
}
export default TabBar
