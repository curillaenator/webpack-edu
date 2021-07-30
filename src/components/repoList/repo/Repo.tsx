import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Author from "../../author";
import BtnLink from "../../buttons/btnlink";

import { icons } from "../../../assets/icons";
import { colors } from "../../../colors/colors";
import { date, number } from "../../../utils/functions";

const RepoStyled = styled.div`
  width: calc(100% / 2 - 1rem / 2);
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0px 9px 13px ${colors.shadow};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;

    &-link {
      margin-right: 1rem;
      text-decoration: none;
      color: ${colors.navy};
      transition: 0.08s linear;
      font-size: 1.5rem;
      font-weight: 700;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:hover {
        color: ${colors.navyLight};
      }
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

  .author {
    margin-bottom: 1rem;
  }

  .lastcommit {
    margin-bottom: 1rem;
  }

  .gotorepo {
  }

  @media (min-width: 1024px) {
    width: calc(100% / 3 - 2rem / 3);
  }
`;

interface IRepo {
  repo: any;
}

const Repo: FC<IRepo> = ({ repo }) => {
  return (
    <RepoStyled>
      <div className="header">
        <Link
          to={`/repo/${repo.owner.login}/${repo.name}`}
          className="header-link"
        >
          {repo.name}
        </Link>

        <div className="header-stars">
          {icons.star}
          <span className="header-stars-title">
            {number(repo.stargazers_count)}
          </span>
        </div>
      </div>

      <div className="author">
        <Author avatarURL={repo.owner.avatar_url} name={repo.owner.login} />
      </div>

      <div className="lastcommit">Cоздан: {date(repo.updated_at)}</div>

      <div className="gotorepo">
        <BtnLink url={repo.html_url} title="Перейти в репозиторий" />
      </div>
    </RepoStyled>
  );
};

export default Repo;
