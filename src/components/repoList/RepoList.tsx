import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import styled from "styled-components";

import Loader from "../loader";
import Repo from "./repo";

import { getInitialRepos } from "../../redux/reducers/main";

const RepoListStyled = styled.section``;

const RepoList: FC = () => {
  const dispatch = useAppDispatch();
  const { repos, isFetching } = useAppSelector((state) => state.main);

  useEffect(() => {
    dispatch(getInitialRepos());
  }, []);

  if (isFetching) return <Loader title="Стучус в GitHub" />;

  return (
    <RepoListStyled>
      {repos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </RepoListStyled>
  );
};

export default RepoList;
