
function printTypeAndValue(val){
    console.log(typeof val, val)
}

let a = 0;

printTypeAndValue(a);

let b = '1' + a;

printTypeAndValue(b);

let c = 15 - b;

printTypeAndValue(c);

let d = c - null;

printTypeAndValue(d);