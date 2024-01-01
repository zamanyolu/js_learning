class Thenable{
    constructor(num) {
        this.num =num;
    }

    then(resolve, reject) {
        console.log(resolve);
        setTimeout(()=> resolve(this.num*2), 1000);
    }
}

async function f() {
    let result = await new Thenable(2);
    console.log(result);
}
f();
