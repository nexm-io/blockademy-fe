interface IconProps {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const SortMenu: React.FC<IconProps> = ({ fill }) => (
  <svg
    stroke="currentColor"
    fill={fill}
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path>
  </svg>
);

export const SortList: React.FC<IconProps> = ({ fill }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.778 6.74448H6.68198V10.8405H10.778V6.74448ZM10.778 0.79248H6.68198V4.87748H10.778V0.79248ZM10.778 12.7075H6.68198V16.7925H10.778V12.7075ZM4.81498 6.74448H0.72998V10.8405H4.81498V6.74448ZM16.73 0.79248H12.645V4.87748H16.73V0.79248ZM16.73 12.7075H12.645V16.7925H16.73V12.7075ZM4.81498 12.7075H0.72998V16.7925H4.81498V12.7075ZM16.73 6.74448H12.645V10.8405H16.73V6.74448ZM4.81498 0.79248H0.72998V4.87748H4.81498V0.79248Z"
      fill={fill}
    />
  </svg>
);

export const Twitter: React.FC<IconProps> = ({ fill, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 512 512"
    fill={fill}
    className={className}
  >
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      fill={fill}
    />
  </svg>
);

export const Exclamation: React.FC<IconProps> = ({ fill, className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clip-path="url(#clip0_66_488)">
      <path
        d="M7.99999 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 7.99999 1.33325C4.3181 1.33325 1.33333 4.31802 1.33333 7.99992C1.33333 11.6818 4.3181 14.6666 7.99999 14.6666Z"
        stroke="#1F37B3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 5.33325V7.99992"
        stroke="#1F37B3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 10.6667H8.00667"
        stroke="#1F37B3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_66_488">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Star: React.FC<IconProps> = ({ fill, className }) => (
  <svg
    width={17}
    height={15}
    viewBox="0 0 17 15"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      id="Star 1"
      d="M8.5 0L10.9981 4.76393L16.584 5.52786L12.542 9.23607L13.4962 14.4721L8.5 12L3.50383 14.4721L4.45801 9.23607L0.416019 5.52786L6.00191 4.76393L8.5 0Z"
      fill="currentColor"
    />
  </svg>
);

export const Medal = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M13.0001 3.18726C11.687 3.18726 10.4034 3.57662 9.31156 4.30613C8.21976 5.03563 7.3688 6.0725 6.86627 7.28562C6.36375 8.49875 6.23224 9.83365 6.48837 11.1215C6.74451 12.4094 7.37677 13.5924 8.30523 14.5209C9.23369 15.4494 10.4166 16.0818 11.7045 16.338C12.9923 16.5943 14.3272 16.4629 15.5404 15.9604C16.7536 15.458 17.7905 14.6071 18.5201 13.5154C19.2497 12.4237 19.6392 11.1401 19.6393 9.82701C19.6374 8.0667 18.9373 6.37902 17.6927 5.13424C16.448 3.88947 14.7604 3.18926 13.0001 3.18726ZM17.4081 8.69276L14.754 10.614C14.7471 10.6188 14.742 10.6256 14.7393 10.6335C14.7367 10.6415 14.7367 10.65 14.7393 10.6579L15.7468 13.7693C15.7494 13.7772 15.7495 13.7857 15.7469 13.7937C15.7444 13.8016 15.7394 13.8086 15.7326 13.8135C15.7259 13.8184 15.7178 13.8211 15.7094 13.8211C15.7011 13.8212 15.6929 13.8185 15.6862 13.8137L13.032 11.8918C13.0253 11.8868 13.0171 11.8841 13.0087 11.8841C13.0003 11.8841 12.9922 11.8868 12.9854 11.8918L10.3313 13.8126C10.3245 13.8175 10.3163 13.8201 10.308 13.82C10.2997 13.82 10.2915 13.8173 10.2848 13.8124C10.2781 13.8075 10.2731 13.8005 10.2705 13.7926C10.268 13.7846 10.268 13.7761 10.2706 13.7682L11.3073 10.6579C11.3099 10.65 11.3099 10.6414 11.3074 10.6335C11.3049 10.6255 11.2999 10.6185 11.2933 10.6135L8.63909 8.69276C8.63192 8.68767 8.62665 8.68033 8.62412 8.67191C8.62158 8.66349 8.62193 8.65447 8.6251 8.64626C8.62827 8.63806 8.63408 8.63115 8.64162 8.62662C8.64916 8.62209 8.65799 8.6202 8.66672 8.62126H11.9129C11.9212 8.62131 11.9293 8.61871 11.9361 8.61384C11.9428 8.60897 11.9478 8.60208 11.9503 8.59417L12.973 5.47471C12.9754 5.46667 12.9803 5.45961 12.987 5.45459C12.9938 5.44957 13.0019 5.44685 13.0103 5.44685C13.0187 5.44685 13.0269 5.44957 13.0337 5.45459C13.0404 5.45961 13.0453 5.46667 13.0477 5.47471L14.0704 8.59417C14.0728 8.60212 14.0778 8.60906 14.0846 8.61395C14.0913 8.61883 14.0994 8.62139 14.1078 8.62126H17.3876C17.3957 8.62179 17.4034 8.62481 17.4098 8.62992C17.4161 8.63502 17.4207 8.64195 17.423 8.64977C17.4252 8.65759 17.425 8.66592 17.4223 8.67361C17.4197 8.6813 17.4147 8.68799 17.4081 8.69276Z"
      fill="currentColor"
    />
    <path
      d="M13.0002 0.541748C11.1637 0.541641 9.36837 1.08613 7.84134 2.10637C6.3143 3.1266 5.12411 4.57676 4.42126 6.27344C3.71842 7.97012 3.53449 9.83712 3.89275 11.6383C4.251 13.4395 5.13535 15.0941 6.43395 16.3927C7.73254 17.6913 9.38707 18.5756 11.1883 18.9339C12.9895 19.2921 14.8565 19.1082 16.5532 18.4053C18.2499 17.7025 19.7 16.5123 20.7202 14.9853C21.7405 13.4582 22.285 11.663 22.2849 9.82646C22.2849 7.364 21.3067 5.0024 19.5654 3.26118C17.8242 1.51996 15.4626 0.541748 13.0002 0.541748ZM13.0002 17.5501C11.4728 17.5501 9.97975 17.0972 8.70979 16.2486C7.43984 15.4001 6.45002 14.194 5.86551 12.783C5.28099 11.3719 5.12802 9.81916 5.42596 8.32115C5.72389 6.82313 6.45934 5.44711 7.5393 4.36707C8.61926 3.28703 9.99524 2.55149 11.4932 2.25345C12.9912 1.95541 14.5439 2.10827 15.9551 2.69269C17.3662 3.2771 18.5723 4.26684 19.4209 5.53673C20.2696 6.80663 20.7226 8.29965 20.7227 9.827C20.7205 11.8745 19.9062 13.8376 18.4585 15.2855C17.0107 16.7334 15.0477 17.5478 13.0002 17.5501Z"
      fill="currentColor"
    />
    <path
      d="M4.99414 23.0234L7.97872 22.7575L9.04581 24.9539L9.28847 25.4582L12.1219 20.1499C10.43 20.0084 8.79944 19.4501 7.37585 18.5249L4.99414 23.0234Z"
      fill="currentColor"
    />
    <path
      d="M13.9326 20.1501L16.7596 25.4584L17.0022 24.9541L18.071 22.7577L21.0555 23.0236L18.6662 18.4985C17.2485 19.4305 15.6224 19.9979 13.9326 20.1501Z"
      fill="currentColor"
    />
  </svg>
);

export const Share = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M5 17V25C5 25.5304 5.21071 26.0391 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25V17M16 20V3.5M22 9L16 3L10 9"
      stroke="#1F37B3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Close = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9986 12L3 4.00283L4.00283 3L12 10.9986L19.9972 3L21 4.00283L13.0014 12L21 19.9972L19.9986 20.9986L12 13.0014L4.00283 20.9986L3 19.9972L10.9986 12Z"
      fill="currentColor"
    />
  </svg>
);
