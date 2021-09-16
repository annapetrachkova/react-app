import React, {useState, useEffect} from "react";
import TodoList from "./components/TodoList";
import Loader from "./Loader";
import Modal from "./Modal/Modal";
import AddTodo from "./components/AddTodo";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 1000)
            })
    }, [])


    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        )
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addTodo = (title) => {
        const param = [{
            title,
            id: Date.now(),
            completed: false,
        }];
        setTodos([...todos, ...param])
    }

  return (
      <div className='wrapper'>
          <h1>ToDo</h1>
          <Modal/>
          <AddTodo onCreate={addTodo}/>


          {loading && <Loader/>}

          {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo} removeTodo={removeTodo}/>
          ) : (
              loading ? null : <p>No todos!</p>
          )}
      </div>
  );
}

export default App;
