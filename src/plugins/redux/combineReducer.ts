// Redux toolkit
import { combineReducers } from "@reduxjs/toolkit";

// Slices
import { homeApi } from "@/features/home/redux/rtk";

const plainReducers = {
  [homeApi.reducerPath]: homeApi.reducer,
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
