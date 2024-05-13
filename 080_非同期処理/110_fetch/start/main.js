// window.fetch('users.json').then(function(response) {
//     console.log(response);
//     return response.json();
// }).then(function(json){
//     console.log(json);
//     for(let user of json){
//         console.log(`Hello! I am ${user.name}!I'm ${user.age}years old now!!`)
//     }
// });

async function fetchUsers() {
    const response = await fetch('users.json');
    const users = await response.json();
    const result = users.map((user) => {
        console.log(`Hello! I am ${user.name}!I'm ${user.age}years old now!!`);
    });
    return result;
};

fetchUsers();