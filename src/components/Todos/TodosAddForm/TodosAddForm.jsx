import React from 'react';
import {useState} from "react";

const TodosAddForm = ({addNewTodo}) => {

    let [inputTodo, setInputTodo] = useState({date: "2025-11-11", description: "..."});

    return (
        <div>
            <input type="text"
                   value={inputTodo.date}
                   onChange={(event) => setInputTodo({...inputTodo, date: event.target.value})}/>

            <input type="text"
                   value={inputTodo.description}
                   onChange={(event) => setInputTodo({...inputTodo, description: event.target.value})}/>

            <button onClick={() => addNewTodo(inputTodo)}>Add new todo</button>
        </div>
    );
};

export default TodosAddForm;