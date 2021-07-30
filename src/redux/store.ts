import { configureStore } from "@reduxjs/toolkit";

import { repoList } from "./reducers/repoList";
import { repo } from "./reducers/repo";
import { errors } from "./reducers/errors";

export const store = configureStore({ reducer: { repoList, repo, errors } });

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

(window as any).store = store;
