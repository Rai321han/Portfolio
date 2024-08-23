const locationIcon = (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-textColorDim"
  >
    <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" />
  </svg>
);

const cssIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 0L27.2669 26.997L14.9816 30L2.7302 27.0012L0 0H30Z"
      fill="#264DE4"
    />
    <path
      d="M24.9271 25.2779L27.2627 2.20776H15V27.7047L24.9271 25.2779Z"
      fill="#2965F1"
    />
    <path
      d="M6.25891 12.2221L6.5955 15.5337H15V12.2221H6.25891Z"
      fill="#EBEBEB"
    />
    <path
      d="M15 5.51935H14.987H5.58252L5.92391 8.83097H15V5.51935Z"
      fill="#EBEBEB"
    />
    <path
      d="M15 24.268V20.8226L14.9835 20.8265L10.8008 19.8306L10.5334 17.1894H8.50094H6.76331L7.28948 22.3891L14.9827 24.2723L15 24.268Z"
      fill="#EBEBEB"
    />
    <path
      d="M19.6117 15.5336L19.1758 19.8285L14.987 20.8254V24.2707L22.6864 22.3892L22.7428 21.8297L23.6254 13.1113L23.717 12.2221L24.3951 5.51935H14.987V8.83097H20.2792L19.9374 12.2221H14.987V15.5336H19.6117Z"
      fill="white"
    />
  </svg>
);

const downloadIcon = (
  <svg
    width="28"
    height="18"
    viewBox="0 0 28 18"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-iconColor"
  >
    <path d="M7 18C5.0697 18 3.42067 17.4066 2.05291 16.2198C0.684303 15.033 0 13.5824 0 11.8681C0 10.3987 0.498485 9.08948 1.49545 7.94035C2.49242 6.79121 3.79697 6.05651 5.40909 5.73626C5.89697 4.21036 6.804 2.92936 8.13018 1.89325C9.45551 0.857143 10.9879 0.22606 12.7273 0V9.12716L11.5818 8.13815C11.3485 7.93093 11.057 7.82731 10.7075 7.82731C10.357 7.82731 10.0545 7.94035 9.8 8.16641C9.56667 8.37363 9.45 8.63736 9.45 8.95761C9.45 9.27786 9.56667 9.5416 9.8 9.74882L13.1091 12.6876C13.3636 12.9137 13.6606 13.0267 14 13.0267C14.3394 13.0267 14.6364 12.9137 14.8909 12.6876L18.2 9.74882C18.4333 9.5416 18.5555 9.28239 18.5665 8.97118C18.5767 8.66072 18.4545 8.39246 18.2 8.16641C17.9667 7.95918 17.6752 7.85067 17.3256 7.84088C16.9752 7.83184 16.6727 7.93093 16.4182 8.13815L15.2727 9.12716V0C17.4576 0.263736 19.2767 1.13482 20.7302 2.61325C22.1828 4.09243 22.9091 5.83045 22.9091 7.82731C24.3727 7.97802 25.5873 8.53827 26.5529 9.50807C27.5176 10.4786 28 11.6138 28 12.9137C28 14.3265 27.4434 15.5277 26.3302 16.517C25.2161 17.5057 23.8636 18 22.2727 18H7Z" />
  </svg>
);

const externalLinkIcon = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 23 23"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-iconColor group-hover:fill-blue-500 "
  >
    <path d="M21.0611 9.91111C20.7325 9.91111 20.4174 10.0416 20.1851 10.274C19.9527 10.5063 19.8222 10.8214 19.8222 11.15V18.5833C19.8222 18.9119 19.6917 19.227 19.4594 19.4594C19.227 19.6917 18.9119 19.8222 18.5833 19.8222H3.71667C3.38809 19.8222 3.07298 19.6917 2.84064 19.4594C2.6083 19.227 2.47778 18.9119 2.47778 18.5833V3.71667C2.47778 3.38809 2.6083 3.07298 2.84064 2.84064C3.07298 2.6083 3.38809 2.47778 3.71667 2.47778H11.15C11.4786 2.47778 11.7937 2.34725 12.026 2.11492C12.2584 1.88258 12.3889 1.56746 12.3889 1.23889C12.3889 0.910315 12.2584 0.595199 12.026 0.362862C11.7937 0.130525 11.4786 0 11.15 0H3.71667C2.73095 0 1.7856 0.391576 1.08859 1.08859C0.391576 1.7856 0 2.73095 0 3.71667V18.5833C0 19.5691 0.391576 20.5144 1.08859 21.2114C1.7856 21.9084 2.73095 22.3 3.71667 22.3H18.5833C19.5691 22.3 20.5144 21.9084 21.2114 21.2114C21.9084 20.5144 22.3 19.5691 22.3 18.5833V11.15C22.3 10.8214 22.1695 10.5063 21.9371 10.274C21.7048 10.0416 21.3897 9.91111 21.0611 9.91111Z" />
    <path d="M16.1056 2.47778H18.063L10.2704 10.258C10.1543 10.3732 10.0621 10.5102 9.99921 10.6612C9.93631 10.8121 9.90393 10.9741 9.90393 11.1376C9.90393 11.3012 9.93631 11.4631 9.99921 11.6141C10.0621 11.765 10.1543 11.9021 10.2704 12.0172C10.3856 12.1333 10.5226 12.2255 10.6736 12.2884C10.8245 12.3513 10.9865 12.3837 11.15 12.3837C11.3136 12.3837 11.4755 12.3513 11.6265 12.2884C11.7774 12.2255 11.9144 12.1333 12.0296 12.0172L19.8222 4.237V6.19444C19.8222 6.52302 19.9527 6.83813 20.1851 7.07047C20.4174 7.30281 20.7325 7.43333 21.0611 7.43333C21.3897 7.43333 21.7048 7.30281 21.9371 7.07047C22.1695 6.83813 22.3 6.52302 22.3 6.19444V1.23889C22.3 0.910315 22.1695 0.595199 21.9371 0.362862C21.7048 0.130525 21.3897 0 21.0611 0H16.1056C15.777 0 15.4619 0.130525 15.2295 0.362862C14.9972 0.595199 14.8667 0.910315 14.8667 1.23889C14.8667 1.56746 14.9972 1.88258 15.2295 2.11492C15.4619 2.34725 15.777 2.47778 16.1056 2.47778Z" />
  </svg>
);

