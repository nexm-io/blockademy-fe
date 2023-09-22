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
