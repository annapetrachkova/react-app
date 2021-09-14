import React, {useState} from "react";
import PropTypes from 'prop-types'

const AddTodo = ({ onCreate }) => {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
             {/*вынести onChange в отдельную функцию*/}
            <input value={value} onChange={event => setValue(event.target.value)} />
            {/*кнопка была disabled если value пустая строка*/}
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo