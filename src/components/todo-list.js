import React from 'react';

import ToDoListItem from './todo-list-item';
import './todo-list.css';


const ToDoLIst = ({ todos }) => {
    
    const items = todos.map((item) => {
        const {id, ...props} = item; /* деструктуризация  item на id и rest(всего остального)*/
        return (
            
        <li key={id} className="list-group-item">
            {/* <ToDoListItem label={item.label} important={item.important} />  это версия строчки ниже до рефакторинга*/}
            <ToDoListItem {...props} />
        </li>
        )
    });
    return (
        <ul className="todo-list list-group">
            {items}
        </ul>
    )
};

export default ToDoLIst;