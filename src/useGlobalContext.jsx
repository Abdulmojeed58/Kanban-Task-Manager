import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [createNewBoard, setCreateNewBoard] = useState(false);

  const [boardLists, setBoardLists] = useState([
    {
      id: 1,
      name: "platform launch",
      columns: [
        {
          name: "todo",
          tasks: [
            "Build UI for onboarding flow",
            "Add account management endpoint",
            "Build UI for search",
            "Add search endpoint",
          ],
        },
        {
          name: "todo",
          tasks: [
            "Add account management endpoint",
            "Build UI for search",
            "Add search endpoint",
            "Build UI for search",
            "Add search endpoint",
          ],
        },
        {
          name: "todo",
          tasks: [
            "Build UI for onboarding flow",
            "Add account management endpoint",
            "Build UI for search",
            "Add search endpoint",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "marketing plan",
      columns: [
        {
          name: "todo",
          tasks: [
            "Build UI for onboarding flow",
            "Add account management endpoint",
            "Build UI for search",
            "Add search endpoint",
          ],
        },
        {
          name: "todo",
          tasks: [
            "Build UI for onboarding flow",
            "Add account management endpoint",
            "Build UI for search",
            "Add search endpoint",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "roadmap",
      columns: [
        {
          name: "todo",
          tasks: [
            "Build UI for onboarding flow",
            "Add account management endpoint",
            "Build UI for search",
            "Add search endpoint",
          ],
        },
      ],
    },
  ]);

  const [activeBoard, setActiveBoard] = useState({
    id: 1,
    name: "platform launch",
    columns: [
      {
        name: "todo",
        tasks: [
          "Build UI for onboarding flow",
          "Add account management endpoint",
          "Build UI for search",
          "Add search endpoint",
        ],
      },
      {
        name: "todo",
        tasks: [
          "Build UI for onboarding flow",
          "Add account management endpoint",
          "Build UI for search",
          "Add search endpoint",
        ],
      },
      {
        name: "todo",
        tasks: [
          "Build UI for onboarding flow",
          "Add account management endpoint",
          "Build UI for search",
          "Add search endpoint",
        ],
      },
    ],
  });

  const toggleCreateNewBoard = () => {
    setCreateNewBoard((prevValue) => !prevValue);
  };

  return (
    <AppContext.Provider
      value={{
        createNewBoard,
        toggleCreateNewBoard,
        boardLists,
        setBoardLists,
        activeBoard,
        setActiveBoard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
