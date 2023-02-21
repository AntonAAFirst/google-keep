import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  firstItem: false,
  secondItem: false,
  thirdItem: false,
};

export const newFirstItemActive = createAction("NEWFIRSTITEMACTIVE");
export const newSecondItemActive = createAction("NEWSECONDITEMACTIVE");
export const newThirdItemActive = createAction("NEWITHIRDITEMACTIVE");

export default createReducer(initialState, {
  [newFirstItemActive]: function (state, action) {
    state.firstItem = action.payload;
  },
  [newSecondItemActive]: function (state, action) {
    state.secondItem = action.payload;
  },
  [newThirdItemActive]: function (state, action) {
    state.thirdItem = action.payload;
  },
});
