function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    
    .then(Response => Response.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        console.log(post);
        const div = document.createElement('div');
         div.classList.add('post');
        div.innerHTML = `
        <h1>User- ${post.userId}</h1>
        <h4>Post Title: ${post.title}</h4>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}
