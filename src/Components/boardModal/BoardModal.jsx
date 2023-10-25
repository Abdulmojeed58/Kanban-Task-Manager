import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import "./boardModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../redux/boardSlice";
import DynamicInputForm from "./Inputs";
import ModalCard from "../Card/ModalCard";

const BoardModal = ({ handleCloseModal }) => {
  console.log('BoardModal')
  const [inputValues, setInputValues] = useState([""]);
  const dispatch = useDispatch();
  const board = useSelector((state) => state.task.boards);
  const nameRef = useRef();
  const todo1 = useRef();

  const addNewBoard = (e) => {
    const newInputs = inputValues.map((inputValue) => ({
      name: inputValue,
    }));
    const columns = [
      {
        name: todo1.current.value,
      },
      ...newInputs,
    ];

    e.preventDefault();
    if (nameRef.current.value && todo1.current.value) {
      dispatch(
        boardActions.createBoard({
          name: nameRef.current.value,
          columns: columns,
        })
      );

      console.log(board);
    }
  };

  // Callback function to update the input values
  const handleInputChange = (newValues) => {
    setInputValues(newValues);
  };

  return (
    <>
      <Modal handleCloseModal={handleCloseModal} />
      <ModalCard className="board-modal__form">
        <h3>Add New Board</h3>

        <form onSubmit={(e) => addNewBoard(e)}>
          <label htmlFor="board-name">Board Name</label>
          <input
            type="text"
            id="board-name"
            ref={nameRef}
            placeholder="web design..."
          />

          <h3>Board Columns</h3>
          <div>
            <input type="text" ref={todo1} placeholder="todo" />
          </div>
          {/* <div>
            <input type="text" ref={todo2} placeholder="todo" />
          </div> */}

          <DynamicInputForm onInputChange={handleInputChange} />

          <button type="buttton">+Add New Column</button>

          <button type="submit">Create New Boards</button>
        </form>
      </ModalCard>
    </>
  );
};

export default React.memo(BoardModal);

export function Modal({ handleCloseModal }) {
  return <div className="board-modal" onClick={handleCloseModal} />;
}
