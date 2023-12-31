(async()=> {
    let response = await fetch('https://api.github.com/');
    let url = await response.json();

    console.log(url);
})();