import * as React from "react";

const dotsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="34"
    fill="none"
    viewBox="0 0 44 34"
  >
    <g filter="url(#filter0_b_3373_4947)">
      <path
        fill="#fff"
        d="M0 34v-8.553h4.44q2.854 0 4.228-1.478 1.48-1.584 1.48-4.224v-3.484H2.643V0h16.596v20.168q0 6.546-3.489 10.242Q12.263 34 5.391 34zm24.761 0v-8.553h4.44q2.854 0 4.228-1.478 1.48-1.584 1.48-4.224v-3.484h-7.505V0H44v20.168q0 6.546-3.488 10.242Q37.023 34 30.152 34z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_b_3373_4947"
        width="57.4"
        height="47.4"
        x="-6.7"
        y="-6.7"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feGaussianBlur
          in="BackgroundImageFix"
          stdDeviation="3.35"
        ></feGaussianBlur>
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3373_4947"
        ></feComposite>
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3373_4947"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default dotsIcon;
