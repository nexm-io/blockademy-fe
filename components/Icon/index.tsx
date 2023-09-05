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
