import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NotificationIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M12.5 22c1.1 0 2-.9 2-2v-1h-4v1a2 2 0 0 0 2 2Zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S11 3.17 11 4v.68C8.13 5.36 6.5 7.92 6.5 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18.5 16Z"
      stroke="#1D1E25"
      strokeWidth={1.5}
    />
  </Svg>
);

export default NotificationIcon;
