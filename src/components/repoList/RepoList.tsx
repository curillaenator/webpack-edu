import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import styled from "styled-components";

import Loader from "../loader";
import Repo from "./repo";
import Pagination from "./pagination";

import { getRepos } from "../../redux/reducers/main";

const RepoListStyled = styled.section`
  .list {
    margin-bottom: 2rem;
  }

  .paging {
    margin-bottom: 2rem;
  }
`;

const RepoList: FC = () => {
  const dispatch = useAppDispatch();
  const { repos, isFetching, page, totalRepos, perPage } = useAppSelector(
    (state) => state.main
  );

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  const calcPages = () => {
    return Math.floor(totalRepos / perPage);
  };

  const pagesss = [1, 2, 3, 4, 5];

  if (isFetching) return <Loader title="Стучус в GitHub" />;

  if (!repos.length)
    return (
      <RepoListStyled>
        <h2>Ничего не найдено</h2>
      </RepoListStyled>
    );

  return (
    <RepoListStyled>
      <div className="list">
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>

      <div className="paging">
        <Pagination pages={pagesss} selected={page} />
      </div>
    </RepoListStyled>
  );
};

export default RepoList;
