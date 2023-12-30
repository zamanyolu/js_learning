json = "https://github.com/htemiz/TripAdvisor/blob/master/config/configuration.json"
json = "https://raw.githubusercontent.com/htemiz/TripAdvisor/master/config/configuration.json?token=GHSAT0AAAAAACMFUAFAPM52TIOU5CKIU2AWZMPYNBA"
// fetch(json)
//     .then(function (response) {
//         return response.text();
//     })
//     .then(function (text) {
//         console.log(text);
//     });


fetch(json)
.then(response=>response.json())
    .then(result=>console.log(result));