import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <ul className='todolist-ul'>
            { props.todos.map((todo, index) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={props.onToggle}
                    removeTodo={props.removeTodo}
                />
            })}
        </ul>
    )
}

TodoList.propType = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList