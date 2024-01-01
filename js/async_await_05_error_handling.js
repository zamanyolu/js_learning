


async function f() {
    try{
        let response = await fetch("http://no-such-url");
        let user = await response.json();
    }catch(err){
        console.log(err);
    }
}
f();


// try catch kullanmadan, .catch ile hata yakalanabilir
async function f() {
    let response = await fetch("http://no-such-url");
}
//  f becomes a rejected promise
f().catch(hata => console.log("hata:\n\n", hata));

url1= "http://no-such-url";
url2= "http://no-such-url";

// wait for multiple promises
let results = await Promise.all([
    fetch(url1),
    fetch(url2)
    ]
);

url1= "http://no-such-url";
url2= "http://no-such-url";

// wait for multiple promises
// bu, javascript.info da anlatıldığı gibi çalışmıyor. hata veriyor.
// https://javascript.info/async-await
let results = await Promise.all([
        fetch(url1),
        fetch(url2)
    ]
);
