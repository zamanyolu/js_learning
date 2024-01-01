function* gen() {
    let result = yield "2+2=?";// (*)
    console.log(result);
}

let generator = gen();
let question = generator.next().value; // <-- yield returns the value
generator.next(4); // --> pass the result into the generator



function* gen() {
    let ask1 = yield "2 + 2 = ?";
    console.log(ask1);; // 4
    let ask2 = yield "3 * 3 = ?"
    console.log(ask2); // 9
}

let generator2 = gen();
console.log( generator2.next().value ); // "2 + 2 = ?"
console.log( generator2.next(4).value ); // "3 * 3 = ?"
console.log( generator2.next(9).done ); // true



function* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)
        console.log("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
        console.log(e); // shows the error
    }
}

let generator3 = gen();
let question2 = generator3.next().value;

generator3.throw(new Error("The answer is not found in my database")); // (2)