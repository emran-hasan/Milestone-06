function loadUser2(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => subLoadUser2(data))
}

function subLoadUser2(data){
    // for(const user of data){
    //     console.log(user.name);
    // }
    const ul = document.getElementById('user-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)
    }
}