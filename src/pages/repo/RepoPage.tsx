import React, { FC, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import Loader from "../../components/loader";
import NavPannel from "../../components/navpannel";
import Repository from "../../components/repository";

import { getRepo } from "../../redux/reducers/repo";

import type { History } from "history";

const PageStyled = styled.div`
  margin-bottom: 2rem;
`;

interface IParams {
  username: string;
  reponame: string;
}

interface IMatch<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

interface IRepoPage {
  history: History;
  match: IMatch<IParams>;
}

const RepoPage: FC<IRepoPage> = ({ history, match }) => {
  const dispatch = useAppDispatch();

  const { username, reponame } = match.params;
  const { isRepoLoading, repo } = useAppSelector((state) => state.repo);

  const errors = useAppSelector((state) => state.errors);
  const errorsArr: boolean[] = Object.values(errors);

  useEffect(() => {
    dispatch(getRepo(username, reponame));
  }, [dispatch, username, reponame]);

  if (errorsArr.includes(true)) return <Redirect to="/" />;

  if (isRepoLoading || !repo) return <Loader title="GitHub старается..." />;

  return (
    <PageStyled>
      <NavPannel back={() => history.goBack()} />

      <Repository repository={repo} />
    </PageStyled>
  );
};

export default RepoPage;
