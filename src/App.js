import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import { useSelector } from 'react-redux';


function App() {
  // const stateDemo=useSelector(state=>state);
  // console.log(stateDemo);
  return (
    <div className="App todo-app">
        <h1>Todo List</h1>
        <AddTodo/>
        <TodoList/>
        <VisibilityFilters />
    </div>
  );
}

export default App;
