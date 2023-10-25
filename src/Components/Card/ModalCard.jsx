import { motion } from "framer-motion";
import "./card.scss";

const ModalCard = ({children, className = ''}) => {
    return (
        <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: -60, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        className={`modal_card ${className}`}>
            {children}
        </motion.div>
    );
};

export default ModalCard;
