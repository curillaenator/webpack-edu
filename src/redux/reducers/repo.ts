import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { githubApi } from "../../api/api";

import { setRepoDetailedErr } from "./errors";

import type { IRepoDetailed, TThunk } from "../../types/types";

interface IRepoState {
  isRepoLoading: boolean;
  repo: IRepoDetailed | null;
}

const initialState: IRepoState = {
  isRepoLoading: false,
  repo: null,
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setIsRepoLoading: (state, action: PayloadAction<boolean>) => {
      state.isRepoLoading = action.payload;
    },

    setRepo: (state, action: PayloadAction<IRepoDetailed>) => {
      state.repo = action.payload;
    },
  },
});
export const repo = repoSlice.reducer;

const { setIsRepoLoading, setRepo } = repoSlice.actions;

// THUNKS

type TGetRepo = (username: string, reponame: string) => TThunk;

export const getRepo: TGetRepo = (username, reponame) => {
  return async (dispatch) => {
    dispatch(setIsRepoLoading(true));

    const repo = await githubApi.getRepoDetails(username, reponame);

    if (repo !== "error") {
      return batch(() => {
        dispatch(setRepo(repo));
        dispatch(setIsRepoLoading(false));
      });
    }

    if (repo === "error") {
      return batch(() => {
        dispatch(setRepoDetailedErr(true));
        dispatch(setIsRepoLoading(false));
      });
    }
  };
};