const githubIcon = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-iconColor group-hover:fill-blue-500"
  >
    <path d="M12.6576 1.05479C9.61288 1.02385 6.68045 2.20305 4.50477 4.33324C2.3291 6.46342 1.0882 9.37029 1.05481 12.415C1.06654 14.8211 1.84057 17.1617 3.26573 19.1004C4.69089 21.0392 6.69384 22.4764 8.9869 23.2056C9.56703 23.311 9.77799 22.963 9.77799 22.6571C9.77799 22.3512 9.77799 21.6761 9.77799 20.7268C6.55031 21.4124 5.86469 19.2079 5.86469 19.2079C5.64983 18.5158 5.19303 17.9242 4.57784 17.5413C3.52304 16.8451 4.66222 16.8557 4.66222 16.8557C5.02681 16.9044 5.37564 17.0351 5.68254 17.2378C5.98944 17.4406 6.24644 17.7102 6.43428 18.0265C6.76162 18.5941 7.29873 19.0105 7.93 19.1861C8.56127 19.3617 9.23624 19.2824 9.80964 18.9653C9.86861 18.3876 10.1302 17.8496 10.548 17.4464C7.97429 17.1616 5.274 16.1912 5.274 11.8348C5.25099 10.6985 5.67086 9.59772 6.44483 8.76537C6.09235 7.78975 6.13397 6.71517 6.56086 5.76974C6.56086 5.76974 7.54182 5.46385 9.72525 6.93002C11.6259 6.42355 13.626 6.42355 15.5266 6.93002C17.7417 5.46385 18.691 5.76974 18.691 5.76974C19.1179 6.71517 19.1596 7.78975 18.8071 8.76537C19.599 9.58247 20.0417 10.6758 20.0412 11.8137C20.0412 16.1806 17.3198 17.1405 14.7672 17.4253C15.0467 17.6966 15.2626 18.0266 15.3994 18.3913C15.5362 18.7561 15.5904 19.1466 15.5583 19.5349V22.6465C15.5583 22.6465 15.7693 23.311 16.3494 23.195C18.6359 22.4613 20.6321 21.0238 22.0529 19.0878C23.4736 17.1518 24.2463 14.8163 24.2604 12.415C24.227 9.37029 22.9861 6.46342 20.8104 4.33324C18.6347 2.20305 15.7023 1.02385 12.6576 1.05479Z" />
  </svg>
);

const htmlIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-textColorDim"
  >
    <path
      d="M2.72878 27.0103L0 0H30L27.2712 26.9958L14.9752 30"
      fill="#E44D26"
    />
    <path d="M14.9999 27.7033V2.21704H27.2629L24.9227 25.2604" fill="#F16529" />
    <path
      d="M5.5733 5.52029H15V8.83096H9.69127L10.0386 12.2218H15V15.5252H6.59866L5.5733 5.52029ZM6.76403 17.1878H10.5347L10.7993 19.8349L15 20.8266V24.2831L7.29326 22.3872"
      fill="#EBEBEB"
    />
    <path
      d="M24.3934 5.52029H14.9833V8.83096H24.0461L24.3934 5.52029ZM23.7071 12.2218H14.9833V15.5325H19.6139L19.1757 19.8349L14.9833 20.8266V24.2686L22.6735 22.3872"
      fill="white"
    />
  </svg>
);

const jsIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 0.000244141H0V32.0001H32V0.000244141Z" fill="#F7DF1E" />
    <path
      d="M21.4959 25.0003C22.1404 26.0527 22.979 26.8263 24.4622 26.8263C25.7082 26.8263 26.5041 26.2036 26.5041 25.3431C26.5041 24.312 25.6864 23.9469 24.3149 23.347L23.5632 23.0244C21.3933 22.1 19.9517 20.9419 19.9517 18.4936C19.9517 16.2384 21.6701 14.5216 24.3555 14.5216C26.2674 14.5216 27.6419 15.187 28.6324 16.9292L26.2908 18.4327C25.7752 17.5082 25.219 17.144 24.3555 17.144C23.4748 17.144 22.9166 17.7028 22.9166 18.4327C22.9166 19.3348 23.4753 19.7 24.7655 20.2587L25.5172 20.5807C28.0721 21.6764 29.5147 22.7933 29.5147 25.3046C29.5147 28.0118 27.3879 29.495 24.5318 29.495C21.7392 29.495 19.935 28.1642 19.0522 26.42L21.4959 25.0003ZM10.8734 25.2609C11.3458 26.099 11.7755 26.8075 12.8086 26.8075C13.7966 26.8075 14.4198 26.421 14.4198 24.918V14.6933H17.4268V24.9587C17.4268 28.0723 15.6013 29.4894 12.9366 29.4894C10.529 29.4894 9.13475 28.2435 8.42566 26.7428L10.8734 25.2609Z"
      fill="black"
    />
  </svg>
);

const leftSlideIcon = (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-textColorDim hover:fill-textColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34ZM21.23 27L23 25.23L14.77 17L23 8.77L21.23 7L11.23 17L21.23 27Z"
    />
  </svg>
);

