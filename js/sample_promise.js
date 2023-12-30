let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
// promise.then(delay).then(alert);
// promise.then(delay).then((msg)=> console.log(msg));

function alert(msg) {
    console.log(msg);
}
function delay(ms) {
    // your code
    console.log('delay içindeyiz');
}
console.log(typeof window !== 'undefined');