import {VISIBILITY_FILTERS} from "../contstants";

export const getTodoState = store => store.todos;

export const getTodoList = store => getTodoState(store) ? getTodoState(store).allIds : [];

export const getTodoById = (store, id) => getTodoState(store) ? {...getTodoState(store).byIds[id],id} : {};

// 

export const getTodos = store =>{
    getTodoList(store).map(id => getTodoById(store,id));
}

export const getTodosByVisibilityFilter = (store, visibilityFilter) =>{
    const allTodos=getTodos(store);
    // console.log(allTodos);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
            return allTodos;
        default:
            return allTodos;
    }
}