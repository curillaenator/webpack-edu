import type { SyntheticEvent } from "react";
import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import type { TState } from "../redux/store";

// COMMON

// REDUX & STATE

export type TReducer<S, A = AnyAction> = (state: S, action: A) => S; // localc state reducer

export type TAction<P> = (payload: P) => { type: string; payload: P }; // action creator

// export type TThunk = ThunkAction<void, TState, unknown, AnyAction>; // thunk

export type TThunkC<P> = (
  payload?: P
) => ThunkAction<void, TState, unknown, AnyAction>;

// EVENTS

export type TEventHandler<E extends SyntheticEvent<any>> = (event: E) => void;