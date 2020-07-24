import React from 'react';
import cx from "classnames";
import PropTypes from 'prop-types';
import {toggleTodo} from "../redux/actions";
import { useDispatch } from 'react-redux';

Todo.propTypes = {
    todo:PropTypes.object,
    // key:PropTypes.string
};

function Todo(props) {
    const {todo}=props;
    const dispatch=useDispatch();

    const handleToggle = () =>{
        // console.log('asdasd');   
        const action = toggleTodo(todo.id);
        dispatch(action);
    }
    return (
        <li className="todo-item" onClick={handleToggle}>
            {todo && todo.completed ? "👌": "👋"}{" "}
            <span className={cx("todo-item__text")}>
              {todo.content}
            </span>
        </li>
    );
}

export default Todo;