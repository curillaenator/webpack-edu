import React, { FC, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import Loader from "../loader";
import Header from "../header";
import Search from "../search";
import RepoList from "../repoList";

import { initialize } from "../../redux/reducers/main";

import type { TState } from "../../redux/store";

const AppContainer = styled.div`
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 1.5rem;

  color: #131313;
`;

type IApp = ConnectedProps<typeof connector>;

const App: FC<IApp> = ({ isInitialized, initialize }) => {
  useEffect(() => initialize(), []);

  if (!isInitialized) return <Loader fullscreen title="Стартую" />;

  return (
    <AppContainer>
      <Header title="Поиск по репозиториям GitHub" />

      <Search />

      <RepoList />
    </AppContainer>
  );
};

const mstp = (state: TState) => ({
  isInitialized: state.main.isInitialized,
});

const mdtp = { initialize };

const connector = connect(mstp, mdtp);

export default connector(App);
