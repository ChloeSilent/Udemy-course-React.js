import React, { Component } from 'react'; // импорт реакта, он дефолтный, а вот компоненты были именованные, поэтому они в  {}
import './todo-list-item.css'

/* у элементов списка есть состояния сделано(зачеркунто и не сделано
    Это можно реализоввать в React c помощью состояния state, но задать state можно только классу
    классу нельзя передать аргументы, но у него есть this
    */
class ToDoListItem extends Component {
    /* наш класс  ToDoListItem является дочерним Components*/

    constructor () {
        super();
        this.onLabelClick =
    }
    onLabelClick() {
        console.log(`clicked on ${this.props.label}`)
    }


    render() {
        /* весь функционал прописываем внутри render*/
        const { label, important = false } = this.props;
        const style = {
            color: important ? 'tomato' : 'blue'
        }

        return (
            <span className="todo__list-item " >
                <span className="todo__list-item-label " style={style} onClick={ this.onLabelClick.bind(this)}>
                    {label}
                </span>
            </span>/*здесь применена деструктуризация */
        )
        /* */
    }
}


export default ToDoListItem;

