import "./listcard.css"
// Propiedades
const Listcard = ({ task, statusChange }) => {
    return (
        <div className="task">
            <p className="task__status" onClick={() => statusChange(task.id)} >
                {task.completed ? '🟢' : '🔴'}
            </p>
            <p className="task__title">
                {task.title}
            </p>
            <button className="task__button">
                ❌
            </button>
        </div>
    )
}

export default Listcard