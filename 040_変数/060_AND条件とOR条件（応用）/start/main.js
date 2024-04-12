// function hello(name = 'Ito') {
//     console.log('Hello, ' + name);
// }

function hello(name) {
    name = name || 'Ito';
    console.log('Hello, ' + name);
} 

// hello('Jim');
// hello();

// let name = 'Bob';

// if(name){
//     hello(name);
// }

name && hello(name);