import React, { FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../hooks/hooks";

import BtnRound from "../../buttons/btnround";

import { setPage } from "../../../redux/reducers/repoList";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

interface IPagination {
  pages: number[];
  selected: number;
}

const Pagination: FC<IPagination> = ({ pages, selected }) => {
  const dispatch = useAppDispatch();

  const handleChangePage = (param?: number) => {
    param && dispatch(setPage(param));
  };

  return (
    <PaginationStyled>
      {pages.map((page) => (
        <BtnRound
          title={page}
          param={page}
          key={page}
          active={selected === page}
          handler={handleChangePage}
        />
      ))}
    </PaginationStyled>
  );
};

export default Pagination;
