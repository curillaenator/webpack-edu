import React, { FC, useState } from "react";
import styled from "styled-components";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import BtnPrimary from "../buttons/btnprimary";

import { getRepos, setPage, setSearch } from "../../redux/reducers/repoList";

import { icons } from "../../assets/icons";
import { colors } from "../../colors/colors";

const SearchStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .textfield {
    width: 100%;

    &-input {
      width: 100%;
      min-height: 56px;
      padding: 0 1rem;
      border: 2px solid ${colors.gray};
      border-radius: 1.5rem;
      transition: 0.08s linear;

      &:focus {
        border: 2px solid ${colors.navy};
      }
    }
  }

  .buttons {
    flex-shrink: 0;
  }
`;

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.repoList);

  const handleSeacrh = () => {
    dispatch(setPage(1));
    dispatch(getRepos(search, 1));
  };

  return (
    <SearchStyled>
      <div className="textfield">
        <input
          className="textfield-input"
          type="text"
          placeholder="Название репозитория"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>

      <div className="buttons">
        <BtnPrimary title="Поиск" icon={icons.search} handler={handleSeacrh} />
      </div>
    </SearchStyled>
  );
};

export default Search;
