import React, { FC } from "react";
import styled from "styled-components";

import { icons } from "../../assets/icons";

interface ILoaderStyled {
  fscreen: boolean;
}

const LoaderStyled = styled.div<ILoaderStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${({ fscreen }) => (fscreen ? "absolute" : "static")};
  top: 0;
  left: 0;
  width: ${({ fscreen }) => (fscreen ? "100vw" : "100%")};
  height: ${({ fscreen }) => (fscreen ? "100vh" : "100%")};

  .loading {
    display: flex;
    align-items: center;
    font-weight: 600;

    &-titie {
    }

    .svg_loader {
      width: 40px;
      height: 40px;
    }
  }
`;

interface ILoader {
  title: string;
  fullscreen?: boolean;
}

const Loader: FC<ILoader> = ({ title, fullscreen = false }) => {
  return (
    <LoaderStyled fscreen={fullscreen}>
      <div className="loading">
        {icons.loader}
        <span className="loading-title">{title}</span>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
