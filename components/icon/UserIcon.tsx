import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UserIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 21" fill="none" {...props}>
    <Path
      d="M11.25 5A3.25 3.25 0 0 1 8 8.25v1.5A4.75 4.75 0 0 0 12.75 5h-1.5ZM8 8.25A3.25 3.25 0 0 1 4.75 5h-1.5A4.75 4.75 0 0 0 8 9.75v-1.5ZM4.75 5A3.25 3.25 0 0 1 8 1.75V.25A4.75 4.75 0 0 0 3.25 5h1.5ZM8 1.75A3.25 3.25 0 0 1 11.25 5h1.5A4.75 4.75 0 0 0 8 .25v1.5Zm-3 11h6v-1.5H5v1.5Zm6 6.5H5v1.5h6v-1.5Zm-6 0A3.25 3.25 0 0 1 1.75 16H.25A4.75 4.75 0 0 0 5 20.75v-1.5ZM14.25 16A3.25 3.25 0 0 1 11 19.25v1.5A4.75 4.75 0 0 0 15.75 16h-1.5ZM11 12.75A3.25 3.25 0 0 1 14.25 16h1.5A4.75 4.75 0 0 0 11 11.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 .25 16h1.5A3.25 3.25 0 0 1 5 12.75v-1.5Z"
      fill="#2B2B2B"
    />
  </Svg>
);

export default UserIcon;
