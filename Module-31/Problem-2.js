/*Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.*/

const myFriendName = ['Emran', 'HAsan', 'Abdullah', 'Raiyaaan', 'Tom'];

  const myFriend = (fNames) => {
  const myFriend = [];
  for (let fName of fNames) {
    if (fName.length % 2 === 0) {
        myFriend.push(fName);
    }
  }
  return myFriend;
};
console.log(myFriend(myFriendName));
