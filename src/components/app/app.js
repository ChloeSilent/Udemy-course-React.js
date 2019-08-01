import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoLIst from '../todo-list';
import './app.css';

const toDoData = [
    { label: 'Tanzen', important: false, id: 1 },
    { label: 'Einen App bauen', important: true, id: 2 },
    { label: 'Malzeit', important: false, id: 3 }

]


const App = () => {

    return (
        <div className="todo-app">
            <span>{(new Date()).toDateString()}</span>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
            </div>
            <ToDoLIst todos={toDoData} />
        </div>
    )
}

export default App;