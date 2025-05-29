import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SVGComponent = (props: SvgProps) => (
  <Svg width={66} height={72} viewBox="0 0 66 72" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33 69C51.2254 69 66 54.2254 66 36C66 17.7746 51.2254 3 33 3C14.7746 3 0 17.7746 0 36C0 54.2254 14.7746 69 33 69ZM43.2949 18.3728C43.796 16.5928 42.0686 15.5402 40.491 16.6642L18.4686 32.3528C16.7578 33.5717 17.0269 36 18.8729 36H24.672V35.9551H35.9741L26.765 39.2044L22.7052 53.6273C22.2041 55.4073 23.9313 56.4598 25.509 55.3358L47.5314 39.6473C49.2423 38.4284 48.973 36 47.1271 36H38.333L43.2949 18.3728Z"
      fill="#475467"
    />
  </Svg>
);
export default SVGComponent;
