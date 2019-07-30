import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoLIst from './components/todo-list';

import './components/app.css';

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


ReactDOM.render(<App />, document.querySelector('#root'))