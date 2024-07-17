import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DrawerMenu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.193 19H20.5m0-7h-18m18-7h-7.907"
      stroke="#2B2B2B"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default DrawerMenu;
