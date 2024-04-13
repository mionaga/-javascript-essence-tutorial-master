function hello(name) {
    console.log('hello '  + name);
}

function bye(){
    console.log('bye');
}

function fn(cb){
    cb('Tom');
}

fn(hello);

fn(function(name){
    console.log('hello, ' + name);
})

setTimeout(hello, 2000);