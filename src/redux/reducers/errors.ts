import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IErrorsState {
  getReposList: boolean;
  getRepoDetailed: boolean;
}

const initialState: IErrorsState = {
  getReposList: false,
  getRepoDetailed: false,
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setReposListErr: (state, action: PayloadAction<boolean>) => {
      state.getReposList = action.payload;
    },

    setRepoDetailedErr: (state, action: PayloadAction<boolean>) => {
      state.getRepoDetailed = action.payload;
    },

    resetAllErrors: (state) => {
      state = { ...initialState };
    },
  },
});
export const errors = errorsSlice.reducer;

export const { resetAllErrors, setReposListErr, setRepoDetailedErr } =
  errorsSlice.actions;
