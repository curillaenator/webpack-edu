import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { colors } from "../../colors/colors";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 6rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${colors.navy};
  box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),
    0px 15px 12px rgba(33, 38, 44, 0.11);

  .svg_icon {
    width: 64px;
    height: 64px;
    fill: ${colors.orangeLight};
  }

  .apptitile {
    color: ${colors.white};
    /* letter-spacing: 0.1rem; */
  }
`;

interface IHeader {
  title: string;
  icon?: ReactNode;
}

const Header: FC<IHeader> = ({ title, icon }) => {
  return (
    <HeaderStyled>
      {icon ?? icon}
      <h1 className="apptitile">{title}</h1>
    </HeaderStyled>
  );
};

export default Header;
