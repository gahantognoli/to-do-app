import React, { useState } from 'react';

import './style.css'

const Form = (props) => {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        const taskInputValue = event.target.value;
        console.log(taskInputValue);
        setTask(taskInputValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const taskToSave = {
            description: task
        };
        props.save(taskToSave);
        setTask('');
    }

    return (
        <form className="task-form">
            <input
                placeholder="Enter a task you have to do"
                className="task-input"
                onChange={handleChange}
                value={task}
            />
            <input
                type="submit"
                value="Save"
                className="task-button"
                onClick={handleSubmit}
            />
        </form>
    );
}

export default Form;