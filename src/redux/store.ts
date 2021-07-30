import { configureStore } from "@reduxjs/toolkit";

import { repoList } from "./reducers/repoList";
import { repo } from "./reducers/repo";

export const store = configureStore({ reducer: { repoList, repo } });

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

(window as any).store = store;