const linkedinIcon = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-iconColor group-hover:fill-blue-500"
  >
    <path d="M23.4401 0H1.86875C0.837159 0 0 0.817469 0 1.8241V23.4886C0 24.4966 0.837159 25.3152 1.86875 25.3152H23.4401C24.4724 25.3152 25.3152 24.4966 25.3152 23.4886V1.8241C25.3152 0.817469 24.4724 0 23.4401 0ZM7.50806 21.572H3.75157V9.49143H7.50806V21.572ZM5.62981 7.83962C4.42629 7.83962 3.45341 6.86428 3.45341 5.66181C3.45341 4.4611 4.42629 3.48576 5.62981 3.48576C6.83052 3.48576 7.80586 4.4611 7.80586 5.66181C7.80586 6.86428 6.83052 7.83962 5.62981 7.83962ZM21.5706 21.572H17.8201V15.6975C17.8201 14.296 17.7927 12.4941 15.8684 12.4941C13.9142 12.4941 13.6164 14.0204 13.6164 15.5959V21.5724H9.86307V9.49143H13.4652V11.1411H13.5165C14.0179 10.1918 15.2429 9.19011 17.0698 9.19011C20.8692 9.19011 21.571 11.6914 21.571 14.9454L21.5706 21.572Z" />
  </svg>
);

const mailIcon = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-iconColor group-hover:fill-blue-500"
  >
    <path d="M24.8356 6.26946C25.0284 6.11618 25.3152 6.25957 25.3152 6.50185V16.6131C25.3152 17.9233 24.2521 18.9864 22.9419 18.9864H2.3733C1.06304 18.9864 0 17.9233 0 16.6131V6.50679C0 6.25957 0.281829 6.12113 0.479604 6.2744C1.58714 7.13472 3.05562 8.22743 8.09888 11.8912C9.14214 12.6526 10.9023 14.2546 12.6576 14.2447C14.4227 14.2596 16.2175 12.623 17.2212 11.8912C22.2645 8.22743 23.728 7.12978 24.8356 6.26946ZM12.6576 12.6576C13.8047 12.6774 15.4561 11.2138 16.2867 10.6106C22.8479 5.84919 23.3473 5.43386 24.8603 4.24721C25.1471 4.02472 25.3152 3.67861 25.3152 3.31273V2.3733C25.3152 1.06304 24.2521 0 22.9419 0H2.3733C1.06304 0 0 1.06304 0 2.3733V3.31273C0 3.67861 0.168109 4.01977 0.454882 4.24721C1.96786 5.42892 2.46724 5.84919 9.02842 10.6106C9.85907 11.2138 11.5105 12.6774 12.6576 12.6576Z" />
  </svg>
);

const reactIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 0.447765C21.6008 -0.133831 20.5417 -0.10223 19.4983 0.275899C18.4548 0.654067 17.3436 1.40454 16.2311 2.41749C15.8242 2.78795 15.4128 3.19744 15 3.64298C14.5872 3.19745 14.1758 2.78796 13.7689 2.4175C12.6564 1.40456 11.5452 0.654082 10.5017 0.275914C9.45834 -0.102215 8.39923 -0.133814 7.49999 0.447778C6.60076 1.02937 6.09563 2.07267 5.86625 3.27398C5.63685 4.47542 5.66146 5.92863 5.88826 7.51446C5.97121 8.09442 6.08209 8.69825 6.22012 9.3215C5.66929 9.49922 5.14705 9.69356 4.65722 9.90307C3.31786 10.476 2.18211 11.1787 1.36801 12.0019C0.553989 12.8251 0 13.8368 0 15C0 16.1632 0.553986 17.1749 1.36801 17.9981C2.18211 18.8213 3.31786 19.5241 4.65722 20.097C5.14706 20.3065 5.6693 20.5008 6.22014 20.6785C6.08211 21.3018 5.97123 21.9056 5.88829 22.4856C5.66148 24.0714 5.63687 25.5246 5.86627 26.726C6.09564 27.9273 6.60077 28.9706 7.5 29.5522C8.39924 30.1338 9.45835 30.1022 10.5017 29.7241C11.5452 29.3459 12.6564 28.5955 13.769 27.5825C14.1758 27.2121 14.5872 26.8026 15 26.3571C15.4128 26.8026 15.8242 27.2121 16.2311 27.5825C17.3436 28.5955 18.4548 29.346 19.4983 29.7241C20.5416 30.1022 21.6008 30.1338 22.5 29.5522C23.3992 28.9707 23.9044 27.9274 24.1337 26.726C24.3631 25.5246 24.3385 24.0714 24.1117 22.4856C24.0288 21.9056 23.9179 21.3018 23.7799 20.6785C24.3307 20.5008 24.8529 20.3065 25.3428 20.097C26.6821 19.5241 27.8179 18.8213 28.632 17.9981C29.446 17.1749 30 16.1632 30 15C30 13.8368 29.446 12.8251 28.632 12.0019C27.8179 11.1787 26.6821 10.476 25.3428 9.90307C24.8529 9.69356 24.3307 9.49922 23.7799 9.3215C23.9179 8.69824 24.0288 8.09441 24.1117 7.51443C24.3385 5.92861 24.3631 4.4754 24.1337 3.27397C23.9044 2.07265 23.3992 1.02936 22.5 0.447765ZM22.3203 8.90638C22.4475 8.33107 22.5492 7.77672 22.6249 7.24758C22.8347 5.78077 22.8381 4.55326 22.6612 3.6268C22.4843 2.70021 22.1488 2.16843 21.7471 1.90864C21.3454 1.64885 20.7665 1.58922 19.9618 1.88087C19.1571 2.17249 18.2099 2.78961 17.1808 3.72654C16.8096 4.06453 16.4318 4.44033 16.0507 4.85139C16.8737 5.85652 17.6924 6.99471 18.4828 8.24235C19.8425 8.38531 21.1318 8.61044 22.3203 8.90638ZM13.9493 4.85139C13.5682 4.44034 13.1904 4.06454 12.8192 3.72655C11.7901 2.78963 10.8429 2.17251 10.0382 1.88089C9.23346 1.58923 8.65458 1.64886 8.2529 1.90865L7.88836 1.20132L8.2529 1.90865C7.85123 2.16844 7.51569 2.70023 7.33877 3.62681C7.16187 4.55328 7.16535 5.78079 7.37513 7.2476C7.4508 7.77674 7.55246 8.33108 7.67965 8.90639C8.86824 8.61045 10.1575 8.38531 11.5172 8.24236C12.3076 6.99471 13.1262 5.85652 13.9493 4.85139ZM13.4852 8.09611C13.9866 7.3657 14.4939 6.68638 15 6.06397C15.5061 6.68638 16.0134 7.3657 16.5147 8.09611C16.0163 8.07403 15.511 8.06274 15 8.06274C14.489 8.06274 13.9837 8.07403 13.4852 8.09611ZM10.4201 10.0785C9.60476 10.1997 8.82597 10.3522 8.09173 10.532C8.31983 11.3342 8.59138 12.166 8.90536 13.0176C9.13751 12.523 9.38146 12.0271 9.63696 11.5314L10.289 11.9531L9.63696 11.5314C9.89245 11.0356 10.1538 10.551 10.4201 10.0785ZM9.69883 15C10.0726 14.134 10.487 13.2559 10.941 12.3748C11.3951 11.4938 11.8668 10.6526 12.3494 9.85709C13.2057 9.78668 14.0918 9.74961 15 9.74961C15.9081 9.74961 16.7942 9.78668 17.6506 9.85709C18.1332 10.6527 18.6049 11.4938 19.059 12.3748C19.513 13.2559 19.9274 14.1341 20.3012 15C19.9274 15.866 19.513 16.7442 19.059 17.6252C18.6049 18.5063 18.1332 19.3474 17.6506 20.1429C16.7943 20.2134 15.9082 20.2504 15 20.2504C14.0918 20.2504 13.2057 20.2134 12.3494 20.1429C11.8668 19.3474 11.3951 18.5063 10.941 17.6252C10.487 16.7442 10.0726 15.866 9.69883 15ZM8.0344 15C7.46506 13.6094 6.99448 12.2461 6.62897 10.945C6.12063 11.1093 5.64125 11.2878 5.19435 11.479C3.95551 12.0089 3.00481 12.6192 2.37703 13.2541C1.74917 13.889 1.50582 14.4804 1.50582 15C1.50582 15.5196 1.74917 16.111 2.37703 16.7459C3.00481 17.3808 3.95551 17.9912 5.19436 18.5211C5.64126 18.7122 6.12064 18.8908 6.62899 19.055C6.99449 17.754 7.46507 16.3906 8.0344 15ZM8.09175 19.468C8.31985 18.6658 8.5914 17.8341 8.90537 16.9824C9.13751 17.477 9.38146 17.9729 9.63695 18.4687C9.89244 18.9644 10.1538 19.449 10.4201 19.9215C9.60477 19.8003 8.82598 19.6479 8.09175 19.468ZM7.67967 21.0937C7.55248 21.669 7.45082 22.2233 7.37515 22.7524C7.16537 24.2192 7.16189 25.4467 7.33878 26.3732C7.5157 27.2998 7.85124 27.8316 8.25291 28.0914C8.65459 28.3511 9.23347 28.4108 10.0383 28.1191C10.8429 27.8275 11.7902 27.2104 12.8192 26.2735C13.1904 25.9355 13.5682 25.5597 13.9493 25.1487C13.1262 24.1435 12.3076 23.0053 11.5172 21.7577C10.1575 21.6147 8.86825 21.3896 7.67967 21.0937ZM16.0507 25.1487C16.4318 25.5597 16.8096 25.9355 17.1808 26.2735C18.2099 27.2104 19.1571 27.8275 19.9617 28.1191C20.7665 28.4108 21.3454 28.3512 21.7471 28.0914L22.1235 28.8218L21.7471 28.0914C22.1488 27.8316 22.4843 27.2998 22.6612 26.3732C22.8381 25.4468 22.8346 24.2192 22.6249 22.7524C22.5492 22.2233 22.4475 21.669 22.3203 21.0937C21.1318 21.3896 19.8425 21.6147 18.4828 21.7577C17.6924 23.0053 16.8738 24.1435 16.0507 25.1487ZM16.5148 21.9039C16.0134 22.6343 15.5061 23.3137 15 23.9361C14.4939 23.3137 13.9866 22.6343 13.4852 21.9039C13.9837 21.926 14.489 21.9373 15 21.9373C15.511 21.9373 16.0163 21.926 16.5148 21.9039ZM19.5799 19.9215C20.3952 19.8003 21.174 19.6479 21.9083 19.468C21.6802 18.6658 21.4086 17.8341 21.0946 16.9824C20.8625 17.477 20.6185 17.9729 20.363 18.4687C20.1076 18.9644 19.8462 19.449 19.5799 19.9215ZM21.9656 15C22.5349 16.3906 23.0055 17.754 23.371 19.055C23.8794 18.8908 24.3587 18.7122 24.8056 18.5211C26.0445 17.9912 26.9952 17.3808 27.623 16.7459C28.2508 16.111 28.4942 15.5196 28.4942 15C28.4942 14.4804 28.2508 13.889 27.623 13.2541C26.9952 12.6192 26.0445 12.0089 24.8056 11.479C24.3587 11.2878 23.8794 11.1093 23.371 10.945C23.0055 12.2461 22.5349 13.6094 21.9656 15ZM21.0946 13.0176C21.4086 12.166 21.6802 11.3342 21.9083 10.532C21.174 10.3522 20.3952 10.1997 19.5798 10.0785C19.8461 10.551 20.1075 11.0357 20.363 11.5314C20.6185 12.0271 20.8625 12.523 21.0946 13.0176ZM17.6551 15C17.6551 16.6427 16.4664 17.9744 15 17.9744C13.5336 17.9744 12.3448 16.6427 12.3448 15C12.3448 13.3573 13.5336 12.0257 15 12.0257C16.4664 12.0257 17.6551 13.3573 17.6551 15Z"
      fill="#61DAFB"
    />
  </svg>
);

const rightSlideIcon = (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-textColorDim hover:fill-textColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM12.77 27L11 25.23L19.23 17L11 8.77L12.77 7L22.77 17L12.77 27Z"
    />
  </svg>
);

