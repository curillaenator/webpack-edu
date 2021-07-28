import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import Header from "../header";
import RepoList from "../repoList";

import type { TState } from "../../redux/store";

const AppContainer = styled.div`
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 1.5rem;

  color: #131313;
`;

type IApp = ConnectedProps<typeof connector>;

const App: FC<IApp> = () => {
  return (
    <AppContainer>
      <Header title="Поиск по репозиториям GitHub" />

      <RepoList />
    </AppContainer>
  );
};

const mstp = (state: TState) => ({});

const mdtp = {};

const connector = connect(mstp, mdtp);

export default connector(App);
