import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function HeartIcon(props) {
  return (
    <Svg
      width={65}
      height={62}
      viewBox="0 0 65 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        shadowColor: '#FF3797',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.51,
        shadowRadius: 9.11,

        elevation: 14,
      }}
      {...props}>
      <G filter="url(#filter0_d_15_4751)">
        <Path
          d="M32.947 36.924c-.382.135-1.012.135-1.395 0C28.29 35.81 21 31.164 21 23.289 21 19.812 23.801 17 27.255 17c2.047 0 3.859.99 4.995 2.52A6.222 6.222 0 0137.245 17c3.454 0 6.255 2.813 6.255 6.289 0 7.875-7.29 12.521-10.553 13.635z"
          stroke="#FF3797"
          strokeWidth={1.6875}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
