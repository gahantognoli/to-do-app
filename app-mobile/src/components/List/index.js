import React from 'react';

import './style.css';

const List = () => {
    return (
        <div className="taskList">
            <div className="container-checkbox">
                <input type="checkbox" className="checkbox" />
                <label>Teste</label>
            </div>
            <div className="container-checkbox">
                <input type="checkbox" className="checkbox" />
                <label className="text-strike">Teste</label>
            </div>
            <div className="container-checkbox">
                <input type="checkbox" className="checkbox" />
                <label>Teste</label>
            </div>
        </div>
    );
}

export default List;