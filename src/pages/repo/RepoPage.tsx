import React, { FC } from "react";
import styled from "styled-components";

import BtnPrimary from "../../components/buttons/btnprimary";

import type { History } from "history";

const PageStyled = styled.div`
  .buttons {
    margin-bottom: 2rem;
  }
`;

interface IRepoPage {
  history: History;
}

const RepoPage: FC<IRepoPage> = ({ history }) => {
  return (
    <PageStyled>
      <div className="buttons">
        <BtnPrimary title="Назад" handler={() => history.goBack()} />
      </div>
    </PageStyled>
  );
};

export default RepoPage;
