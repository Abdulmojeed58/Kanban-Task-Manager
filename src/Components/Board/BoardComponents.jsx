import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import Board from "./Board";
import "./board.scss";
import { boardActions } from "../../redux/boardSlice";

const BoardComponents = () => {
  const { activeId, boards } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const allColumns = boards.find((board) => board.id === activeId);
  // console.log(allColumns)

  useEffect(() => {
    dispatch(boardActions.handleActiveColumn(allColumns));
  }, [activeId]);

  const columns = allColumns?.columns.map((column, index) => {
    return (
      <motion.div className="board-container" key={index}>
        <Board name={column?.name} column={column} fid={column.id} />
      </motion.div>
    );
  });

  return <>{columns}</>;
};

export default BoardComponents;
