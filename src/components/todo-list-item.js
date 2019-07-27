import React from 'react';

const ToDoListItem = ({label, imoprtant = false}) => {// деструктуризация объекта, мы берем из него значение ключа label
const style = {
    color: imoprtant ? 'tomato' : 'blue'
}

    return (
<span style={style}>{label}</span>
    )
}

export default ToDoListItem;

