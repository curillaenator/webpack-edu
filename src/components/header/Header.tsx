import React, { FC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  height: 5rem;
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
