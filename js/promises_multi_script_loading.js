function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.body.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error ${src}`));
        document.head.append(script);
    });
}

// 1. yol (uzun)
loadScript('1.js')
    .then(function (script) {
        return loadScript('2.js');
    })
    .then(function (script) {
        return loadScript('3.js');
    })
    .then(function (script) {
        bir();
        iki();
    });

// 2. yol (kısa)
loadScript('1.js')
    .then(script => loadScript('2.js'))
    .then(script => loadScript('3.js'))
    .then(script => {
        bir();
        iki();
    });