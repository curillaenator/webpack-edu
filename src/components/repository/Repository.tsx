import React, { FC } from "react";
import styled from "styled-components";

import Author from "../author";
import BtnLink from "../buttons/btnlink";

import { icons } from "../../assets/icons";
import { colors } from "../../colors/colors";
import { uppecase, number, date } from "../../utils/functions";

import { IRepoDetailed } from "../../types/types";

const ReposytoryStyled = styled.div`
  border-radius: 1.5rem;
  box-shadow: 0px 9px 13px ${colors.shadow};
  overflow: hidden;

  .repheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
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

      &-number {
        color: ${colors.white};
      }

      .svg_star {
        width: 18px;
        height: 18px;
        fill: ${colors.yellow};
      }
    }
  }

  .repbody {
    padding: 2rem;

    &-block {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      &-title {
        margin-bottom: 1rem;
        color: ${colors.gray};
      }
    }
  }
`;

interface IRepository {
  repository: IRepoDetailed;
}

const Repository: FC<IRepository> = ({ repository }) => {
  return (
    <ReposytoryStyled>
      <div className="repheader">
        <h2 className="repheader-title">{uppecase(repository.name)}</h2>

        <div className="repheader-stars">
          {icons.star}
          <span className="repheader-stars-number">
            {number(repository.stargazers_count)}
          </span>
        </div>
      </div>

      <div className="repbody">
        <div className="repbody-block">
          <h3 className="repbody-block-title">Автор репозитория:</h3>
          <Author
            avatarURL={repository.owner.avatar_url}
            avatarSize={3}
            name={repository.owner.login}
          />
        </div>

        <div className="repbody-block">
          <h3 className="repbody-block-title">Дата создания:</h3>
          <p>{date(repository.created_at)}</p>
        </div>

        <div className="repbody-block">
          <h3 className="repbody-block-title">Описание репозитория:</h3>
          <p>{repository.description}</p>
        </div>

        <div className="repbody-block">
          <h3 className="repbody-block-title">Ссылка на репозиторий:</h3>
          <BtnLink title="Перейти в репозиторий" url={repository.html_url} />
        </div>
      </div>
    </ReposytoryStyled>
  );
};

export default Repository;
