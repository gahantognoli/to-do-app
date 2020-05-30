import React from 'react';

import './style.css';

const List = (props) => {

    return (
        <div className="taskList">
            {
                props.tasks.map(task => {
                    const classDone = task.done ? 'task-done' : '';
                    return <div className="container-checkbox" key={task.id}>
                        <input type="checkbox" 
                            className="checkbox" 
                            checked={task.done}
                            onClick={() => props.update(task.id)} />
                        <label className={classDone}>{task.description}</label>
                    </div>
                })
            }
        </div>
    );
}

export default List;