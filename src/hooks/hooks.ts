import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { TState, TDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

type TUseToggle = (initial: boolean) => [boolean, () => void];
export const useToggle: TUseToggle = (initial) => {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};
