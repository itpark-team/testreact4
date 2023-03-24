import React from 'react';
import TodosItems from "../TodosItems/TodosItems";
import {useState} from "react";
import TodosApiWorker from "../Api/TodosApiWorker";
import {useEffect} from "react";
import TodosAddForm from "../TodosAddForm/TodosAddForm";

const TodosList = () => {

    let [todos, setTodos] = useState([]);
    let todosApiWorker = new TodosApiWorker();

    const getAllTodos = () => {
        todosApiWorker.getAllTodos()
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.log("getAllTodos ERRRROR");
            });
    }

    const addNewTodo = (inputTodo) => {
        todosApiWorker.addNewTodo(inputTodo)
            .then(response => {
                console.log("успешно добавлено");
                getAllTodos();
            })
            .catch(error => {
                console.log("addNewPost ERRRROR");
            });
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <div>
            <TodosAddForm addNewTodo={addNewTodo}/>
            <TodosItems todos={todos}/>
        </div>
    );
};

export default TodosList;