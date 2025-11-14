import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./features/links/linksSlice";
const store = configureStore({
  reducer: {
    links: linksReducer,
  },
  devTools: true,
});

export default store;
