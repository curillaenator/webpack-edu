import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { githubApi } from "../../api/api";

import type { TThunk} from "../../types/types";

interface IMainState {
  isFetching: boolean;
  search: string;
  repos: any[];
  page: number;
  perPage: number;
  totalRepos: number;
}

const initialState: IMainState = {
  isFetching: false,
  search: "",
  repos: [],
  page: 1,
  perPage: 10,
  totalRepos: 0,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setRepos: (state, action: PayloadAction<any[]>) => {
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
export const main = mainSlice.reducer;

export const { setIsFetching, setSearch, setRepos, setPage, setTotalRepos } =
  mainSlice.actions;

// THUNKS

type TGetRepo = (search: string, page: number, perPage: number) => TThunk;

export const getRepos: TGetRepo = (search, page, perPage) => {
  return async (dispatch) => {
    const searchValue = search ? search : undefined;

    dispatch(setIsFetching(true));
    const repos = await githubApi.getRepos(searchValue, page, perPage);

    batch(() => {
      dispatch(setRepos(repos.items));
      dispatch(setTotalRepos(repos.total_count));
      dispatch(setIsFetching(false));
    });
  };
};
