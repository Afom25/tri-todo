import React from 'react';

const Todos=({todos,deleteTodo}) => {
    const todoList = todos.length ? (todos.map(todo =>{
        return(
            <div className="collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                {/* <button type="button" className="btn btn-danger" onClick={() =>{deleteTodo(todo.id)}}> Delete name</button> */}
            </div>

        )
    })) :(
        <p className="center">መደብ የብልካና😮😮        </p>
    )
    return (
        <div className="todos collection">
            {todoList}

        </div>
    )
}

export default Todos