import React from 'react';
import './todo-list-item.css'
const ToDoListItem = ({ label, important = false }) => {// деструктуризация props - это объект мы может укзать его как (props), но тогда нужно будет в переменных указывать как props.label и тд, а можно как здесь, мы берем из него значение ключа label
    const style = {
        color: important ? 'tomato' : 'blue'
    }

    return (
        <span className="todo__list-item "
            style={style}>{label}</span>/*здесь применена деструктуризация */
    )
}

export default ToDoListItem;

