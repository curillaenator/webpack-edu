import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import BtnPrimary from "../../components/buttons/btnprimary";

import { resetAllErrors } from "../../redux/reducers/errors";

import { colors } from "../../colors/colors";

import type { History } from "history";

const PageStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 20rem;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    border-radius: 1.5rem;
    box-shadow: 0px 9px 13px ${colors.shadow};

    &-title {
      color: ${colors.red};
      margin-bottom: 1rem;
    }
  }
`;

interface IErrorPage {
  history: History;
}

const ErrorPage: FC<IErrorPage> = ({ history }) => {
  const dispatch = useAppDispatch();

  const errors = useAppSelector((state) => state.errors);
  const errorsArr: boolean[] = Object.values(errors);

  const handleTryAgain = () => {
    dispatch(resetAllErrors());
    history.push("/");
  };

  if (!errorsArr.includes(true)) return <Redirect to="/" />;

  return (
    <PageStyled>
      <div className="message">
        <h1 className="message-title">
          Упс... Видимо сервер GitHub сильно занят, через 10 секунд
        </h1>
        <BtnPrimary title="Нажмите сюда" handler={() => handleTryAgain()} />
      </div>
    </PageStyled>
  );
};

export default ErrorPage;
