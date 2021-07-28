import React, { FC, useState } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../hooks/hooks";

import BtnPrimary from "../buttons/btnprimary";

import { getRepos } from "../../redux/reducers/main";

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
      min-height: 40px;
      padding: 0 1rem;
      border: 2px solid ${colors.gray};
      border-radius: 0.5rem;
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
  const [search, setSeacrh] = useState("");

  const handleSeacrh = () => {
    if (search.trim()) return dispatch(getRepos(search));
    return dispatch(getRepos());
  };

  return (
    <SearchStyled>
      <div className="textfield">
        <input
          className="textfield-input"
          type="text"
          placeholder="Название репозитория"
          value={search}
          onChange={(e) => setSeacrh(e.target.value)}
        />
      </div>

      <div className="buttons">
        <BtnPrimary title="Поиск" icon={icons.search} handler={handleSeacrh} />
      </div>
    </SearchStyled>
  );
};

export default Search;
