import React from 'react'
const Button = ({
  className,
  desc,
  height,
  title,
  width,
}) => {
  return (
      <svg
        {...{ className }}
        width={width ? width : height ? undefined : "343"}
        height={height ? height : undefined}
        viewBox="0 0 343 52" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <rect x="1" y="1" width="341" height="50" rx="5" fill="black" stroke="black" strokeWidth="2"/><path d="M133.08 23.7002L130.826 31H128.433L131.829 21.7578H133.346L133.08 23.7002ZM134.946 31L132.686 23.7002L132.394 21.7578H133.93L137.345 31H134.946ZM134.857 27.5532V29.2734H130.115V27.5532H134.857ZM143.661 27.8706H145.882C145.853 28.5138 145.679 29.0809 145.362 29.5718C145.045 30.0627 144.604 30.4456 144.042 30.7207C143.483 30.9915 142.823 31.127 142.061 31.127C141.443 31.127 140.891 31.0233 140.404 30.8159C139.922 30.6086 139.511 30.3102 139.173 29.9209C138.839 29.5316 138.583 29.0597 138.405 28.5054C138.231 27.951 138.145 27.3268 138.145 26.6328V26.1313C138.145 25.4373 138.236 24.8132 138.418 24.2588C138.604 23.7002 138.866 23.2262 139.205 22.8369C139.547 22.4434 139.958 22.1429 140.436 21.9355C140.914 21.7282 141.445 21.6245 142.029 21.6245C142.833 21.6245 143.513 21.7684 144.067 22.0562C144.621 22.3439 145.051 22.7396 145.356 23.2432C145.66 23.7425 145.84 24.3117 145.895 24.9507H143.673C143.665 24.6037 143.606 24.3138 143.496 24.0811C143.386 23.8441 143.212 23.6663 142.975 23.5479C142.738 23.4294 142.423 23.3701 142.029 23.3701C141.754 23.3701 141.515 23.4209 141.312 23.5225C141.109 23.624 140.94 23.7848 140.804 24.0049C140.669 24.2249 140.567 24.5106 140.5 24.8618C140.436 25.2088 140.404 25.6278 140.404 26.1187V26.6328C140.404 27.1237 140.434 27.5426 140.493 27.8896C140.552 28.2367 140.648 28.5202 140.779 28.7402C140.91 28.9603 141.079 29.1232 141.287 29.229C141.498 29.3306 141.756 29.3813 142.061 29.3813C142.4 29.3813 142.685 29.3285 142.918 29.2227C143.151 29.1126 143.331 28.9476 143.458 28.7275C143.585 28.5033 143.652 28.2176 143.661 27.8706ZM151.741 21.7578V31H149.513V21.7578H151.741ZM154.521 21.7578V23.478H146.796V21.7578H154.521ZM161.001 21.7578H163.23V27.7944C163.23 28.5138 163.079 29.1232 162.779 29.6226C162.478 30.1177 162.057 30.4922 161.516 30.7461C160.974 31 160.337 31.127 159.605 31.127C158.881 31.127 158.244 31 157.694 30.7461C157.148 30.4922 156.721 30.1177 156.412 29.6226C156.107 29.1232 155.955 28.5138 155.955 27.7944V21.7578H158.189V27.7944C158.189 28.1753 158.244 28.4863 158.355 28.7275C158.465 28.9645 158.625 29.138 158.837 29.248C159.049 29.3581 159.305 29.4131 159.605 29.4131C159.91 29.4131 160.166 29.3581 160.373 29.248C160.58 29.138 160.737 28.9645 160.843 28.7275C160.949 28.4863 161.001 28.1753 161.001 27.7944V21.7578ZM168.929 23.7002L166.676 31H164.283L167.679 21.7578H169.196L168.929 23.7002ZM170.795 31L168.536 23.7002L168.244 21.7578H169.78L173.195 31H170.795ZM170.707 27.5532V29.2734H165.965V27.5532H170.707ZM180.5 29.2861V31H175.829V29.2861H180.5ZM176.622 21.7578V31H174.394V21.7578H176.622ZM184.328 21.7578V31H182.106V21.7578H184.328ZM193.334 29.2861V31H186.644V29.2861H193.334ZM193.29 22.9004L187.748 31H186.136V29.8257L191.741 21.7578H193.29V22.9004ZM192.573 21.7578V23.478H186.104V21.7578H192.573ZM198.875 23.7002L196.622 31H194.229L197.625 21.7578H199.142L198.875 23.7002ZM200.742 31L198.482 23.7002L198.19 21.7578H199.726L203.141 31H200.742ZM200.653 27.5532V29.2734H195.911V27.5532H200.653ZM204.34 21.7578H207.977C208.688 21.7578 209.306 21.8636 209.831 22.0752C210.356 22.2868 210.76 22.5999 211.043 23.0146C211.331 23.4294 211.475 23.9414 211.475 24.5508C211.475 25.0798 211.392 25.522 211.227 25.8774C211.062 26.2329 210.832 26.527 210.536 26.7598C210.244 26.9883 209.903 27.1766 209.514 27.3247L208.784 27.7373H205.73L205.718 26.0171H207.977C208.261 26.0171 208.496 25.9663 208.682 25.8647C208.868 25.7632 209.008 25.6193 209.101 25.4331C209.198 25.2427 209.247 25.0163 209.247 24.7539C209.247 24.4873 209.198 24.2588 209.101 24.0684C209.004 23.8779 208.86 23.7319 208.669 23.6304C208.483 23.5288 208.253 23.478 207.977 23.478H206.568V31H204.34V21.7578ZM209.399 31L207.355 26.9121L209.717 26.8994L211.786 30.9048V31H209.399Z" fill="white"/>
      </svg>
  )
}
export default Button