import React, { FC } from "react";
import styled from "styled-components";

import { icons } from "../../../assets/icons";
import { colors } from "../../../colors/colors";
import { date } from "../../../utils/functions";

const RepoStyled = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),
    0px 15px 12px rgba(33, 38, 44, 0.11);

  &:last-child {
    margin-bottom: 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    &-name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &-stars {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;

      &-title {
      }

      .svg_star {
        width: 18px;
        height: 18px;
        fill: ${colors.yellow};
      }
    }
  }

  .lastcommit {
    margin-bottom: 1rem;
  }

  .link {
  }
`;

interface IRepo {
  repo: any;
}

const Repo: FC<IRepo> = ({ repo }) => {
  return (
    <RepoStyled>
      <div className="header">
        <h3 className="header-name">{repo.name}</h3>

        <div className="header-stars">
          {icons.star}
          <span className="header-stars-title">{repo.stargazers_count}</span>
        </div>
      </div>

      <div className="lastcommit">{date(repo.updated_at)}</div>

      <a className="link" href={repo.html_url}>
        Перейти в репозиторий
      </a>
    </RepoStyled>
  );
};

export default Repo;
