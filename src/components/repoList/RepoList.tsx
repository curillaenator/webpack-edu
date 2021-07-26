import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import styled from "styled-components";

import Repo from "./repo";

const RepoListStyled = styled.section``;

const RepoList: FC = () => {
  const repos = useAppSelector((state) => state.main.repos);

  return (
    <RepoListStyled>
      {repos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </RepoListStyled>
  );
};

export default RepoList;
