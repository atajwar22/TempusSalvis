
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let factOTD = document.querySelector("#factOTD");
    let i = Math.floor(Math.random() * 1644);
    let quote = data[i].text;
    let author = data[i].author;
    if (author == "null") {
      author = "John Doe";}
    let p = document.createElement("p");
    p.innerHTML = '"' +  quote + '"' + " - " + author;
    factOTD.appendChild(p);
    console.log(p);
  });