const shareIcon = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-iconColor group-hover:fill-blue-500"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.34 20.68C16.0506 20.68 20.68 16.0506 20.68 10.34C20.68 4.62938 16.0506 0 10.34 0C4.62938 0 0 4.62938 0 10.34C0 16.0506 4.62938 20.68 10.34 20.68ZM12.9107 13.4261C13.2416 13.127 13.6743 12.9361 14.1579 12.9361C15.1823 12.9361 16.0159 13.7697 16.0159 14.7942C16.0159 15.8186 15.1823 16.6522 14.1579 16.6522C13.1334 16.6522 12.2998 15.8186 12.2998 14.7942C12.2998 14.6542 12.3189 14.5142 12.3507 14.3806L7.82023 11.7335C7.47663 12.0517 7.02485 12.2489 6.52217 12.2489C5.4659 12.2489 4.61324 11.3963 4.61324 10.34C4.61324 9.28374 5.4659 8.43108 6.52217 8.43108C7.02485 8.43108 7.47663 8.62834 7.82023 8.94649L12.3062 6.33127C12.2744 6.18492 12.2489 6.03857 12.2489 5.88585C12.2489 4.82958 13.1016 3.97693 14.1579 3.97693C15.2141 3.97693 16.0668 4.82958 16.0668 5.88585C16.0668 6.94212 15.2141 7.79478 14.1579 7.79478C13.6552 7.79478 13.2034 7.59752 12.8598 7.27937L8.37382 9.89459C8.40564 10.0409 8.43109 10.1873 8.43109 10.34C8.43109 10.4927 8.40564 10.6391 8.37382 10.7854L12.9107 13.4261Z"
    />
  </svg>
);

// const viewIcon = (
//   <svg
//     width="28"
//     height="18"
//     viewBox="0 0 28 18"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="fill-iconColor group-hover:fill-blue-500"
//   >
//     <path d="M14 0C7.63636 0 2.20182 3.732 0 9C2.20182 14.268 7.63636 18 14 18C20.3636 18 25.7982 14.268 28 9C25.7982 3.732 20.3636 0 14 0ZM14 15C10.4873 15 7.63636 12.312 7.63636 9C7.63636 5.688 10.4873 3 14 3C17.5127 3 20.3636 5.688 20.3636 9C20.3636 12.312 17.5127 15 14 15ZM14 5.4C11.8873 5.4 10.1818 7.008 10.1818 9C10.1818 10.992 11.8873 12.6 14 12.6C16.1127 12.6 17.8182 10.992 17.8182 9C17.8182 7.008 16.1127 5.4 14 5.4Z" />
//   </svg>
// );

// const whatsAppIcon = (
//   <svg
//     width="21"
//     height="21"
//     viewBox="0 0 21 21"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="fill-iconColor group-hover:fill-blue-500"
//   >
//     <path d="M20.6678 9.73136C20.3162 3.73358 14.8665 -0.888866 8.58946 0.14524C4.26688 0.858774 0.802624 4.36437 0.130455 8.68691C-0.262506 11.1894 0.254568 13.5576 1.38174 15.512L0.461379 18.9349C0.254558 19.7105 0.968071 20.4137 1.73331 20.1965L5.10451 19.2658C6.63499 20.1655 8.424 20.6825 10.3371 20.6825C16.1695 20.6825 21.0091 15.543 20.6678 9.73136ZM15.3939 14.1884C15.3008 14.3745 15.1871 14.5503 15.0423 14.7158C14.7838 14.995 14.5045 15.2018 14.1943 15.3259C13.8841 15.4603 13.5428 15.5224 13.1809 15.5224C12.6535 15.5224 12.0847 15.3984 11.4953 15.1398C10.8955 14.8813 10.3061 14.54 9.71663 14.116C9.11685 13.6816 8.55843 13.1956 8.0207 12.6682C7.48296 12.1305 7.00724 11.5617 6.57292 10.9723C6.14893 10.3828 5.8077 9.7934 5.55951 9.20396C5.31133 8.61452 5.18726 8.04582 5.18726 7.50808C5.18726 7.15647 5.24929 6.81522 5.37339 6.50499C5.49748 6.18441 5.69398 5.89487 5.97319 5.63635C6.3041 5.30543 6.66602 5.15032 7.04864 5.15032C7.1934 5.15032 7.33816 5.18133 7.47259 5.24338C7.60703 5.30542 7.73114 5.39849 7.82422 5.53293L9.02378 7.22885C9.11685 7.36328 9.18924 7.47704 9.2306 7.59079C9.28231 7.70454 9.30299 7.80795 9.30299 7.91136C9.30299 8.03545 9.26163 8.15957 9.18924 8.28361C9.11685 8.4077 9.02378 8.53179 8.89969 8.65589L8.50673 9.06953C8.44468 9.13158 8.424 9.19362 8.424 9.27635C8.424 9.31771 8.43434 9.35908 8.44468 9.40044C8.46536 9.44181 8.47571 9.47283 8.48605 9.50385C8.57912 9.67965 8.74457 9.89681 8.97208 10.1657C9.20992 10.4345 9.45811 10.7138 9.72697 10.9826C10.0062 11.2618 10.2751 11.51 10.5543 11.7479C10.8231 11.9754 11.0506 12.1305 11.2264 12.2236C11.2575 12.2339 11.2885 12.2546 11.3195 12.2649C11.3609 12.2856 11.4022 12.2856 11.4539 12.2856C11.547 12.2856 11.609 12.2546 11.6711 12.1925L12.0641 11.7996C12.1985 11.6651 12.3226 11.5721 12.4363 11.51C12.5604 11.4376 12.6742 11.3963 12.8086 11.3963C12.912 11.3963 13.0154 11.417 13.1292 11.4687C13.2429 11.5204 13.367 11.5824 13.4911 11.6755L15.2077 12.8957C15.3422 12.9888 15.4352 13.1025 15.4973 13.2266C15.549 13.3611 15.58 13.4852 15.58 13.6299C15.518 13.8057 15.4766 14.0022 15.3939 14.1884Z" />
//   </svg>
// );

