document.getElementById('bg-btn').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'orange';
    }
})

document.getElementById('third-btn').addEventListener('click', function(){
    const friendThird = document.getElementById('third-friend');
    friendThird.style.textAlign = 'center';
})
document.getElementById('add-friend').addEventListener('click', function(){
    const addFriends = document.getElementById('friends');

    const friendAdded = document.createElement('div')
    friendAdded.classList = 'friend';
    friendAdded.innerHTML = `
        <h1 class= "friend">SOmething is added</h1>
        <p>Quidem tempora quisquam dolores distinctio!</p>
    `;
    addFriends.appendChild(friendAdded);
})