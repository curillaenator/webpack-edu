import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { githubApi } from "../../api/api";

import type { TThunkC } from "../../types/types";

interface IMainState {
  isInitialized: boolean;
  isFetching: boolean;
  repos: any[];
  page: number;
  perPage: number;
  totalRepos: number;
}

const initialState: IMainState = {
  isInitialized: false,
  isFetching: false,
  repos: [],
  page: 1,
  perPage: 10,
  totalRepos: 0,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },

    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
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

export const {
  setInitialized,
  setIsFetching,
  setRepos,
  setPage,
  setTotalRepos,
} = mainSlice.actions;

// THUNKS

export const initialize: TThunkC<null> = () => async (dispatch) => {
  batch(() => {
    dispatch(setInitialized(true));
  });
};

export const getRepos: TThunkC<string> = (search) => {
  return async (dispatch, getState) => {
    const page = getState().main.page;
    const perPage = getState().main.perPage;

    dispatch(setIsFetching(true));
    const repos = await githubApi.getRepos(search, page, perPage);

    batch(() => {
      dispatch(setRepos(repos.items));
      dispatch(setTotalRepos(repos.total_count));
      dispatch(setIsFetching(false));
    });
  };
};
