import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: { task: boardReducer, taksSlice: taskReducer },
});

export default store;
