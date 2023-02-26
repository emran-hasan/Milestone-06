const data = {
    count :5000,
    data: [
        {id:01, name:'Tom', job: 'Web Developer'},
        {id: 02, name: 'Tonmoy', job: 'Web Designer'}
    ]

}
console.log(data.data[0].job);


const user = {
    id : 500,
    name: "tomas alba",
    address: {
        first: 'kochukhet',
        second: 'First floor'
    },
    postOffice: 'Janinaa' 
}
// console.log(user.address.second);
console.log(user.addres?.second);