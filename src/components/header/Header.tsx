import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../colors/colors";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  height: 6rem;
  padding: 0 1rem;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${colors.navy};
  box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),
    0px 15px 12px rgba(33, 38, 44, 0.11);

  .apptitile {
    color: ${colors.white};
    letter-spacing: 0.1rem;
  }

  @media (max-height: 768px) {
    .apptitile {
      font-size: 10px;
    }
  }
`;

interface IHeader {
  title: string;
}

const Header: FC<IHeader> = ({ title }) => {
  return (
    <HeaderStyled>
      <h1 className="apptitile">{title}</h1>
    </HeaderStyled>
  );
};

export default Header;
