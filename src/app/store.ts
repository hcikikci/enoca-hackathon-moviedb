import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {itemReducer} from "../features/items/itemSlice";

export const store = configureStore({
  reducer: {
    itemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
