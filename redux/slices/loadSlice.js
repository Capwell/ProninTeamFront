import { createSlice } from "@reduxjs/toolkit";

// There will be states here
const initialState = {
  load: false,
};

export const loadSlice = createSlice({
  name: "loadSlice",
  initialState: initialState,
  reducers: {
    setLoad(state, action) {
      state.load = action.payload;
    },
  },
});

// Селекторы в редаксе - обычные функции чтоб не дублировать код, а импортировать функцию
export const selectLoad = (state) => state.loadReducer;

export const { setLoad } = loadSlice.actions;

export default loadSlice.reducer;
