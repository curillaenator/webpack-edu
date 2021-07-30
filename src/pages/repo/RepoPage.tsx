import React, { FC, useEffect } from "react";
import styled from "styled-components";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import Loader from "../../components/loader";
import BtnPrimary from "../../components/buttons/btnprimary";
import Author from "../../components/author";

import { getRepo } from "../../redux/reducers/repo";

import type { History } from "history";

const PageStyled = styled.div`
  .buttons {
    margin-bottom: 2rem;
  }
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

  useEffect(() => {
    dispatch(getRepo(username, reponame));
  }, [dispatch, username, reponame]);

  if (isRepoLoading) return <Loader title="GitHub старается..." />;

  return (
    <PageStyled>
      <div className="buttons">
        <BtnPrimary title="Назад" handler={() => history.goBack()} />
      </div>
    </PageStyled>
  );
};

export default RepoPage;
