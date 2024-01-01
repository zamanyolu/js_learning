(async()=> {
    let response = await fetch('https://api.github.com/');
    let url = await response.json();
    console.log(url);
})();


// modern browserlarda yukarıdakine gerek yok
// aşağıdaki gibi yalın yeterli
let response = await fetch('https://api.github.com/');
let url = await response.json();
console.log(url);