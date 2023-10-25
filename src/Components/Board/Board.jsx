import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./board.scss";
import { taskAction } from "../../redux/taskSlice";

const Board = (props) => {
  const dispatch = useDispatch();
  const { activeTask } = useSelector((state) => state.taksSlice);
  const { activeColumn } = useSelector((state) => state.task);

  const color = ["blue", "green", "purple"];

  const styles = {
    backgroundColor: color[Math.floor(Math.random() * color.length)],
    width: "18px",
    height: "18px",
    borderRadius: "50%",
  };

  const handleViewTask = (fid, id, task) => {
    const allColumns = activeColumn.columns.find((column) => column.id === fid);
    const allTasks = allColumns.tasks.find((task) => task.id === id);

    dispatch(
      taskAction.handleActiveTask({
        isViewTask: true,
        activeTask: allTasks,
        id: fid,
      })
    );

    dispatch(taskAction.handleCurrentTask(task));
    console.log(activeTask);
  };

  return (
    <div className="board">
      <div className="board-name">
        <div style={styles} />
        <h3>
          {props.name} ({props.column.tasks.length})
        </h3>
      </div>
      <div className="board-task">
        {props.column?.tasks.map((task, i) => (
          <Card
            key={i}
            task={task}
            onClick={() => handleViewTask(props.fid, task.id, task)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
