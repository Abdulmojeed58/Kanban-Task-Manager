import React from "react";
import "./header.scss";
import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import useGlobalContext from "../../useGlobalContext";
import { useDispatch } from "react-redux";
import { boardActions } from "../../redux/boardSlice";

const Header = (props) => {
  const { activeBoard } = useGlobalContext();
  const dispatch = useDispatch()

  return (
    <header>
      <h2>{activeBoard?.name}</h2>

      <button onClick={()=>dispatch(boardActions.handleIsNewTask(true))}>
        <BsPlus />
        <span>add new task</span>
      </button>
      <BsThreeDotsVertical
        color="#828fa3"
        size="1.6rem"
        style={{ cursor: "pointer" }}
      />
    </header>
  );
};

export default Header;
