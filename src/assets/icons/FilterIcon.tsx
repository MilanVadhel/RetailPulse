import * as React from 'react';
import Svg, {Circle, Rect, SvgProps} from 'react-native-svg';

export const FilterIcon: React.FC<SvgProps> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    viewBox="0 0 19 19"
    fill="none"
    {...props}>
    <Circle
      cx={6.66174}
      cy={4.45795}
      r={3.3}
      stroke="#181725"
      strokeWidth={1.9}
    />
    <Rect
      x={0.892114}
      y={3.41641}
      width={3.30802}
      height={2.08304}
      rx={1.04152}
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
    />
    <Circle
      cx={12.3185}
      cy={13.8066}
      r={3.3}
      transform="rotate(-180 12.3185 13.8066)"
      stroke="#181725"
      strokeWidth={1.9}
    />
    <Rect
      x={9.83395}
      y={3.41641}
      width={7.83623}
      height={2.08304}
      rx={1.04152}
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
    />
    <Rect
      x={9.14622}
      y={14.8482}
      width={7.84}
      height={2.08304}
      rx={1.04152}
      transform="rotate(-180 9.14622 14.8482)"
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
    />
    <Rect
      x={17.9948}
      y={14.8482}
      width={2.84148}
      height={2.08304}
      rx={1.04152}
      transform="rotate(-180 17.9948 14.8482)"
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
    />
  </Svg>
);
