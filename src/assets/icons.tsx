import React from "react";

export const icons = {
  loader: (
    <svg
      className="svg_loader"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", display: "block", shapeRendering: "auto" }}
      width="256px"
      height="256px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(36 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(72 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.7s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(108 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(144 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(216 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(252 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.2s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(288 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.1s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(324 50 50)">
        <rect
          x="47"
          y="21.5"
          rx="3"
          ry="3"
          width="6"
          height="15"
          fill="#b5b1bf"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  ),
  star: (
    <svg
      className="svg_star"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  ),
  search: (
    <svg
      className="svg_search"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
    </svg>
  ),
  github: (
    <svg
      className="svg_github svg_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};
