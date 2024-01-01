function* generateSequence(start, end) {
    for(let i = start; i <=end; i++) yield i;
}

function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57);

    //A..Z
    yield* generateSequence(65,90);

    //a..z
    yield* generateSequence(97,122);
}

let str="";

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

console.log(str);



// yukarıdaki kod bu şekilde de yazılabilir
function* generateAlphaNum() {
    // 0..9
    // yield* generateSequence(48, 57);
    for(let i=48; i<=57;i++) yield  i;

    //A..Z
    // yield* generateSequence(65,90);
    for(let i=65; i<=90;i++) yield  i;

    //a..z
    // yield* generateSequence(97,122);
    for(let i=97; i<=122;i++) yield  i;
}

str="";

for (let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
}

console.log(str);