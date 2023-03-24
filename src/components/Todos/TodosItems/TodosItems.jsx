import React from 'react';

const TodosItems = ({todos}) => {
    return (
        <div>
            {
                todos.length == 0
                    ? <div>Данных нет</div>
                    : todos.map(todo => {
                        return <div key={todo.id}>{todo.date} --- {todo.description}</div>
                    })
            }
        </div>
    );
};

export default TodosItems;