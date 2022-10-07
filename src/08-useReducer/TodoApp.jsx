import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState =  [] ;

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

    return (
        <>

            <h1>TodoApp: { todos.length }, <small>pendientes: { todos.filter( res => !res.done ).length } </small> </h1>

            <hr />

            <div className='row' >
                <div className='col-7' >
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
                </div>
                <div className='col-5' >
                    <h4>Agregar todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={ ( value ) => handleNewTodo( value ) } />

                </div>
            </div>



        </>
    )
}
