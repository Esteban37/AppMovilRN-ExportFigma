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
        <rect x="1" y="1" width="341" height="50" rx="5" fill="white" stroke="black" strokeWidth="2"/><path d="M141.342 21.7578H143.158L145.221 28.188L147.284 21.7578H149.099L145.957 31H144.484L141.342 21.7578ZM140.238 21.7578H142.117L142.466 28.8418V31H140.238V21.7578ZM148.325 21.7578H150.21V31H147.975V28.8418L148.325 21.7578ZM158.518 29.2861V31H153.593V29.2861H158.518ZM154.386 21.7578V31H152.158V21.7578H154.386ZM157.884 25.4268V27.0835H153.593V25.4268H157.884ZM158.537 21.7578V23.478H153.593V21.7578H158.537ZM167.671 21.7578V31H165.45L162.181 25.249V31H159.952V21.7578H162.181L165.45 27.5088V21.7578H167.671ZM174.361 28.5435C174.361 28.3996 174.34 28.2705 174.298 28.1562C174.255 28.0378 174.177 27.9277 174.063 27.8262C173.949 27.7246 173.784 27.623 173.568 27.5215C173.356 27.4157 173.077 27.3057 172.73 27.1914C172.324 27.056 171.932 26.9036 171.555 26.7344C171.179 26.5609 170.842 26.3599 170.546 26.1313C170.25 25.8986 170.015 25.6278 169.842 25.3188C169.668 25.0057 169.581 24.6418 169.581 24.2271C169.581 23.8293 169.67 23.4717 169.848 23.1543C170.026 22.8327 170.273 22.5597 170.591 22.3354C170.912 22.1069 171.289 21.9334 171.721 21.8149C172.152 21.6922 172.624 21.6309 173.136 21.6309C173.813 21.6309 174.41 21.7493 174.926 21.9863C175.447 22.2191 175.853 22.5513 176.145 22.9829C176.441 23.4103 176.589 23.916 176.589 24.5H174.374C174.374 24.2673 174.325 24.062 174.228 23.8843C174.135 23.7065 173.993 23.5669 173.803 23.4653C173.612 23.3638 173.373 23.313 173.085 23.313C172.806 23.313 172.571 23.3553 172.381 23.4399C172.19 23.5246 172.046 23.6388 171.949 23.7827C171.852 23.9224 171.803 24.0768 171.803 24.2461C171.803 24.3857 171.841 24.5127 171.917 24.627C171.998 24.737 172.11 24.8407 172.254 24.938C172.402 25.0353 172.58 25.1284 172.787 25.2173C172.999 25.3062 173.235 25.3929 173.498 25.4775C173.989 25.6341 174.425 25.8097 174.805 26.0044C175.191 26.1948 175.514 26.4128 175.777 26.6582C176.043 26.8994 176.244 27.1745 176.38 27.4834C176.519 27.7923 176.589 28.1414 176.589 28.5308C176.589 28.9455 176.509 29.3136 176.348 29.6353C176.187 29.9569 175.957 30.2298 175.656 30.4541C175.356 30.6742 174.996 30.8413 174.577 30.9556C174.158 31.0698 173.69 31.127 173.174 31.127C172.7 31.127 172.233 31.0677 171.771 30.9492C171.314 30.8265 170.9 30.6403 170.527 30.3906C170.155 30.1367 169.856 29.813 169.632 29.4194C169.412 29.0216 169.302 28.5498 169.302 28.0039H171.536C171.536 28.2747 171.572 28.5033 171.644 28.6895C171.716 28.8757 171.822 29.0259 171.962 29.1401C172.101 29.2502 172.273 29.3306 172.476 29.3813C172.679 29.4279 172.912 29.4512 173.174 29.4512C173.458 29.4512 173.686 29.411 173.86 29.3306C174.033 29.2459 174.16 29.1359 174.241 29.0005C174.321 28.8608 174.361 28.7085 174.361 28.5435ZM182.175 23.7002L179.921 31H177.528L180.924 21.7578H182.441L182.175 23.7002ZM184.041 31L181.781 23.7002L181.489 21.7578H183.025L186.44 31H184.041ZM183.952 27.5532V29.2734H179.21V27.5532H183.952ZM191.315 28.0991V21.7578H193.536V28.0991C193.536 28.717 193.395 29.2523 193.111 29.7051C192.832 30.1579 192.451 30.5091 191.969 30.7588C191.49 31.0042 190.953 31.127 190.356 31.127C189.738 31.127 189.188 31.0233 188.706 30.8159C188.228 30.6086 187.851 30.2891 187.576 29.8574C187.305 29.4258 187.17 28.8757 187.17 28.207H189.404C189.404 28.5202 189.44 28.7656 189.512 28.9434C189.584 29.1169 189.69 29.2396 189.829 29.3115C189.973 29.3792 190.149 29.4131 190.356 29.4131C190.559 29.4131 190.731 29.3623 190.87 29.2607C191.014 29.1549 191.124 29.0047 191.2 28.8101C191.277 28.6112 191.315 28.3742 191.315 28.0991ZM201.832 29.2861V31H196.906V29.2861H201.832ZM197.7 21.7578V31H195.472V21.7578H197.7ZM201.198 25.4268V27.0835H196.906V25.4268H201.198ZM201.851 21.7578V23.478H196.906V21.7578H201.851Z" fill="black"/>
      </svg>
  )
}
export default Button