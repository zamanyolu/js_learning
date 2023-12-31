//
// Promise.all([
//     new Promise(resolve => setTimeout(()=>resolve(1), 3000)),
//     new Promise(resolve => setTimeout(()=>resolve(2), 2000)),
//     new Promise(resolve => setTimeout(()=>resolve(3), 1000))
//     ]
// ).then(r=> console.log(r));


// let urls =[
//     'https://api.github.com/users/htemiz',
//     'https://api.github.com/users/zamanyolu',
//     'https://api.github.com/users/iliakan'
// ]
//
// let requests = urls.map(url => fetch(url));
//
// Promise.all(requests)
// .then(responses => responses.forEach(
//     response => console.log(response.url, " : ", response.status)
// ));


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(error=>console.log(error)); // Error: Whoops!


//
// let names =['htemiz', 'zamanyolu', 'iliakan'];
// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
// console.log("requests:\n", requests);
// Promise.all(requests)
//     .then(responses => {
//         for (let response of responses) {
//             console.log(response.url, ", ", response.status);
//         }
//         return responses;
//     })
// .then(responses => Promise.all(responses.map(r=> r.json())))
// .then(users=>users.forEach(user=>console.log(user.name)));
//
//
//
// Promise.all([
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(1), 1000)
//     }),
//     2,
//     3
// ]).then(result=>console.log(result)); // 1, 2, 3


// /* ALLSETTLED */
// let urls = [
//     'https://api.github.com/users/htemiz',
//     'https://api.github.com/users/zamanyolu',
//     'https://no-such-url'
// ];
// Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => {
//         results.forEach((result, num) => {
//             if (result.status == "fulfilled") {
//                 console.log(`${urls[num]}: ${result.value.status}`);
//             }
//             if (result.status == "rejected") {
//                 console.log(`${urls[num]}: ${result.reason}`);
//                 console.log(result);
//             }
//         });
//     });


Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1400)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('whoops')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1200))
])
    .then(result => console.log(result));


Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('whoops')), 55)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2400)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2400))
])
    .then(result => console.log(result));

//
// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('whoops')), 55)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ouch')), 55))
// ])
//     .then(result => console.log(result))
//     .catch(error=>console.log(error));


/*
    localde veriyi Promise ile sakla ve sonraki çağrılarda localden oku
 */

let cache = new Map();

function loadCached(url) {
    if(cache.has(url)){
        return Promise.resolve(cache.get(url));
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {
            cahce.set(url,text);
            return text;
        });
}