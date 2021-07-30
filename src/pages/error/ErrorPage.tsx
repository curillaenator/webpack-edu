import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import styled from "styled-components";

import BtnPrimary from "../../components/buttons/btnprimary";

import { resetAllErrors } from "../../redux/reducers/errors";

import { colors } from "../../colors/colors";

import type { History } from "history";

const PageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1.5rem;
    box-shadow: 0px 9px 13px ${colors.shadow};

    &-title {
      color: ${colors.red};
    }
  }
`;

interface IErrorPage {
  history: History;
}

const ErrorPage: FC<IErrorPage> = ({ history }) => {
  const dispatch = useAppDispatch();

  const handleTryAgain = async () => {
    await dispatch(resetAllErrors());
    history.push("/");
  };

  return (
    <PageStyled>
      <div className="message">
        <h1 className="message-title">
          Упс... Видимо сервер GitHub сильно занят, попробуйте
        </h1>
        <BtnPrimary title="Вернуться на главную" handler={handleTryAgain} />
      </div>
    </PageStyled>
  );
};

export default ErrorPage;
