function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = callback(null,script);
    script.onerror = callback(new Error('Script load failed ${src'));
    document.head.append(script);
}

// loadScript('js/1.js', (err,script)=>{...})

// LETS PROMISIFY THE FUNCTION
let loadScriptPromise = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if(err) reject(err);
            else resolve(script);
        });
    });
};

function promisify(f) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, result) {
                // custom callback for f(**)
                if(err) reject(err);
                else resolve(result);
            }
            args.push(callback); // append custom callback to end of f arguments

            f.call(this, ...args); // call the original function
        });
    };
}

// Usage:
let loadScriptPromise = promisify(loadScript);
//loadScriptPromise(...).then(...); // vb.



// ÇOKLU PARAMETRE ALAN BİR CALLBACK VARSA
function promisify(f, manyArgs= false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, results) {
                // custom callback for f(**)
                if(err) reject(err);
                //çok parametreli bir callback ise veya değilse
                else resolve(manyArgs ? results : results[0]);
            }
            args.push(callback); // append custom callback to end of f arguments

            f.call(this, ...args); // call the original function
        });
    };
}

// Usage:
let loadScriptPromise = promisify(loadScript, true);
//loadScriptPromise(...).then(...); // vb.