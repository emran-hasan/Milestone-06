function loadTodos (){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response => Response.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    const todoContainer = document.getElementById('todo-container')
    for (const todo of todos){
        const divTodos = document.createElement('div')
        divTodos.innerHTML = `
        <h5>Title: ${todo.id} </h5>
        <p>User Id: ${todo.title}</p>
        <p>Status: ${todo.completed  == true ?  'completed' : 'Not completed'}</p>
        `
        todoContainer.appendChild(divTodos)
    }
}