import React from 'react'
import TodoListItem from './todoListItem/todo-list-item'
import './todo-list.css'


const TodoList = ({ todos }) => {
   const elements = todos.map((item) => {
       const { id, ...itemProps } = item
    return (
        <li key={id} className="list-group-item">
            <TodoListItem {...itemProps} />
        </li>
    )
   })


    return (
        <div className="todoList">
        <ul className="list-group">
            {elements}
        </ul>
        </div>
    )
}
export default TodoList;