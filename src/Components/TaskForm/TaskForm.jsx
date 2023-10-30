import React, { useRef, useState } from "react";
import ModalCard from "../Card/ModalCard";
import DynamicInputForm from "../boardModal/Inputs";
import { Modal } from "../boardModal/BoardModal";

import "./taskForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../redux/boardSlice";

const TaskForm = () => {
  const [inputValues, setInputValues] = useState([""]);
  const { activeColumn } = useSelector((state) => state.task);
  const [currentStatusId, setCurrentStatusId] = useState(null);
  const dispatch = useDispatch();
  const firestRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      boardActions.addNewTask({
        id: +currentStatusId,
        title: titleRef.current.value,
        desc: descRef.current.value,
        subtask: [firestRef.current.value, ...inputValues],
      })
    );

    dispatch(boardActions.handleIsNewTask(false));
    console.log(currentStatusId);
  };

  const handleCloseModal = () => {
    dispatch(boardActions.handleIsNewTask(false));
  };

  // Callback function to update the input values
  const handleInputChange = (newValues) => {
    setInputValues(newValues);
  };

  return (
    <>
      <Modal handleCloseModal={handleCloseModal} />
      <ModalCard className="task_form">
        <h3>Add new task</h3>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} />
          </div>
          <div className="desc">
            <label htmlFor="desc">Description</label>
            <textarea type="desc" id="desc" ref={descRef}></textarea>
          </div>
          <div className="subtask">
            <h3>Subtasks</h3>
            <div className="subtask_input">
              <input type="text" ref={firestRef} />
              <button>x</button>
            </div>
            <DynamicInputForm onInputChange={handleInputChange} />
          </div>
          <div className="status">
            <label>Status</label>
            <select
              name="status"
              id="status"
              onChange={(e) => setCurrentStatusId(e.target.value)}
            >
              <option value=""></option>
              {activeColumn.columns.map((column, i) => (
                <option key={i} value={column.id}>
                  {column.name}
                </option>
              ))}
            </select>
          </div>
          <button>Create Task</button>
        </form>
      </ModalCard>
    </>
  );
};

export default React.memo(TaskForm);
