import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const reducers = {
  setLoading: (state, { payload: { isLoading } }) => ({ ...state, isLoading }),
};

export const { actions, reducer } = createSlice({
  name: "loading",
  initialState,
  reducers,
});

export const { setLoading } = actions;
