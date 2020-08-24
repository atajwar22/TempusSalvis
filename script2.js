// test Prep
const subjectElement = document.getElementById("testSubject");
const topicElement = document.getElementById("testTopic");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault(); //does not refresh page
    const subject        = subjectElement.value;
    const topic         = topicElement.value;

    subjectElement.value = "";
    topicElement.value  = "";

    let userInput = subject + "  " + topic;
    console.log(userInput);

    let khan = "khan academy";

    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9uKfXBjYpoiQjVbLmNgFbN8AQaDujiks&type=video&q=' + userInput + khan)
        .then(response =>
        response.json()
       ) 
    .then(function (json) {
        let container = document.getElementById("videoContainer");
        container.innerHTML = "";
        for(let i = 0; i < 4; i++) {
            console.log(json.items[i].id.videoId)
            let video = document.createElement("iframe");
            video.setAttribute("src", `https://youtube.com/embed/${json.items[i].id.videoId}`)
            let container = document.getElementById("videoContainer");
            container.appendChild(video);
        }
          
    })

        // console.log(json)
        // for(let i = 0; i < 4; i++) {
        //     console.log(json.items[i].id.videoId)
        // }
        // );

    //Update database here
    // let value = {
    //     subject: subject,
    //     topic: topic
    // }

    // database.push(value);
}

// Set database "child_added" event listener here
// database.on('child_added', addMessage);

// let allMessages = document.querySelector('.allMessages');


// function addMessage(data) {
//     let value = data.val();
//     let subject= value.subject;
//     let topic = value.topic;

//     let p = document.createElement('p');
//     p.innerText = subject + " " + topic;
//     allMessages.appendChild(p);
// }

// let userInput = "cellular respiration";
// let khan = "khan academy";

// fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9uKfXBjYpoiQjVbLmNgFbN8AQaDujiks&type=video&q=' + userInput + khan)
//         .then(response =>
//         response.json()
//        ) 
//     .then(json =>
//         // console.log(json)
//         console.log(json.items[0].id.videoId),
//         );

        // let url ="https://randomuser.me/api";

        // fetch(url)
        //     .then(function(response){
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then(function(myJson){
        //         console.log(myJson);
        //         let email= myJson[0].results.email;
        //         const p = document.createElement("p");
        //         p.innerText=email;
        //         document.body.appendChild(p);
        //     })
