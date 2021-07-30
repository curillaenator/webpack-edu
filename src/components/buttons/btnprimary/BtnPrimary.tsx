import React, { FC } from "react";
import styled from "styled-components";

import type { IBtnPrimary } from "../../../types/types";

import { colors } from "../../../colors/colors";

interface IParams {
  active?: boolean;
  disabled?: boolean;
}

const innerColor = (params: IParams): string => {
  switch (true) {
    case params.disabled:
      return colors.gray;
    default:
      return colors.white;
  }
};

const outerColor = (params: IParams): string => {
  switch (true) {
    case params.disabled:
      return colors.silver;
    default:
      return colors.navy;
  }
};

interface IButtonStyled {
  active: boolean;
  disabled: boolean;
}

const ButtonStyled = styled.button<IButtonStyled>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 56px;
  padding: 0 1rem;
  background-color: ${({ active, disabled }) =>
    outerColor({ active, disabled })};
  border-radius: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: 0.12s linear;

  .btntitle {
    font-weight: 600;
    color: ${({ active, disabled }) => innerColor({ active, disabled })};
  }

  & > svg {
    width: 18px;
    height: 18px;
    fill: ${({ active, disabled }) => innerColor({ active, disabled })};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.silver : colors.orangeLight};
  }

  &:active {
    background-color: ${({ disabled }) =>
      disabled ? colors.silver : colors.navy};
  }
`;

const BtnPrimary: FC<IBtnPrimary> = ({
  title,
  icon,
  active = false,
  disabled = false,
  handler = () => {},
}) => {
  return (
    <ButtonStyled active={active} disabled={disabled} onClick={() => handler()}>
      {icon && icon}
      <span className="btntitle">{title}</span>
    </ButtonStyled>
  );
};

export default BtnPrimary;
