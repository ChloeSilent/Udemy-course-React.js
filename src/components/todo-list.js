import React from 'react';

import ToDoListItem from './todo-list-item';
import { AST_Undefined } from 'terser';


const ToDoLIst = () => {
    //const items = ['React lernen', 'Wunderschoene App bauen'];
    return (
        <ul>
            <li><ToDoListItem label="React lernen"/></li>
            <li><ToDoListItem
            label="Wunderschoene App bauen"
         /></li>
        </ul>
    )
};

export default ToDoLIst;