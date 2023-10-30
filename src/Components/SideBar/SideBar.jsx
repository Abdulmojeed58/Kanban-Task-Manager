import { useEffect, useState } from "react";

// Styles
import "./sidebar.scss";

// ICONS
import { IconContext } from "react-icons";
import { GoNote } from "react-icons/go";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";

// Hooks
import useGlobalContext from "../../useGlobalContext";

// Images
import darkImage from "../../assets/Images/logo-dark.8590e096.svg";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../redux/boardSlice";
import React from "react";

const SideBar = ({ toggleTheme, theme }) => {
  const dispatch = useDispatch();
  const { boards, activeId } = useSelector((state) => state.task);

  const {
    isSidebarOpen,
    handleIsSidebarOpen,
    toggleCreateNewBoard,
    boardLists,
    setActiveBoard,
    activeBoard,
  } = useGlobalContext();

  const [listCount, setListCount] = useState(0);

  useEffect(() => {
    const totalCounts = boardLists.length;
    setListCount(totalCounts);
  }, [boardLists]);

  const currentBoard = (id) => {
    dispatch(boardActions.handleActiveId(id));
    // const selectedBoard = boardLists.find((boardList) => boardList.id === id);
    // setActiveBoard(selectedBoard);
  };

  const allBoardLists = boards.map(({ name, id }) => (
    <li
      key={id}
      className={`${id === activeId ? "active" : ""}`}
      onClick={() => currentBoard(id)}
    >
      <GoNote className="go-note" />
      <span>{name}</span>
    </li>
  ));

  return (
    <>
      <div
        className={`${isSidebarOpen ? "side-bar-overlay" : ""}`}
        onClick={handleIsSidebarOpen}
      />
      <aside className={`${isSidebarOpen ? "" : "not-active"}`}>
        <div>
          <img src={darkImage} alt="Kanban Logo" className="logo" />

          <div>
            <h4 className="title">ALL BOARDS ({listCount})</h4>

            <IconContext.Provider value={{ size: "1.3em" }}>
              <ul className="board-lists">{allBoardLists}</ul>

              <div
                className="new-board"
                role="button"
                tabIndex="1"
                onClick={toggleCreateNewBoard}
              >
                <GoNote />
                <h2>+create new board</h2>
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <div>
          <div className="toggle-light-dark">
            <IconContext.Provider value={{ color: "#828fa3", size: "1.5em" }}>
              <BsFillSunFill />
              <div className="toggle-box" role="button" onClick={toggleTheme}>
                <button
                  type="button"
                  className={`toggle-btn ${
                    theme === "light" ? "" : "dark-mode"
                  }`}
                ></button>
              </div>
              <BsFillMoonStarsFill />
            </IconContext.Provider>
          </div>

          <div
            role="button"
            className="toggle-side-bar"
            onClick={handleIsSidebarOpen}
          >
            <FiEyeOff />
            <h2>hide sidebar</h2>
          </div>
        </div>
      </aside>
    </>
  );
};

export default React.memo(SideBar);
