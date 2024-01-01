function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

generator = generateSequence();
// let iki = generator.next();
// console.log(JSON.stringify(iki));

let sequence = [0, ...generateSequence()];
console.log(sequence);

for (let value of generator) {
    console.log(value);
}


let range = {
    from:1,
    to:5,
    *[Symbol.iterator](){
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log([...range])