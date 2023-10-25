import { motion } from "framer-motion";
import "./card.scss";

const Card = (props) => {
  return (
    <motion.div
      className="card"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      onClick={props.onClick}
    >
      <h3 className="card__title">
        {props.task?.title.length > 21
          ? props.task?.title.substring(0, 21) + "..."
          : props.task?.title}
      </h3>
      <p>
        {props.task?.subtask.filter((task) => task.isCompleted).length} of{" "}
        {props.task?.subtask.length}{" "}
        {props.task?.subtask.length > 1 ? "subtasks" : "subtask"}
      </p>
    </motion.div>
  );
};

export default Card;
