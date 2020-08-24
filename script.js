/*let loginRedirect = document.querySelector("#loginPageButton");
function mouseClicked2() {
    location.replace("index.html");
}

loginRedirect.addEventListener("click", mouseClicked2);*/

//called when successful user log in
let mainPageButton = document.querySelector("#mainPageButton");
function mouseClicked(event) {
    event.preventDefault();
    location.replace("afterLogin.html");
}
mainPageButton.addEventListener("click", mouseClicked);

function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();

    console.log('User signed in!');
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    console.log(profile.getEmail());

    location.replace("afterLogin.html");

}

//called when "sign out" button clicked
function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}



// fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmLEzFQj-sI9IY7cc3fqTMW8bmfPcMGOA&type=video&q=' + userInput + khan)
//         .then(response =>
//         response.json()
//         )
//     .then(json =>
//         console.log(json)
//         );