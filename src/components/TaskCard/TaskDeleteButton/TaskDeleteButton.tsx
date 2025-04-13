import { FaTrashAlt } from "react-icons/fa";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
    return (
        <form action="">
            <button type='submit' className='hoveer:text-gray-700
            text-lg cursor-pointer'>
                <FaTrashAlt />
            </button>
        </form>
    )
}

export default TaskDeleteButton
