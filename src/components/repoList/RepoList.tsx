import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import styled from "styled-components";

import Loader from "../loader";
import Search from "../search";
import Repo from "./repo";
import Pagination from "./pagination";

import { getRepos } from "../../redux/reducers/main";

import { pageToShow } from "../../utils/functions";

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
  const { repos, isFetching, search, page, totalRepos, perPage } =
    useAppSelector((state) => state.main);

  useEffect(() => {
    dispatch(getRepos(search, page, perPage));
  }, [page]);

  if (isFetching) return <Loader title="Стучус в GitHub" />;

  if (!repos.length)
    return (
      <RepoListStyled>
        <h2>Ничего не найдено</h2>
      </RepoListStyled>
    );

  return (
    <RepoListStyled>
      <Search />

      <div className="list">
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>

      <div className="paging">
        <Pagination
          pages={pageToShow(page, Math.ceil(totalRepos / perPage), 11)}
          selected={page}
        />
      </div>
    </RepoListStyled>
  );
};

export default RepoList;
