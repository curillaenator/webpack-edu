import React, { FC } from "react";
import styled from "styled-components";

import RepoList from "../../components/repoList";

const PageStyled = styled.div``;

const ReposPage: FC = () => {
  return (
    <PageStyled>
      <RepoList />
    </PageStyled>
  );
};

export default ReposPage;
