import React from 'react'
const StatusBar = ({
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
        width={width ? width : height ? undefined : "375"}
        height={height ? height : undefined}
        viewBox="0 0 375 44" 
        fill={color || "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <rect opacity="0.35" x="336.5" y="17.8333" width="21" height="10.3333" rx="2.16667" stroke={color || "black"}/><path opacity="0.4" d="M359 21V25C359.808 24.6612 360.333 23.8731 360.333 23C360.333 22.1269 359.808 21.3388 359 21Z" /><rect x="338" y="19.3333" width="18" height="7.33333" rx="1.33333" /><path fillRule="evenodd" clipRule="evenodd" d="M323.334 19.5738C325.558 19.5739 327.698 20.4116 329.31 21.9138C329.432 22.0297 329.626 22.0283 329.746 21.9105L330.906 20.7626C330.967 20.7029 331 20.622 331 20.5378C330.999 20.4536 330.965 20.373 330.903 20.314C326.672 16.3397 319.995 16.3397 315.763 20.314C315.702 20.373 315.667 20.4535 315.667 20.5377C315.666 20.6219 315.7 20.7029 315.76 20.7626L316.921 21.9105C317.041 22.0284 317.235 22.0299 317.356 21.9138C318.969 20.4115 321.109 19.5738 323.334 19.5738ZM323.332 23.2994C324.556 23.2993 325.736 23.7559 326.643 24.5805C326.766 24.6975 326.959 24.6949 327.079 24.5747L328.239 23.3976C328.3 23.3358 328.334 23.2521 328.333 23.165C328.332 23.078 328.297 22.9949 328.234 22.9345C325.472 20.3551 321.194 20.3551 318.432 22.9345C318.37 22.9949 318.334 23.078 318.333 23.1651C318.332 23.2522 318.367 23.3359 318.428 23.3976L319.588 24.5747C319.708 24.6949 319.901 24.6975 320.024 24.5805C320.93 23.7564 322.109 23.2999 323.332 23.2994ZM325.667 26.023C325.668 26.1084 325.634 26.1908 325.572 26.2507L323.557 28.2418C323.498 28.3003 323.417 28.3333 323.333 28.3333C323.249 28.3333 323.169 28.3003 323.11 28.2418L321.095 26.2507C321.032 26.1908 320.998 26.1083 321 26.0229C321.002 25.9374 321.04 25.8565 321.104 25.7992C322.391 24.7335 324.276 24.7335 325.562 25.7992C325.627 25.8566 325.665 25.9375 325.667 26.023Z" /><path fillRule="evenodd" clipRule="evenodd" d="M310.667 18.6667C310.667 18.1145 310.219 17.6667 309.667 17.6667H308.667C308.114 17.6667 307.667 18.1145 307.667 18.6667V27.3334C307.667 27.8857 308.114 28.3334 308.667 28.3334H309.667C310.219 28.3334 310.667 27.8857 310.667 27.3334V18.6667ZM304 20.0001H305C305.552 20.0001 306 20.4478 306 21.0001V27.3334C306 27.8857 305.552 28.3334 305 28.3334H304C303.448 28.3334 303 27.8857 303 27.3334V21.0001C303 20.4478 303.448 20.0001 304 20.0001ZM300.333 22.3334H299.333C298.781 22.3334 298.333 22.7811 298.333 23.3334V27.3334C298.333 27.8857 298.781 28.3334 299.333 28.3334H300.333C300.886 28.3334 301.333 27.8857 301.333 27.3334V23.3334C301.333 22.7811 300.886 22.3334 300.333 22.3334ZM296.667 25.3334C296.667 24.7811 296.219 24.3334 295.667 24.3334H294.667C294.114 24.3334 293.667 24.7811 293.667 25.3334V27.3334C293.667 27.8857 294.114 28.3334 294.667 28.3334H295.667C296.219 28.3334 296.667 27.8857 296.667 27.3334V25.3334Z" /><path d="M36.9974 28.2563C39.6854 28.2563 41.282 26.1543 41.282 22.5947C41.282 21.2544 41.0257 20.1265 40.535 19.2549C39.8245 17.8999 38.6014 17.1675 37.056 17.1675C34.7562 17.1675 33.1302 18.7129 33.1302 20.8809C33.1302 22.917 34.595 24.3965 36.6092 24.3965C37.847 24.3965 38.8504 23.8179 39.3484 22.8145H39.3704C39.3704 22.8145 39.3997 22.8145 39.407 22.8145C39.4217 22.8145 39.473 22.8145 39.473 22.8145C39.473 25.2314 38.5574 26.6743 37.012 26.6743C36.1038 26.6743 35.4007 26.1763 35.159 25.3779H33.2767C33.5916 27.1138 35.0638 28.2563 36.9974 28.2563ZM37.0633 22.895C35.8475 22.895 34.9832 22.0308 34.9832 20.8223C34.9832 19.6431 35.8914 18.7422 37.0706 18.7422C38.2498 18.7422 39.158 19.6577 39.158 20.8516C39.158 22.0308 38.2718 22.895 37.0633 22.895ZM44.2666 26.8794C44.9624 26.8794 45.4385 26.3813 45.4385 25.7222C45.4385 25.0557 44.9624 24.5649 44.2666 24.5649C43.5781 24.5649 43.0947 25.0557 43.0947 25.7222C43.0947 26.3813 43.5781 26.8794 44.2666 26.8794ZM44.2666 21.3862C44.9624 21.3862 45.4385 20.8955 45.4385 20.2363C45.4385 19.5698 44.9624 19.0791 44.2666 19.0791C43.5781 19.0791 43.0947 19.5698 43.0947 20.2363C43.0947 20.8955 43.5781 21.3862 44.2666 21.3862ZM47.4635 20.522V20.5513H49.236V20.522C49.236 19.4453 49.9831 18.7202 51.089 18.7202C52.129 18.7202 52.8908 19.394 52.8908 20.3242C52.8908 21.0713 52.5319 21.6206 51.089 23.0854L47.5661 26.689V28H54.9049V26.396H50.1588V26.2715L52.3707 24.0522C54.1652 22.2798 54.7438 21.3423 54.7438 20.207C54.7438 18.4419 53.235 17.1675 51.1476 17.1675C48.9796 17.1675 47.4635 18.5444 47.4635 20.522ZM57.1424 28H59.1199L63.639 19.0425V17.4312H56.2855V19.0205H61.7347V19.1377L57.1424 28Z" />
      </svg>
    </React.Fragment>
  )
}
export default StatusBar
