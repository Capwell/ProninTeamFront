import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import dataReducer from "./slices/dataSlice";
import loadReducer from "./slices/loadSlice";

// Хранилище
export const store = configureStore({
  reducer: { dataReducer, loadReducer },
});

//ReturnType возвращает функцию, которая возвращает глобальный стейт всех слайсов / типизация всего редакса
// export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch();
