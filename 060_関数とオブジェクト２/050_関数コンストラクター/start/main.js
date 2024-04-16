const fn1 = new Function('a', 'b','return a + b');

const result = fn1(1, 2);

console.log(result);

function fn(a, b){
    return a + b;
}