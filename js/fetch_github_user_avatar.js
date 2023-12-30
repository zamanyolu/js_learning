
function loadJson(url) {
      return fetch(url)
        .then(response => response.json());
        // .catch(error => alert(error.message));
}

function loadGithubUser(user) {
    return loadJson(`https://api.github.com/users/${user}`);

    // return fetch(`https://api.github.com/users/${user}`)
    //     .then(response => response.json())
    //     .catch(error => alert(error.message));
}

function showAvatar(githubUser) {
     return new Promise(function (resolve, reject) {
        console.log(githubUser);
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

loadJson(
     new Promise(resolve => resolve('htemiz'))
        .then(user => loadGithubUser(user))
        .then(showAvatar)
        .then(githubUser => alert(`Finished showing ${githubUser.name}`))
);


/*
new Promise(resolve => resolve('htemiz'))
    .then(user => fetch(`https://api.github.com/users/${user}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function (resolve, reject) {
        console.log(githubUser);
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));


 */


new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);