import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../colors/colors";

const BtnLinkStyled = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.orange};
  transition: 0.08s linear;
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    background-color: ${colors.orangeLight};
  }

  &:active {
    background-color: ${colors.orange};
  }
`;

interface IBtnLink {
  url: string;
  title: string;
}

const BtnLink: FC<IBtnLink> = ({ url, title }) => {
  return <BtnLinkStyled href={url}>{title}</BtnLinkStyled>;
};

export default BtnLink;
