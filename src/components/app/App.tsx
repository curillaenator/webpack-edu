import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import Header from "../header";
import ReposPage from "../../pages/repos";
import RepoPage from "../../pages/repo";

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

      <Switch>
        <Route exact path="/" component={ReposPage} />
        <Route path="/repo/:repoid?" component={RepoPage} />
        <Redirect to="/" />
      </Switch>
    </AppContainer>
  );
};

const mstp = (state: TState) => ({});

const mdtp = {};

const connector = connect(mstp, mdtp);

export default connector(App);
