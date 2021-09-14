import React, {useEffect} from "react";
import TodoList from "./components/TodoList";
import Context from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./components/AddTodo'))
    }, 1000)
}))

const App = () => {
    const [todos, setTodos] = React.useState( []);
    const [loading, setLoading] = React.useState(true)

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
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false,
                }
           ])
        )
    }

  return (
      <Context.Provider value={{ removeTodo }}>
          <div className='wrapper'>
              <h1>ToDo</h1>
              <Modal/>
              <React.Suspense fallback={<p>Loading...</p>}>
                 <AddTodo onCreate={addTodo}/>
              </React.Suspense>

              {loading && <Loader/>}

              {todos.length ? (
                  <TodoList todos={todos} onToggle={toggleTodo}/>
              ) : (
                  loading ? null : <p>No todos!</p>
              )}
          </div>
      </Context.Provider>
  );
}

export default App;
