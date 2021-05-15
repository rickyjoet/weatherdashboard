function inputSearch () {
    var city  = document.getElementById("searchbox").value;
    console.log(city);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&current.uvi&units=imperial&appid=c55fea575b010c6f9a308291c0d31def&`)
    .then(response => response.json())
    .then(data => console.log(data));
    // api openweather app changed finding uvi 

}



