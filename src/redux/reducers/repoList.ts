import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { githubApi } from "../../api/api";

import type { IRepoInList, TThunk } from "../../types/types";

interface IRepoListState {
  isFetching: boolean;
  search: string;
  repos: IRepoInList[];
  page: number;
  perPage: number;
  totalRepos: number;
}

const initialState: IRepoListState = {
  isFetching: false,
  search: "",
  repos: [],
  page: 1,
  perPage: 12,
  totalRepos: 0,
};

const repoListSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setRepos: (state, action: PayloadAction<IRepoInList[]>) => {
      state.repos = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setTotalRepos: (state, action: PayloadAction<number>) => {
      state.totalRepos = action.payload;
    },
  },
});
export const repoList = repoListSlice.reducer;

export const { setIsFetching, setSearch, setRepos, setPage, setTotalRepos } =
  repoListSlice.actions;

// THUNKS

type TGetRepos = (search: string | undefined, page: number) => TThunk;

export const getRepos: TGetRepos = (search, page) => {
  return async (dispatch, getState) => {
    const perPage = getState().repoList.perPage;
    const seacrhVal = search ? search : undefined;

    dispatch(setIsFetching(true));
    const repos = await githubApi.getRepos(seacrhVal, page, perPage);

    batch(() => {
      dispatch(setRepos(repos.items));
      dispatch(setTotalRepos(repos.total_count));
      dispatch(setIsFetching(false));
    });
  };
};
