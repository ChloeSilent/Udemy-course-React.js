import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoLIst from './components/todo-list';



const App = () => {

    return (
        <div>
            <span>{(new Date()).toDateString()}</span>
        <AppHeader/>
        <SearchPanel/>
        <ToDoLIst/>
    </div>
    )
}


ReactDOM.render(<App/>, document.querySelector('#root'))