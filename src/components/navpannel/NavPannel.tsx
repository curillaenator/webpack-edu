import React, { FC } from "react";
import styled from "styled-components";

import BtnPrimary from "../buttons/btnprimary";

const PannelStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .navblock {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

interface INavPannel {
  back: () => void;
}

const NavPannel: FC<INavPannel> = ({ back }) => {
  return (
    <PannelStyled>
      <div className="navblock">
        <BtnPrimary title="Назад" handler={back} />
      </div>
    </PannelStyled>
  );
};

export default NavPannel;
