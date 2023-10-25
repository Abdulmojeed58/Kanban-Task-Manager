import React from "react";
import Header from "../Header/Header";
import "./main.scss";
import BoardComponents from "../Board/BoardComponents";

const Main = () => {
    console.log('Main')
  return (
    <div className="main">
      <Header />

      <div className="main-board">
        <BoardComponents />
      </div>
    </div>
  );
};

export default React.memo(Main);
