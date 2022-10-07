/*
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ]
    }

    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );

console.log( todos );

const newTodo2 = {
    id: 3,
    todo: 'prueba',
    done: false
}

const addTodo2Action = {
    type: '[TODO] add todo',
    payload: newTodo2
}

todos = todoReducer(todos, addTodo2Action )

console.log(todos)
*/

