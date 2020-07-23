import React, { useState } from 'react';
import {addTodo} from "../redux/actions";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

AddTodo.propTypes = {
    
};

function AddTodo(props) {
    // const stateDemo=useSelector(state=>state.todos);
    const [input,setInput]=useState("");
    const dispatch=useDispatch();

    const updateInput = (input) => {
       setInput(input)
    } 

    const handleAddTodo = () =>{
        const action=addTodo(input);
        dispatch(action);
        setInput("");
        // console.log(stateDemo);
    };

    return (
        <div>
            <input
             onChange={e => updateInput(e.target.value)}
             value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
              Add Todo
            </button>
        </div>
    );
}

export default AddTodo;