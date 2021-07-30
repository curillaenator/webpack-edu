import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector } from "../../hooks/hooks";

import RepoList from "../../components/repoList";

const PageStyled = styled.div``;

const ReposPage: FC = () => {
  const errors = useAppSelector((state) => state.errors);
  const errorsArr: boolean[] = Object.values(errors);

  if (errorsArr.includes(true)) return <Redirect to="/" />;

  return (
    <PageStyled>
      <RepoList />
    </PageStyled>
  );
};

export default ReposPage;
