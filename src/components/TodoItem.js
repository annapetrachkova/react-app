import React, {useContext} from "react";
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}
//все стили занести в scss
// устновить scss

const TodoItem = ({ todo, index, onChange, removeTodo}) => {
    return (
        <li style={styles.li}>
            <span className={todo.completed ? 'done' : null}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
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