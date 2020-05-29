import React from 'react';

import './style.css'

const Form = () => {
    return (
        <form className="task-form">
            <input placeholder="Enter a task you have to do" className="task-input" />
            <input type="submit" value="Save" className="task-button" />
        </form>
    );
}

export default Form;