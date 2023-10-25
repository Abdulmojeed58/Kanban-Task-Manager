import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Modal } from "../boardModal/BoardModal";
import { taskAction } from "../../redux/taskSlice";
import "./taskItems.scss";
import ModalCard from "../Card/ModalCard";
import { boardActions } from "../../redux/boardSlice";


const TaskItems = () => {
  console.log("TaskItem");
  const { activeTask, currentTask, currentTaskColumnId } = useSelector(
    (state) => state.taksSlice
  );
  const { activeColumn, updatedActiveTask } = useSelector(
    (state) => state.task
  );
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(taskAction.handleViewTask(false));
  };

  const handleChangeStatus = (sId) => {
    const taskColumn = activeColumn.columns.find(
      (column) => column.id === currentTaskColumnId
    );

    dispatch(
      boardActions.changeSubtaskStatus({
        task: currentTask,
        sId,
        activeTask,
        activeColumn: taskColumn,
      })
    );

    // console.log(activeColumn)
    // console.log(activeTask);
  };

  return (
    <>
      <Modal handleCloseModal={handleCloseModal} />
      <ModalCard className="task">
        <div className="task_header">
          <h2>{activeTask?.title}</h2>
          <BsThreeDotsVertical />
        </div>
        <p>{activeTask?.desc}</p>
        <div>
          <p>Sub task</p>
          {activeTask?.subtask.map((task, i) => (
            <div className="task_subTask" key={i}>
              <input
                type="checkbox"
                // defaultChecked={task.isCompleted}
                checked={task.isCompleted}
                onChange={() => handleChangeStatus(task.id)}
              />
              <p className={`${task.isCompleted ? "completed" : ""}`}>
                {task.subTitle}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p>Current Status</p>
          <select name="status" id="status">
            {activeColumn.columns.map((column, i) => (
              <option key={i} value={column.name}>
                {column.name}
              </option>
            ))}
          </select>
        </div>
      </ModalCard>
    </>
  );
};

export default React.memo(TaskItems);
