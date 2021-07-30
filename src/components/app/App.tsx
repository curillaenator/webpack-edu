import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import Header from "../header";
import ReposPage from "../../pages/repos";
import RepoPage from "../../pages/repo";

import { icons } from "../../assets/icons";

import type { TState } from "../../redux/store";

const AppContainer = styled.div`
  max-width: 1440px;
  min-width: 768px;
  margin: 0 auto;
  padding: 0 1.5rem;

  color: #131313;
`;

type IApp = ConnectedProps<typeof connector>;

const App: FC<IApp> = () => {
  return (
    <AppContainer>
      <Header title="Поиск по репозиториям GitHub" icon={icons.github} />

      <Switch>
        <Route exact path="/" component={ReposPage} />
        <Route path="/repo/:username/:reponame" component={RepoPage} />
        <Redirect to="/" />
      </Switch>
    </AppContainer>
  );
};

const mstp = (state: TState) => ({});

const mdtp = {};

const connector = connect(mstp, mdtp);

export default connector(App);
