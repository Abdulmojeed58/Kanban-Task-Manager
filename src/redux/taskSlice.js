import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    activeTask: null,
    isViewTask: false,
    currentTask: null,
    currentTaskColumnId: null,
    tasks: [
      {
        id: 1,
        title: "Add account management endpoint",
        subtask: [
          {
            id: 1,
            subTitle: "Add account management endpoint",
          },
          {
            id: 1,
            subTitle: "Add account management endpoint",
          },
        ],
      },
    ],
  },

  reducers: {
    handleActiveTask(state, action) {
      state.activeTask = action.payload.activeTask;
      state.isViewTask = action.payload.isViewTask;
      state.currentTaskColumnId = action.payload.id  || state.currentTaskColumnId
    },
    handleViewTask(state, action) {
      state.isViewTask = action.payload;
    },
    handleCurrentTask(state, action) {
      state.currentTask = action.payload;
    },
  },
});

export const taskAction = taskSlice.actions;
export default taskSlice.reducer;
