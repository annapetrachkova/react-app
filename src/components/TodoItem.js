import React, {useContext} from "react";
import PropTypes from 'prop-types';

const TodoItem = ({ todo, index, onChange, removeTodo}) => {
    return (
        <li className='todoitem-li'>
            <span className={todo.completed ? 'done' : null}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    className='todoitem-li-input'
                    onChange={() => onChange(todo.id)}
                />
                 <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='rm' onClick={() => removeTodo(todo.id)}>
                &times;
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem