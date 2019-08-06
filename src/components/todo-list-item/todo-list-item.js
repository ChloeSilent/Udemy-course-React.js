import React, { Component } from 'react'; // импорт реакта, он дефолтный, а вот компоненты были именованные, поэтому они в  {}
import './todo-list-item.css'

/* у элементов списка есть состояния сделано(зачеркунто и не сделано
    Это можно реализоввать в React c помощью состояния state, но задать state можно только классу
    классу нельзя передать аргументы, но у него есть this
    */
class ToDoListItem extends Component {
    /* наш класс  ToDoListItem является дочерним Components*/
/*при клике меняем состояние */
// здесь констурктор нужен только для того, что бы объявить клик по конкр элементу
    constructor () {
        //если наш класс наследует какой-л класс, то мы указываем в constructor super()
        super();
        // стрелоч функция имеет наружн this - поэтому здесь function не подойдет
        this.onLabelClick = () => {
            console.log(`clicked on ${this.props.label}`)
        }
    }



    render() { // сюда прописать, то, что должна делать функция, без всякий состояний
        /* весь функционал прописываем внутри render*/
        const { label, important = false } = this.props; 
        //  если раньше они просто передавались в функцию, то теперь все необходимые свойства берем из this
        //  строчка выше - это по сути наши props
        const style = {
            color: important ? 'tomato' : 'blue'
        }

        return (
            <span className="todo__list-item " >
                <span 
                className="todo__list-item-label " 
                style={style} 
                onClick={ this.onLabelClick}>
                    {label}
                </span>
            </span>
        )
        // выше привязали this с помощью bind, иначе оно теряется
    }
}

/**
 * Функции и классы
 * Если у нас нет состояния - то это функция, а если есть состояние - то это уже будет класс
 * Переделка функции в класс:
 * 
 * Прописываем в верху файла в импорте { Component }
 * Прописываем class Имя_класса_бывшее_имя_функции extends Component { 
 * 
 * закидываем сюда код функции
 * вырезаем из функции параметы - они теперь берутся из this
 * const { label, important = false } = this.props; 
 * 
 * 
 */
export default ToDoListItem;

