import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Author from "../../author";

import { icons } from "../../../assets/icons";
import { colors } from "../../../colors/colors";
import { date, number } from "../../../utils/functions";

import { IRepoInList } from "../../../types/types";

const RepoStyled = styled(Link)`
  overflow: hidden;
  width: calc(100% / 2 - 1rem / 2);
  border-radius: 1.5rem;
  box-shadow: 0px 4px 8px ${colors.shadow};
  color: ${colors.dark};
  text-decoration: none;
  transition: 0.1s ease-in-out;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background-color: ${colors.navy};

    &-title {
      margin-right: 1rem;
      text-decoration: none;
      color: ${colors.white};
      font-size: 1.5rem;
      font-weight: 700;
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
        color: ${colors.white};
      }

      .svg_star {
        width: 18px;
        height: 18px;
        fill: ${colors.yellow};
      }
    }
  }

  .content {
    padding: 1rem;

    &-block {
      margin-bottom: 1rem;

      &-title {
        color: ${colors.gray};
        margin-bottom: 0.5rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .description {
    height: 6rem;
    padding: 1rem;
    background-color: ${colors.orangeLight};

    &-text {
      color: ${colors.navy};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 12px 16px ${colors.shadow};
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 1024px) {
    width: calc(100% / 3 - 2rem / 3);
  }
`;

interface IRepo {
  repo: IRepoInList;
}

const Repo: FC<IRepo> = ({ repo }) => {
  return (
    <RepoStyled to={`/repo/${repo.owner.login}/${repo.name}`}>
      <div className="header">
        <h2 className="header-title">{repo.name}</h2>

        <div className="header-stars">
          {icons.star}
          <span className="header-stars-title">
            {number(repo.stargazers_count)}
          </span>
        </div>
      </div>

      <div className="content">
        <div className="content-block">
          <h4 className="content-block-title">Автор:</h4>
          <Author avatarURL={repo.owner.avatar_url} name={repo.owner.login} />
        </div>

        <div className="content-block">
          <h4 className="content-block-title">Дата создания:</h4>
          <p className="content-block-default">{date(repo.created_at)}</p>
        </div>
      </div>

      <div className="description">
        <p className="description-text">{repo.description}</p>
      </div>
    </RepoStyled>
  );
};

export default Repo;
