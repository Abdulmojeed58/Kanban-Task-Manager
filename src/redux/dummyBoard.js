const DUMMY_DATA = [
  {
    id: 1,
    name: "platform launch",
    columns: [
      {
        id: 8,
        name: "todo",
        tasks: [
          {
            id: 1,
            title: "Drink",
            desc: "a",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",
                isCompleted: true,
              },
              {
                id: 2,
                subTitle: "Add account management endpoint 2",
                isCompleted: false,
              },
            ],
          },

          {
            id: 2,
            title: "Dont add pls, account management endpoint",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: 14,
        name: "todosss",
        tasks: [
          {
            id: 1,
            title: "Add account management endpoint",
            desc: "b",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
              {
                id: 2,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
            ],
          },

          {
            id: 2,
            title: "Dont add pls, account management endpoint",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "platform launch",
    columns: [
      {
        id: 8,
        name: "todo",
        tasks: [
          {
            id: 1,
            title: "Add account management endpoint",
            desc: "c",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: true,              
              },
              {
                id: 2,
                subTitle: "Add account management endpoint",                isCompleted: false,                
              },
            ],
          },

          {
            id: 2,
            title: "Dont add pls, account management endpoint",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: 14,
        name: "todo",
        tasks: [
          {
            id: 1,
            title: "Add account management endpoint",
            desc: "d",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
              {
                id: 2,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
            ],
          },

          {
            id: 2,
            title: "Dont add pls, account management endpoint",
            subtask: [
              {
                id: 1,
                subTitle: "Add account management endpoint",                isCompleted: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DUMMY_DATA;
