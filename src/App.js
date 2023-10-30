import "./App.scss";
import { AnimatePresence } from "framer-motion";

import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import BoardModal from "./Components/boardModal/BoardModal";
import useGlobalContext from "./useGlobalContext";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItems from "./Components/TaskItems/TaskItems";
import TaskForm from "./Components/TaskForm/TaskForm";
import { taskAction } from "./redux/taskSlice";

let initial = true;

function App() {
  const { createNewBoard, toggleCreateNewBoard, boardLists, setBoardLists } =
    useGlobalContext();

  const { isViewTask, activeTask } = useSelector((state) => state.taksSlice);
  const { isNewTask, updatedActiveTask } = useSelector((state) => state.task);
  const dispatch = useDispatch()

  // console.log(isNewBoard)

  useEffect(() => {
    if (initial  || updatedActiveTask === null) {
      initial = false;
      return;
    }
    dispatch(
      taskAction.handleActiveTask({
        isViewTask: true,
        activeTask: updatedActiveTask,
      })
    );
    // console.log(updatedActiveTask)
  }, [updatedActiveTask]);
  // console.log(activeTask)
  
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === "light") {
        prev = "dark";
      } else {
        prev = "light";
      }
      return prev;
    });
  }, []);

  return (
    <div className={`theme-${theme} app`}>
      <div className="modal">
        <AnimatePresence>
          {createNewBoard && (
            <BoardModal handleCloseModal={toggleCreateNewBoard} />
          )}
        </AnimatePresence>
      </div>

      <div className="modal">
        <AnimatePresence>{isViewTask && <TaskItems />}</AnimatePresence>
      </div>

      <div className="modal">
        <AnimatePresence>{isNewTask && <TaskForm />}</AnimatePresence>
      </div>
      <SideBar toggleTheme={handleToggleTheme} theme={theme} />
      <Main />
    </div>
  );
}

export default App;
