
var short = 30;
var middle = 100;
var long = 300;
var factLength = 3;

function getFirstFact(){
  const url = "https://catfact.ninja/fact?max_length=150";
  fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(json){
  //  console.log(json);
    var factLength = json.length;
  //  console.log(factLength);
    let results = '<h2>Do you know that ' + json.fact + '</h2>';
    document.getElementById("headerFact").innerHTML = results;
  });
}

function getCatFacts(){
  document.getElementById("AmountFactSubmit").addEventListener("click", function(event){
    event.preventDefault();
    const value = document.getElementById("AmountOfFacts").value;
    if (value === "")
      return;

    console.log(value);
    fetchFacts(value);
});
}

function fetchFacts(value){
  const url = "https://catfact.ninja/facts?limit=" + value + "&min_length=150";
  fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json);
    var factLength = json.data[0].length;
    console.log(factLength);
    var results = "<h3>Facts</h3>";
    for(let i=0; i<value; i++){
      results += "<p>" + (i+1).toString() + ". " + json.data[i].fact + "</p>";
    }

    document.getElementById("moreFacts").innerHTML = results;
  });
}


function getCatBreeds(){
    document.getElementById("AmountBreedSubmit").addEventListener("click",function(event){
      event.preventDefault();
      const value = document.getElementById("AmountOfBreeds").value;
      if(value === "")
      return;

      console.log(value);
      fetchBreeds(value);

    });
}

function fetchBreeds(value){
  const url = "https://catfact.ninja/breeds?limit=" + value;
  fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json);
    var results = "<h3>Breeds</h3>";
    for(let i=0; i<value; i++){
      results += "<p>" + (i+1).toString() + ". Breed: " + json.data[i].breed + "</p>";
      results += "<p> Country: " + json.data[i].country + "</p>";
      results += "<p> Origin: " + json.data[i].origin + "</p>";
      results += "<p> Coat " + json.data[i].coat + "</p>";
      results += "<p> Pattern " + json.data[i].pattern + "</p>";

    }

    document.getElementById("moreBreeds").innerHTML = results;
  });
}


getFirstFact();
getCatFacts();
getCatBreeds();
