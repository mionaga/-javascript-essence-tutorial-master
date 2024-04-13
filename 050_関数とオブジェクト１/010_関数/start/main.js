function fn(a, b=12) {
    console.log(arguments);
    console.log(a, b);
}

let c;
fn(1, c);