const jestIcon = (
  <svg
    width="29"
    height="32"
    viewBox="0 0 29 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.161 15.7555C27.161 14.1106 25.8274 12.777 24.1824 12.777C24.0766 12.777 23.9722 12.7826 23.8693 12.7935L27.9603 0.727448H10.5748L14.6602 12.783C14.5999 12.7792 14.5395 12.7772 14.4791 12.7771C12.8342 12.7771 11.5006 14.1105 11.5006 15.7556C11.5006 17.0853 12.3721 18.211 13.5747 18.594C12.9395 19.6943 12.1402 20.6853 11.2327 21.5416C9.99863 22.7057 8.58634 23.5885 7.05887 24.1324C5.24024 23.1981 4.38148 21.1204 5.15633 19.2987C5.24386 19.0929 5.3332 18.8844 5.41858 18.6768C6.73605 18.3693 7.71795 17.1882 7.71795 15.7769C7.71795 14.1319 6.38437 12.7984 4.73931 12.7984C3.09424 12.7984 1.76077 14.1319 1.76077 15.7769C1.76077 16.7857 2.26259 17.6767 3.02986 18.2155C2.29264 19.894 1.20894 21.6508 0.871289 23.6868C0.466628 26.1267 0.869929 28.7168 2.98029 30.1796C7.89516 33.5859 13.2302 28.0678 18.8553 26.6806C20.8939 26.178 23.1317 26.259 24.9278 25.2188C26.2766 24.4376 27.1659 23.1429 27.4181 21.6894C27.6676 20.2536 27.3041 18.824 26.4682 17.6647C26.9166 17.1297 27.1619 16.4536 27.161 15.7555Z"
      fill="#99425B"
    />
    <path
      d="M26.7014 21.565C26.4824 22.8269 25.703 23.9291 24.5633 24.5893C23.5008 25.2046 22.2276 25.3883 20.8795 25.5827C20.1573 25.6867 19.4106 25.7946 18.6811 25.9744C16.7523 26.45 14.884 27.378 13.0773 28.2755C9.46161 30.0714 6.33907 31.6223 3.3948 29.5816C1.23804 28.0869 1.33759 25.3213 1.58885 23.8058C1.82174 22.4017 2.45134 21.1086 3.06008 19.8581C3.16379 19.6456 3.26667 19.4326 3.36872 19.2193C3.67557 19.342 3.99755 19.4228 4.326 19.4595C3.70626 21.5047 4.68089 23.7286 6.7264 24.7795L7.00643 24.9233L7.30282 24.8178C8.91998 24.2418 10.4102 23.3177 11.7319 22.0706C12.5862 21.2646 13.3208 20.3729 13.9245 19.42C14.1081 19.4477 14.2935 19.4616 14.4791 19.4616C16.3566 19.4616 17.9113 18.0581 18.1519 16.2453C18.9204 16.2172 19.7366 16.217 20.5095 16.2451C20.7499 18.0581 22.3048 19.4617 24.1823 19.4617C24.9674 19.4617 25.6955 19.2157 26.2954 18.7978C26.7118 19.6503 26.8673 20.6095 26.7014 21.565ZM4.73938 13.5259C5.98067 13.5259 6.99047 14.5358 6.99047 15.777C6.99047 16.2229 6.85962 16.6386 6.63501 16.9888C6.26086 17.5723 5.6248 17.9723 4.89404 18.0222C4.8429 18.0256 4.79132 18.0281 4.73938 18.0281C4.46274 18.0281 4.19775 17.9777 3.95276 17.8861C3.45928 17.7005 3.04606 17.3486 2.78433 16.8909C2.59 16.5519 2.48788 16.1678 2.4882 15.777C2.4882 14.5358 3.49806 13.5259 4.73938 13.5259ZM12.2281 15.7556C12.2281 14.6278 13.0618 13.6914 14.1451 13.5295C14.2541 13.5131 14.3657 13.5045 14.4792 13.5045C15.2009 13.5045 15.8434 13.8464 16.2554 14.3761C16.3586 14.5082 16.4468 14.6514 16.5183 14.803C16.6582 15.1011 16.7306 15.4264 16.7303 15.7556C16.7303 15.9356 16.7085 16.1105 16.6685 16.2783C16.4491 17.1967 15.666 17.8988 14.7063 17.9954C14.6317 18.0028 14.556 18.0067 14.4792 18.0067C14.0462 18.0071 13.6224 17.8818 13.2592 17.646C12.6395 17.2446 12.2281 16.5474 12.2281 15.7556ZM21.6235 13.0787C21.1336 13.5463 20.7811 14.139 20.6041 14.7927C19.7556 14.7614 18.9062 14.7614 18.0578 14.7927C17.8673 14.0861 17.4725 13.4627 16.9413 12.9892L19.2707 8.27912L21.6235 13.0787ZM11.5894 1.45514H26.9455L23.3185 12.1521C23.1625 12.1895 23.0091 12.237 22.8592 12.2944L19.2764 4.9855L15.6833 12.2508C15.5267 12.197 15.3666 12.1539 15.2042 12.1216L11.5894 1.45514ZM26.4334 15.7557C26.4334 15.9814 26.3997 16.1993 26.3377 16.4051C26.1905 16.8896 25.885 17.3106 25.47 17.6007C25.0928 17.8654 24.6431 18.0072 24.1823 18.0068C23.1429 18.0068 22.2662 17.2985 22.0083 16.3393C21.9571 16.149 21.9312 15.9528 21.9312 15.7557C21.9312 15.448 21.9934 15.1546 22.1056 14.8872C22.1635 14.7504 22.2348 14.6197 22.3185 14.497C22.7236 13.899 23.4072 13.5047 24.1823 13.5047C24.2534 13.5047 24.3234 13.5083 24.393 13.5149C25.5358 13.6213 26.4334 14.5854 26.4334 15.7557ZM27.8884 15.7557C27.8884 13.9464 26.5847 12.4367 24.8677 12.1143L28.9751 0H9.56014L13.6739 12.1388C12.0164 12.5076 10.7732 13.9887 10.7732 15.7556C10.7732 17.0824 11.4744 18.2477 12.5252 18.9027C12.0197 19.6557 11.4204 20.3644 10.7335 21.0125C9.64414 22.04 8.43063 22.8194 7.12234 23.3322C5.80448 22.5044 5.24745 20.9433 5.82592 19.5834L5.87126 19.4768L5.95632 19.2768C7.40375 18.7719 8.44539 17.3943 8.44539 15.777C8.44539 13.7335 6.78285 12.0709 4.73938 12.0709C2.69592 12.0709 1.03316 13.7335 1.03316 15.777C1.03316 16.8085 1.45721 17.7425 2.13953 18.4151C2.01227 18.6847 1.88311 18.9535 1.75201 19.2213C1.12806 20.5026 0.421016 21.9549 0.153549 23.5677C-0.377532 26.7708 0.479179 29.3313 2.56596 30.7775C3.83221 31.655 5.1182 32 6.41222 32C8.84878 32 11.3137 30.776 13.7245 29.5785C15.4607 28.7162 17.2561 27.8244 19.0296 27.387C19.6894 27.2243 20.3684 27.1263 21.0872 27.0227C22.5128 26.817 23.9867 26.6045 25.2924 25.8483C26.806 24.9716 27.8419 23.5011 28.1349 21.8139C28.3864 20.3655 28.0838 18.9148 27.3456 17.6844C27.7013 17.104 27.8892 16.4364 27.8884 15.7557Z"
      fill="white"
    />
  </svg>
);

