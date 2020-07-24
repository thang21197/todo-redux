import React, { useState } from 'react';
import Todo from './Todo';

import {getTodosByVisibilityFilter} from "../redux/selectors";
import {VISIBILITY_FILTERS} from "../contstants";

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

TodoList.propTypes = {
    
};

function TodoList(props) {
    const visibilityFilter  = useSelector(state => state.visibilityFilter);
    const state  = useSelector(state => state);
    const todos = getTodosByVisibilityFilter(state,visibilityFilter);
    // console.log(todos);
    return (
        <ul className="todo-list">
            {todos && todos.length ? todos.map((todo,index)=>{
                return <Todo key={`todo-${todo.id}`} todo={todo}/>
            }):"No todos, yay!"}
        </ul>
    );
}

export default TodoList;