import React, { useContext } from 'react'
import { Context } from '../../context'


export const TodoItem = ({ todo, id }) => {
    const { deleteTodo, completeTodo } = useContext(Context)

    return (
        <div className='todo-item' style={todo.complete ? ready : notReady}>{todo.text}
           <button onClick={()=> completeTodo(id)}>{todo.complete ? "cancel" : "do"}</button>
           <button onClick={()=> deleteTodo(id)}>delete</button>
        </div>
    )
}

const ready =  {
    textDecoration:"line-through"
}

const notReady = {
    textDecoration:"none"
}

