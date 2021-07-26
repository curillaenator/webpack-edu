import React, { FC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header``;

const Header: FC = () => {
  return (
    <HeaderStyled>
      <h1 className="apptitile">WebPack + React</h1>
    </HeaderStyled>
  );
};

export default Header;
