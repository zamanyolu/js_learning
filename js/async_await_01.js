// async function f() {
//     return 1;
// }
//
// f().then(r => console.log(r));
//
// async function f() {
//     return Promise.resolve(1);
// }
//
// f().then(res => console.log(res));


async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>resolve("done!"), 1000);
    });

    let result = await promise; // wait until promise resolves
    console.log(result);
}

f();
