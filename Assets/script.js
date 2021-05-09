document.querySelector("#search-btn").addEventListener("click", function(event) {
    console.log("click")
    var query = "https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=c55fea575b010c6f9a308291c0d31def&"
}) 

fetch('https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=c55fea575b010c6f9a308291c0d31def&')
  .then(response => response.json())
  .then(data => console.log(data));

