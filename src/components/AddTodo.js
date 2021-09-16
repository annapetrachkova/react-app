import React, {useState} from "react";
import PropTypes from 'prop-types'

const AddTodo = ({ onCreate }) => {
    const [value, setValue] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        if (value) {
            onCreate(value)
            setValue('')
        }
    }
    const changeHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={changeHandler} />
            <button type="submit" disabled={!value.trim()}>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo