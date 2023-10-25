import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "./dummyBoard";

const initialState = {
  activeId: 1,
  activeColumn: null,
  updatedActiveTask: null,
  isNewBoard: false,
  isNewTask: false,
  boards: DUMMY_DATA,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    handleOpenBoard(state) {
      state.isNewBoard = true;
    },
    createBoard(state, action) {
      state.isNewBoard = false;
      const id = Math.random();
      const newColumn = action.payload.columns.map((column) => ({
        id: Math.random(),
        name: column.name,
        tasks: [],
      }));

      const newTask = {
        id: id,
        name: action.payload.name,
        columns: newColumn,
      };
      state.boards.push(newTask);
      state.activeId = id;
      state.activeColumn = newTask;
    },
    handleActiveId(state, action) {
      state.activeId = action.payload;
    },
    handleActiveColumn(state, action) {
      state.activeColumn = action.payload;
    },
    addNewTask(state, action) {
      const currentTasksColumn = state.boards
        .find((board) => board.id === state.activeColumn.id)
        .columns.find((column) => column.id === action.payload.id);

      const activeTask = state.activeColumn.columns.find(
        (column) => column.id === action.payload.id
      );

      console.log(JSON.parse(JSON.stringify(state.activeColumn.columns)));

      const newTask = {
        id: Math.random(),
        title: action.payload.title,
        desc: action.payload.desc,
        subtask: action.payload.subtask.map((task) => ({
          id: Math.random(),
          subTitle: task,
          isCompleted: false,
        })),
      };

      currentTasksColumn.tasks.push(newTask);
      activeTask.tasks.push(newTask);
    },
    handleIsNewTask(state, action) {
      state.isNewTask = action.payload;
    },

    changeSubtaskStatus(state, action) {
      const currentTasksColumn = state.boards
        .find((board) => board.id === state.activeColumn.id)
        .columns.find((column) => column.id === action.payload.activeColumn.id);

      const currentTask = action.payload.task;

      let allCurrentSubtasks = currentTask.subtask.find(
        (subtask) => subtask.id === action.payload.sId
      );

      let currentSubtask = currentTasksColumn.tasks
        .find((column) => column.id === action.payload.activeTask.id)
        .subtask.find((task) => task.id === allCurrentSubtasks.id);

      currentSubtask.isCompleted = !currentSubtask.isCompleted;

      // console.log(JSON.parse(JSON.stringify(currentSubtask)));

      const newActiveTask = currentTasksColumn.tasks.find(
        (column) => column.id === action.payload.activeTask.id
      );

      state.updatedActiveTask = newActiveTask;

      const y = state.activeColumn.columns
        .find((column) => column.id === action.payload.activeColumn.id)
        .tasks.find((column) => column.id === action.payload.activeTask.id)
        .subtask.find((task) => task.id === allCurrentSubtasks.id)

        y.isCompleted = !y.isCompleted;


      // console.log(JSON.parse(JSON.stringify()));
      // console.log(JSON.parse(JSON.stringify(state.updatedActiveTask)));
      // console.log(allCurrentSubtasks);
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
