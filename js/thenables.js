class Thenable {
    constructor([num1, num2]) {
        this.num1 =num1;
        this.num2 =num2;
    }

    then(resolve, reject) {
        console.log(resolve);
        // resolve this after a second
        setTimeout(()=>resolve(this.num1* this.num2),500);
    }
}

new Promise(resolve => resolve([1, 4]))
    .then(result => {
        return new Thenable(result);
    })
.then(result => console.log(result)); // shows 2 after 500ms