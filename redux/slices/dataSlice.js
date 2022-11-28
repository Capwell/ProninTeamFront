import { createSlice } from "@reduxjs/toolkit";

// There will be states here
const initialState = {
  items: [],
  item: {},
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setItem(state, action) {
      state.item = action.payload;
    },
  },
});

// Селекторы в редаксе - обычные функции чтоб не дублировать код, а импортировать функцию
export const selectData = (state) => state.dataReducer;

export const { setItems, setItem } = dataSlice.actions;

export default dataSlice.reducer;
