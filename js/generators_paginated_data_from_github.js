// for await (let commit of fetchCommits("htemiz/DeepSR")) {
//     // process commit
// }


async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url){
        const response = await fetch(url,{
            headers:{'User-Agent':'Our script'}, // github needs any user-agent header
        });

        const body = await response.json(); //(2) response is JSON (array of commits)
        console.log("\n", body, "\n\n");

        //(3) the URL of the next page is in the headers, extract it
        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        console.log(nextPage);

        nextPage = nextPage?.[1];
        url = nextPage;

        for(let commit of body){ // (4) yield commits one by one, until the page ends
            yield commit;
        }
    }
}

(async () => {
    let count=0;
    for await (const commit of fetchCommits("htemiz/DeepSR")){
        console.log(commit.author.login);
        if(++count==100) break;
    }
    console.log(count)
})();