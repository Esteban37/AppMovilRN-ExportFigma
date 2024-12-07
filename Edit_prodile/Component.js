import React from 'react'
const Component = ({
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
        <rect x="1" y="1" width="341" height="50" fill="white" stroke="black" strokeWidth="2"/><path d="M26.4409 20.3359V31H25.02L19.6514 22.7749V31H18.2378V20.3359H19.6514L25.042 28.583V20.3359H26.4409ZM30.4619 20.3359V31H29.0483V20.3359H30.4619ZM36.7534 20.3359V31H35.3618V20.3359H36.7534ZM40.1812 20.3359V21.4932H31.9414V20.3359H40.1812ZM41.4995 30.2822C41.4995 30.0527 41.5703 29.8599 41.7119 29.7036C41.8584 29.5425 42.0684 29.4619 42.3418 29.4619C42.6152 29.4619 42.8228 29.5425 42.9644 29.7036C43.1108 29.8599 43.1841 30.0527 43.1841 30.2822C43.1841 30.5068 43.1108 30.6973 42.9644 30.8535C42.8228 31.0098 42.6152 31.0879 42.3418 31.0879C42.0684 31.0879 41.8584 31.0098 41.7119 30.8535C41.5703 30.6973 41.4995 30.5068 41.4995 30.2822ZM41.5068 23.8149C41.5068 23.5854 41.5776 23.3926 41.7192 23.2363C41.8657 23.0752 42.0757 22.9946 42.3491 22.9946C42.6226 22.9946 42.8301 23.0752 42.9717 23.2363C43.1182 23.3926 43.1914 23.5854 43.1914 23.8149C43.1914 24.0396 43.1182 24.23 42.9717 24.3862C42.8301 24.5425 42.6226 24.6206 42.3491 24.6206C42.0757 24.6206 41.8657 24.5425 41.7192 24.3862C41.5776 24.23 41.5068 24.0396 41.5068 23.8149ZM53.2183 20.2773V31H51.8633V21.9692L49.1313 22.9653V21.7422L53.0059 20.2773H53.2183ZM64.1899 29.8867V31H57.21V30.0259L60.7036 26.1367C61.1333 25.6582 61.4653 25.2529 61.6997 24.9209C61.939 24.584 62.105 24.2837 62.1978 24.02C62.2954 23.7515 62.3442 23.478 62.3442 23.1997C62.3442 22.8481 62.271 22.5308 62.1245 22.2476C61.9829 21.9595 61.7729 21.73 61.4946 21.5591C61.2163 21.3882 60.8794 21.3027 60.4839 21.3027C60.0103 21.3027 59.6147 21.3955 59.2974 21.5811C58.9849 21.7617 58.7505 22.0156 58.5942 22.3428C58.438 22.6699 58.3599 23.0459 58.3599 23.4707H57.0049C57.0049 22.8701 57.1367 22.3208 57.4004 21.8228C57.6641 21.3247 58.0547 20.9292 58.5723 20.6362C59.0898 20.3384 59.7271 20.1895 60.4839 20.1895C61.1577 20.1895 61.7339 20.3091 62.2124 20.5483C62.6909 20.7827 63.0571 21.1147 63.311 21.5444C63.5698 21.9692 63.6992 22.4673 63.6992 23.0386C63.6992 23.3511 63.6455 23.6685 63.5381 23.9907C63.4355 24.3081 63.2915 24.6255 63.106 24.9429C62.9253 25.2603 62.7129 25.5728 62.4688 25.8804C62.2295 26.188 61.9731 26.4907 61.6997 26.7886L58.8433 29.8867H64.1899ZM67.6177 25.0015H68.5845C69.0581 25.0015 69.4487 24.9233 69.7563 24.7671C70.0688 24.606 70.3008 24.3887 70.4521 24.1152C70.6084 23.8369 70.6865 23.5244 70.6865 23.1777C70.6865 22.7676 70.6182 22.4233 70.4814 22.145C70.3447 21.8667 70.1396 21.6567 69.8662 21.5151C69.5928 21.3735 69.2461 21.3027 68.8262 21.3027C68.4453 21.3027 68.1084 21.3784 67.8154 21.5298C67.5273 21.6763 67.3003 21.8862 67.1343 22.1597C66.9731 22.4331 66.8926 22.7554 66.8926 23.1265H65.5376C65.5376 22.5845 65.6743 22.0913 65.9478 21.647C66.2212 21.2026 66.6045 20.8486 67.0977 20.585C67.5957 20.3213 68.1719 20.1895 68.8262 20.1895C69.4707 20.1895 70.0347 20.3042 70.5181 20.5337C71.0015 20.7583 71.3774 21.0952 71.646 21.5444C71.9146 21.9888 72.0488 22.543 72.0488 23.207C72.0488 23.4756 71.9854 23.7637 71.8584 24.0713C71.7363 24.374 71.5435 24.6572 71.2798 24.9209C71.021 25.1846 70.6841 25.4019 70.269 25.5728C69.854 25.7388 69.356 25.8218 68.7749 25.8218H67.6177V25.0015ZM67.6177 26.1147V25.3018H68.7749C69.4536 25.3018 70.0151 25.3823 70.4595 25.5435C70.9038 25.7046 71.2529 25.9194 71.5068 26.188C71.7656 26.4565 71.9463 26.752 72.0488 27.0742C72.1562 27.3916 72.21 27.709 72.21 28.0264C72.21 28.5244 72.1245 28.9663 71.9536 29.3521C71.7876 29.7378 71.5508 30.0649 71.2432 30.3335C70.9404 30.6021 70.584 30.8047 70.1738 30.9414C69.7637 31.0781 69.3169 31.1465 68.8335 31.1465C68.3696 31.1465 67.9326 31.0806 67.5225 30.9487C67.1172 30.8169 66.7583 30.6265 66.4458 30.3774C66.1333 30.1235 65.8892 29.8135 65.7134 29.4473C65.5376 29.0762 65.4497 28.6538 65.4497 28.1802H66.8047C66.8047 28.5513 66.8853 28.876 67.0464 29.1543C67.2124 29.4326 67.4468 29.6499 67.7495 29.8062C68.0571 29.9575 68.4185 30.0332 68.8335 30.0332C69.2485 30.0332 69.605 29.9624 69.9028 29.8208C70.2056 29.6743 70.4375 29.4546 70.5986 29.1616C70.7646 28.8687 70.8477 28.5 70.8477 28.0557C70.8477 27.6113 70.7549 27.2476 70.5693 26.9644C70.3838 26.6763 70.1201 26.4639 69.7783 26.3271C69.4414 26.1855 69.0435 26.1147 68.5845 26.1147H67.6177ZM81.2847 27.4111V28.5244H73.5796V27.7261L78.355 20.3359H79.4609L78.2744 22.4746L75.1177 27.4111H81.2847ZM79.7979 20.3359V31H78.4429V20.3359H79.7979ZM84.229 25.9243L83.145 25.646L83.6797 20.3359H89.1509V21.5884H84.8296L84.5073 24.4888C84.7026 24.3765 84.9492 24.2715 85.2471 24.1738C85.5498 24.0762 85.8965 24.0273 86.2871 24.0273C86.7803 24.0273 87.2222 24.1128 87.6128 24.2837C88.0034 24.4497 88.3354 24.689 88.6089 25.0015C88.8872 25.314 89.0996 25.6899 89.2461 26.1294C89.3926 26.5688 89.4658 27.0596 89.4658 27.6016C89.4658 28.1143 89.395 28.5854 89.2534 29.0151C89.1167 29.4448 88.9092 29.8208 88.6309 30.1431C88.3525 30.4604 88.001 30.707 87.5762 30.8828C87.1562 31.0586 86.6606 31.1465 86.0894 31.1465C85.6597 31.1465 85.252 31.0879 84.8662 30.9707C84.4854 30.8486 84.1436 30.6655 83.8408 30.4214C83.543 30.1724 83.2988 29.8647 83.1084 29.4985C82.9229 29.1274 82.8057 28.6929 82.7568 28.1948H84.0459C84.1045 28.5952 84.2217 28.9321 84.3975 29.2056C84.5732 29.479 84.8027 29.6865 85.0859 29.8281C85.374 29.9648 85.7085 30.0332 86.0894 30.0332C86.4116 30.0332 86.6973 29.9771 86.9463 29.8647C87.1953 29.7524 87.4053 29.5913 87.5762 29.3813C87.7471 29.1714 87.8765 28.9175 87.9644 28.6196C88.0571 28.3218 88.1035 27.9873 88.1035 27.6162C88.1035 27.2793 88.0571 26.9668 87.9644 26.6787C87.8716 26.3906 87.7324 26.1392 87.5469 25.9243C87.3662 25.7095 87.144 25.5435 86.8804 25.4263C86.6167 25.3042 86.314 25.2432 85.9722 25.2432C85.5181 25.2432 85.1738 25.3042 84.9395 25.4263C84.71 25.5483 84.4731 25.7144 84.229 25.9243ZM96.1528 20.3213H96.27V21.4712H96.1528C95.4351 21.4712 94.8345 21.5884 94.3511 21.8228C93.8677 22.0522 93.4844 22.3623 93.2012 22.7529C92.918 23.1387 92.7129 23.5732 92.5859 24.0566C92.4639 24.54 92.4028 25.0308 92.4028 25.5288V27.0962C92.4028 27.5698 92.459 27.9897 92.5713 28.356C92.6836 28.7173 92.8374 29.0225 93.0327 29.2715C93.228 29.5205 93.4478 29.7085 93.6919 29.8354C93.9409 29.9624 94.1997 30.0259 94.4683 30.0259C94.7808 30.0259 95.0591 29.9673 95.3032 29.8501C95.5474 29.728 95.7524 29.5596 95.9185 29.3447C96.0894 29.125 96.2188 28.8662 96.3066 28.5684C96.3945 28.2705 96.4385 27.9434 96.4385 27.5869C96.4385 27.2695 96.3994 26.9644 96.3213 26.6714C96.2432 26.3735 96.1235 26.1099 95.9624 25.8804C95.8013 25.646 95.5986 25.4629 95.3545 25.3311C95.1152 25.1943 94.8296 25.126 94.4976 25.126C94.1216 25.126 93.77 25.2188 93.4429 25.4043C93.1206 25.585 92.8545 25.8242 92.6445 26.1221C92.4395 26.415 92.3223 26.7349 92.293 27.0815L91.5752 27.0742C91.6436 26.5273 91.7705 26.061 91.9561 25.6753C92.1465 25.2847 92.3809 24.9673 92.6592 24.7231C92.9424 24.4741 93.2573 24.2935 93.604 24.1812C93.9556 24.064 94.3267 24.0054 94.7173 24.0054C95.2495 24.0054 95.7085 24.1055 96.0942 24.3057C96.48 24.5059 96.7974 24.7744 97.0464 25.1113C97.2954 25.4434 97.4785 25.8193 97.5957 26.2393C97.7178 26.6543 97.7788 27.0815 97.7788 27.521C97.7788 28.0239 97.708 28.4951 97.5664 28.9346C97.4248 29.374 97.2124 29.7598 96.9292 30.0918C96.6509 30.4238 96.3066 30.6826 95.8965 30.8682C95.4863 31.0537 95.0103 31.1465 94.4683 31.1465C93.8921 31.1465 93.3892 31.0293 92.9595 30.7949C92.5298 30.5557 92.1733 30.2383 91.8901 29.8428C91.6069 29.4473 91.3945 29.0078 91.2529 28.5244C91.1113 28.041 91.0405 27.5503 91.0405 27.0522V26.415C91.0405 25.6631 91.1162 24.9258 91.2676 24.2031C91.4189 23.4805 91.6802 22.8262 92.0513 22.2402C92.4272 21.6543 92.9473 21.188 93.6113 20.8413C94.2754 20.4946 95.1226 20.3213 96.1528 20.3213ZM106.282 20.3359V21.0977L101.866 31H100.438L104.847 21.4492H99.0752V20.3359H106.282ZM114.551 28.1143C114.551 28.7637 114.4 29.3154 114.097 29.7695C113.799 30.2188 113.394 30.5605 112.881 30.7949C112.374 31.0293 111.8 31.1465 111.16 31.1465C110.521 31.1465 109.944 31.0293 109.432 30.7949C108.919 30.5605 108.514 30.2188 108.216 29.7695C107.918 29.3154 107.769 28.7637 107.769 28.1143C107.769 27.6895 107.85 27.3013 108.011 26.9497C108.177 26.5933 108.409 26.2832 108.707 26.0195C109.009 25.7559 109.366 25.5532 109.776 25.4116C110.191 25.2651 110.647 25.1919 111.146 25.1919C111.8 25.1919 112.383 25.3188 112.896 25.5728C113.409 25.8218 113.812 26.166 114.104 26.6055C114.402 27.0449 114.551 27.5479 114.551 28.1143ZM113.189 28.085C113.189 27.6895 113.104 27.3403 112.933 27.0376C112.762 26.73 112.522 26.4907 112.215 26.3198C111.907 26.1489 111.551 26.0635 111.146 26.0635C110.73 26.0635 110.372 26.1489 110.069 26.3198C109.771 26.4907 109.539 26.73 109.373 27.0376C109.207 27.3403 109.124 27.6895 109.124 28.085C109.124 28.4951 109.205 28.8467 109.366 29.1396C109.532 29.4277 109.766 29.6499 110.069 29.8062C110.376 29.9575 110.74 30.0332 111.16 30.0332C111.58 30.0332 111.941 29.9575 112.244 29.8062C112.547 29.6499 112.779 29.4277 112.94 29.1396C113.106 28.8467 113.189 28.4951 113.189 28.085ZM114.302 23.1118C114.302 23.6294 114.166 24.0957 113.892 24.5107C113.619 24.9258 113.245 25.2529 112.771 25.4922C112.298 25.7314 111.761 25.8511 111.16 25.8511C110.55 25.8511 110.005 25.7314 109.527 25.4922C109.053 25.2529 108.682 24.9258 108.414 24.5107C108.145 24.0957 108.011 23.6294 108.011 23.1118C108.011 22.4917 108.145 21.9644 108.414 21.5298C108.687 21.0952 109.061 20.7632 109.534 20.5337C110.008 20.3042 110.547 20.1895 111.153 20.1895C111.763 20.1895 112.305 20.3042 112.779 20.5337C113.252 20.7632 113.624 21.0952 113.892 21.5298C114.166 21.9644 114.302 22.4917 114.302 23.1118ZM112.947 23.1338C112.947 22.7773 112.872 22.4624 112.72 22.189C112.569 21.9155 112.359 21.7007 112.09 21.5444C111.822 21.3833 111.509 21.3027 111.153 21.3027C110.796 21.3027 110.484 21.3784 110.215 21.5298C109.952 21.6763 109.744 21.8862 109.593 22.1597C109.446 22.4331 109.373 22.7578 109.373 23.1338C109.373 23.5 109.446 23.8198 109.593 24.0933C109.744 24.3667 109.954 24.5791 110.223 24.7305C110.491 24.8818 110.804 24.9575 111.16 24.9575C111.517 24.9575 111.827 24.8818 112.09 24.7305C112.359 24.5791 112.569 24.3667 112.72 24.0933C112.872 23.8198 112.947 23.5 112.947 23.1338ZM117.613 29.8647H117.752C118.533 29.8647 119.168 29.7549 119.656 29.5352C120.145 29.3154 120.521 29.02 120.784 28.6489C121.048 28.2778 121.229 27.8604 121.326 27.3965C121.424 26.9277 121.473 26.4468 121.473 25.9536V24.3203C121.473 23.8369 121.417 23.4072 121.304 23.0312C121.197 22.6553 121.045 22.3403 120.85 22.0864C120.66 21.8325 120.442 21.6396 120.198 21.5078C119.954 21.376 119.695 21.3101 119.422 21.3101C119.109 21.3101 118.829 21.3735 118.58 21.5005C118.335 21.6226 118.128 21.7959 117.957 22.0205C117.791 22.2451 117.664 22.5088 117.576 22.8115C117.488 23.1143 117.444 23.4438 117.444 23.8003C117.444 24.1177 117.483 24.4253 117.562 24.7231C117.64 25.021 117.759 25.2896 117.92 25.5288C118.082 25.7681 118.282 25.9585 118.521 26.1001C118.765 26.2368 119.051 26.3052 119.378 26.3052C119.681 26.3052 119.964 26.2466 120.228 26.1294C120.496 26.0073 120.733 25.8438 120.938 25.6387C121.148 25.4287 121.314 25.1919 121.436 24.9282C121.563 24.6646 121.636 24.3887 121.656 24.1006H122.3C122.3 24.5059 122.22 24.9062 122.059 25.3018C121.902 25.6924 121.683 26.0488 121.399 26.3711C121.116 26.6934 120.784 26.9521 120.403 27.1475C120.022 27.3379 119.607 27.4331 119.158 27.4331C118.631 27.4331 118.174 27.3306 117.789 27.1255C117.403 26.9204 117.085 26.647 116.836 26.3052C116.592 25.9634 116.409 25.5825 116.287 25.1626C116.17 24.7378 116.111 24.3081 116.111 23.8735C116.111 23.3657 116.182 22.8896 116.324 22.4453C116.465 22.001 116.675 21.6104 116.954 21.2734C117.232 20.9316 117.576 20.6655 117.986 20.4751C118.401 20.2847 118.88 20.1895 119.422 20.1895C120.032 20.1895 120.552 20.3115 120.982 20.5557C121.412 20.7998 121.761 21.127 122.029 21.5371C122.303 21.9473 122.503 22.4087 122.63 22.9214C122.757 23.4341 122.82 23.9614 122.82 24.5034V24.9941C122.82 25.5459 122.784 26.1074 122.71 26.6787C122.642 27.2451 122.508 27.7871 122.308 28.3047C122.112 28.8223 121.827 29.2861 121.451 29.6963C121.075 30.1016 120.584 30.4238 119.979 30.6631C119.378 30.8975 118.636 31.0146 117.752 31.0146H117.613V29.8647ZM131.397 24.8184V26.4443C131.397 27.3184 131.319 28.0557 131.163 28.6562C131.006 29.2568 130.782 29.7402 130.489 30.1064C130.196 30.4727 129.842 30.7388 129.427 30.9048C129.017 31.0659 128.553 31.1465 128.035 31.1465C127.625 31.1465 127.247 31.0952 126.9 30.9927C126.553 30.8901 126.241 30.7266 125.962 30.502C125.689 30.2725 125.455 29.9746 125.259 29.6084C125.064 29.2422 124.915 28.7979 124.812 28.2754C124.71 27.7529 124.659 27.1426 124.659 26.4443V24.8184C124.659 23.9443 124.737 23.2119 124.893 22.6211C125.054 22.0303 125.281 21.5566 125.574 21.2002C125.867 20.8389 126.219 20.5801 126.629 20.4238C127.044 20.2676 127.508 20.1895 128.021 20.1895C128.436 20.1895 128.816 20.2407 129.163 20.3433C129.515 20.4409 129.827 20.5996 130.101 20.8193C130.374 21.0342 130.606 21.3223 130.796 21.6836C130.992 22.04 131.141 22.4771 131.243 22.9946C131.346 23.5122 131.397 24.1201 131.397 24.8184ZM130.035 26.6641V24.5913C130.035 24.1128 130.005 23.6929 129.947 23.3315C129.893 22.9653 129.812 22.6528 129.705 22.394C129.598 22.1353 129.461 21.9253 129.295 21.7642C129.134 21.603 128.946 21.4858 128.731 21.4126C128.521 21.3345 128.284 21.2954 128.021 21.2954C127.698 21.2954 127.413 21.3564 127.164 21.4785C126.915 21.5957 126.705 21.7837 126.534 22.0425C126.368 22.3013 126.241 22.6406 126.153 23.0605C126.065 23.4805 126.021 23.9907 126.021 24.5913V26.6641C126.021 27.1426 126.048 27.5649 126.102 27.9312C126.16 28.2974 126.246 28.6147 126.358 28.8833C126.47 29.147 126.607 29.3643 126.768 29.5352C126.929 29.7061 127.115 29.833 127.325 29.916C127.54 29.9941 127.776 30.0332 128.035 30.0332C128.367 30.0332 128.658 29.9697 128.907 29.8428C129.156 29.7158 129.363 29.5181 129.529 29.2495C129.7 28.9761 129.827 28.627 129.91 28.2021C129.993 27.7725 130.035 27.2598 130.035 26.6641Z" fill="black"/>
      </svg>
  )
}
export default Component