import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../colors/colors";

import type { IBtnPrimary } from "../../../types/types";

interface IButtonStyled {
  active: boolean;
}

const ButtonStyled = styled.button<IButtonStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ active }) => (active ? colors.navy : colors.gray)};
  transition: 0.08s linear;
  background-color: ${({ active }) => (active ? colors.navy : "transparent")};

  .btntitle {
    font-weight: 600;
    transition: 0.08s linear;
    color: ${({ active }) => (active ? colors.white : colors.dark)};
    user-select: none;
  }

  &:hover {
    border: 2px solid
      ${({ active }) => (active ? colors.navy : colors.navyLight)};
    background-color: ${({ active }) =>
      active ? colors.navy : colors.navyLight};

    .btntitle {
      color: ${colors.white};
    }
  }

  &:active {
    border: 2px solid ${colors.navy};
    background-color: ${colors.navy};

    .btntitle {
      color: ${colors.white};
    }
  }
`;

const BtnRound: FC<IBtnPrimary> = ({
  title,
  param,
  active = false,
  handler,
}) => {
  const handleClick = () => {
    if (!active) {
      param ? handler(param) : handler();
    }
  };

  return (
    <ButtonStyled active={active} onClick={() => handleClick()}>
      <span className="btntitle">{title}</span>
    </ButtonStyled>
  );
};

export default BtnRound;
