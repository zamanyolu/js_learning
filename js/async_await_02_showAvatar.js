async function showAvatar() {
    let githubResponse = await fetch("https://api.github.com/users/htemiz");
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src=githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
    img.remove();
    return githubUser;
}

showAvatar();