const reduxIcon = (
  <svg
    width="32"
    height="31"
    viewBox="0 0 32 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.1726 21.2166C23.3535 21.0943 24.2494 20.0764 24.2086 18.8546C24.168 17.633 23.1499 16.6556 21.9282 16.6556H21.8469C20.5844 16.6964 19.6071 17.7551 19.6479 19.0175C19.6886 19.6284 19.9329 20.1577 20.2994 20.5242C18.9149 23.2527 16.7974 25.2481 13.6211 26.9177C11.4629 28.058 9.22325 28.4652 6.98361 28.1802C5.15113 27.9358 3.72588 27.1215 2.82987 25.7775C1.52687 23.7821 1.40475 21.6237 2.50425 19.4655C3.27801 17.918 4.49948 16.7777 5.27324 16.2076C5.11036 15.6782 4.86601 14.7824 4.74387 14.1309C-1.16075 18.4067 -0.549877 24.1894 1.24187 26.9177C2.58562 28.954 5.31401 30.2164 8.32738 30.2164C9.14175 30.2164 9.95612 30.1349 10.7706 29.9313C15.983 28.9132 19.933 25.8182 22.1726 21.2166ZM29.3396 16.167C26.2447 12.5426 21.684 10.5472 16.4716 10.5472H15.8201C15.4536 9.81423 14.6799 9.3255 13.8248 9.3255H13.7432C12.481 9.36623 11.5038 10.425 11.5444 11.6875C11.5851 12.9091 12.6031 13.8865 13.8248 13.8865H13.9061C14.802 13.8457 15.5758 13.2756 15.9015 12.5018H16.6345C19.7294 12.5018 22.6613 13.3977 25.3083 15.1488C27.3443 16.4927 28.8102 18.2439 29.6246 20.3614C30.3169 22.0717 30.2761 23.7414 29.5431 25.1667C28.403 27.325 26.4891 28.506 23.9644 28.506C22.3355 28.506 20.7881 28.0172 19.9736 27.6507C19.5257 28.058 18.7112 28.7095 18.1411 29.1168C19.8922 29.9312 21.684 30.3792 23.3942 30.3792C27.3035 30.3792 30.1948 28.2208 31.2942 26.0626C32.4752 23.7006 32.3936 19.6284 29.3396 16.167ZM8.65311 21.9087C8.69388 23.1305 9.71186 24.1077 10.9335 24.1077H11.015C12.2774 24.0671 13.2546 23.0082 13.2139 21.7458C13.1732 20.5241 12.1551 19.5469 10.9335 19.5469H10.8521C10.7706 19.5469 10.6484 19.5469 10.5671 19.5875C8.8975 16.8184 8.20524 13.805 8.44962 10.5471C8.61237 8.10374 9.42687 5.98611 10.8521 4.23501C12.033 2.72826 14.3134 1.99525 15.8609 1.95462C20.1773 1.87312 22.0096 7.24847 22.1319 9.40687C22.6613 9.52898 23.5571 9.8141 24.168 10.0178C23.6792 3.42074 19.6071 0 15.698 0C12.033 0 8.65311 2.64701 7.30924 6.55638C5.43612 11.7689 6.65775 16.7777 8.93813 20.7279C8.73461 21.0128 8.61237 21.4607 8.65311 21.9087Z"
      fill="#764ABC"
    />
  </svg>
);

const tailwindIcon = (
  <svg
    width="30"
    height="18"
    viewBox="0 0 30 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18C10.9999 18 8.49997 16 7.49982 12.0002C9.00001 14.0003 10.7501 14.75 12.7499 14.2502C13.8911 13.965 14.7067 13.1369 15.6097 12.2205C17.0802 10.7278 18.7822 9.00018 22.5003 9.00018C26.5 9.00018 29.0003 11.0002 30 15.0003C28.5003 13.0003 26.7502 12.2502 24.75 12.75C23.6092 13.0352 22.7936 13.8633 21.8907 14.7797C20.4201 16.2724 18.7177 18 15 18ZM7.49982 9.00018C3.50006 9.00018 0.999751 7.00013 0 3.00007C1.49982 5.00009 3.24986 5.7502 5.25012 5.25002C6.3909 4.96444 7.20648 4.13666 8.10943 3.22069C9.58 1.72799 11.2824 -5.14458e-07 15 -5.14458e-07C19.0002 -5.14458e-07 21.5001 2.00005 22.5003 6.00011C21 4.00006 19.25 3.24998 17.2501 3.75015C16.1089 4.03496 15.2934 4.86352 14.3904 5.77949C12.9199 7.27219 11.2179 9.00018 7.49982 9.00018Z"
      fill="#06B6D4"
    />
  </svg>
);

const tsIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H32V32H0V0Z" fill="#017ACB" />
    <path
      d="M15.365 11.85H16.9V14.5001H12.75V26.2901L12.64 26.3201C12.49 26.3601 10.515 26.3601 10.09 26.3151L9.74999 26.2851V14.5001H5.59998V11.85L6.91498 11.8351C7.63498 11.825 9.48497 11.825 11.025 11.8351C12.565 11.845 14.515 11.85 15.365 11.85ZM27.08 25.0401C26.47 25.6851 25.815 26.0451 24.725 26.3401C24.25 26.4701 24.17 26.4751 23.1 26.4701C22.03 26.4651 21.945 26.4651 21.425 26.3301C20.08 25.9851 18.995 25.3101 18.255 24.3551C18.045 24.0851 17.7 23.5251 17.7 23.4551C17.7 23.4351 17.75 23.3901 17.815 23.3601C17.88 23.3301 18.015 23.2451 18.125 23.1801C18.235 23.1151 18.435 22.9951 18.57 22.9251C18.705 22.8551 19.095 22.6251 19.435 22.4201C19.775 22.2151 20.085 22.0501 20.12 22.0501C20.155 22.0501 20.22 22.1201 20.27 22.2051C20.57 22.7101 21.27 23.3551 21.765 23.5751C22.07 23.7051 22.745 23.8501 23.07 23.8501C23.37 23.8501 23.92 23.7201 24.215 23.5851C24.53 23.4401 24.69 23.2951 24.88 23.0051C25.01 22.8001 25.025 22.7451 25.02 22.3551C25.02 21.9951 25 21.8951 24.9 21.7301C24.62 21.2701 24.24 21.0301 22.7 20.3501C21.11 19.6451 20.395 19.2251 19.815 18.6601C19.385 18.2401 19.3 18.1251 19.03 17.6001C18.68 16.9251 18.635 16.7051 18.63 15.7001C18.625 14.9951 18.64 14.7651 18.715 14.5251C18.82 14.1651 19.16 13.47 19.315 13.2951C19.635 12.9201 19.75 12.805 19.975 12.6201C20.655 12.0601 21.715 11.69 22.73 11.6551C22.845 11.6551 23.225 11.6751 23.58 11.7001C24.6 11.785 25.295 12.0351 25.965 12.57C26.47 12.97 27.235 13.91 27.16 14.0351C27.11 14.11 25.115 15.4401 24.985 15.4801C24.905 15.5051 24.85 15.4751 24.74 15.3451C24.06 14.5301 23.785 14.3551 23.125 14.3151C22.655 14.2851 22.405 14.3401 22.09 14.55C21.76 14.7701 21.6 15.1051 21.6 15.5701C21.605 16.2501 21.865 16.5701 22.825 17.0451C23.445 17.3501 23.975 17.6001 24.015 17.6001C24.075 17.6001 25.36 18.2401 25.695 18.4401C27.255 19.3551 27.89 20.2951 28.055 21.9151C28.175 23.1351 27.83 24.2501 27.08 25.0401Z"
      fill="white"
    />
  </svg>
);

const figmaIcon = (
  <svg
    width="22"
    height="32"
    viewBox="0 0 22 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33332 32C8.2773 32 10.6666 29.6105 10.6666 26.6665V21.3332H5.33332C2.38933 21.3332 0 23.7226 0 26.6665C0 29.6105 2.38933 32 5.33332 32Z"
      fill="#0ACF83"
    />
    <path
      d="M0 15.9999C0 13.0559 2.38933 10.6666 5.33332 10.6666H10.6666V21.3332H5.33332C2.38933 21.3332 0 18.9439 0 15.9999Z"
      fill="#A259FF"
    />
    <path
      d="M0 5.33329C0 2.38932 2.38933 0 5.33332 0H10.6666V10.6666H5.33332C2.38933 10.6666 0 8.27727 0 5.33329Z"
      fill="#F24E1E"
    />
    <path
      d="M10.6666 0H15.9999C18.9439 0 21.3333 2.38932 21.3333 5.33329C21.3333 8.27727 18.9439 10.6666 15.9999 10.6666H10.6666V0Z"
      fill="#FF7262"
    />
    <path
      d="M21.3333 15.9999C21.3333 18.9439 18.9439 21.3332 15.9999 21.3332C13.056 21.3332 10.6666 18.9439 10.6666 15.9999C10.6666 13.0559 13.056 10.6666 15.9999 10.6666C18.9439 10.6666 21.3333 13.0559 21.3333 15.9999Z"
      fill="#1ABCFE"
    />
  </svg>
);

export const JS_ICON = jsIcon;
export const REACT_ICON = reactIcon;
export const TS_ICON = tsIcon;
export const CSS_ICON = cssIcon;
export const HTML_ICON = htmlIcon;
export const TAILWIND_ICON = tailwindIcon;
export const JEST_ICON = jestIcon;
export const REDUX_ICON = reduxIcon;
export const FIGMA_ICON = figmaIcon;
export const GITHUB_ICON = githubIcon;
export const LINKEDIN_ICON = linkedinIcon;
export const MAIL_ICON = mailIcon;
export const EXTERNAL_ICON = externalLinkIcon;
export const DOWNLOAD_ICON = downloadIcon;
export const SHARE_ICON = shareIcon;
export const LSLIDE_ICON = leftSlideIcon;
export const RSLIDE_ICON = rightSlideIcon;
export const LOCATION_ICON = locationIcon;
