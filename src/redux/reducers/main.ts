import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { githubApi } from "../../api/api";

import type {  TThunkC } from "../../types/types";

interface IMainState {
  isInitialized: boolean;
  repos: any[];
}

const initialState: IMainState = {
  isInitialized: false,
  repos: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    setRepos: (state, action: PayloadAction<any[]>) => {
      state.repos = action.payload;
    },
  },
});
export const main = mainSlice.reducer;

const { setInitialized, setRepos } = mainSlice.actions;

// THUNKS

export const initialize: TThunkC<null> = () => async (dispatch) => {
  const repos = await githubApi.getRepos();

  batch(() => {
    dispatch(setRepos(repos));
    dispatch(setInitialized(true));
  });
};
