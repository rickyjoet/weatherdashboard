function inputSearch () {
    // var city  = document.getElementById("searchbox").value;
    var city  = document.querySelector('#searchbox').value;
    var lat;  
    var lon; 
    var currentTemp;
    var currentWind;
    var currentHumidty;
    var currentUvi;
    // console.log(city);
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&&appid=c55fea575b010c6f9a308291c0d31def&`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // console.log(data.city.coord.lat);
        // console.log(data.city.coord.lon);
        lat= data.city.coord.lat;
        lon= data.city.coord.lon;
        // console.log(data.list[2].main.temp);
        // console.log(data.list[0]);
        // console.log(data.list[10]);
        // console.log(data.list[18]);
        // console.log(data.list[26]);
        // console.log(data.list[34]);
        
        // to do - use list [0] for todays temp

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=c55fea575b010c6f9a308291c0d31def&`)
        .then(response => response.json())
        .then(data => {console.log(data)
        console.log(data.current.uvi);
        console.log(data.current.humidity);
        console.log(data.current.temp);
        console.log(data.current.wind_speed);

        currentTemp = data.current.temp;
        currentWind = data.current.wind_speed;
        currentHumidty = data.current.humidity;
        currentUvi = data.current.uvi;
        
        console.log(currentTemp);
        document.getElementById('temp').innerText = "temp: " + currentTemp + " ℉";
        console.log(currentTemp);
        document.getElementById('temp').innerText = "temp: " + currentTemp + " ℉";
        console.log(currentTemp);
        document.getElementById('temp').innerText = "temp: " + currentTemp + " ℉";
        console.log(currentTemp);
        document.getElementById('temp').innerText = "temp: " + currentTemp + " ℉";
        console.log(currentTemp);
        document.getElementById('temp').innerText = "temp: " + currentTemp + " ℉";

    });
        
        
        
        
        
        var weather = [data.list[0], data.list[2], data.list[10], data.list[18], data.list[26], data.list[34]]
        for (i= 0; i < weather.length; i++){
            // console.log(weather[i])
            var date = weather[i].dt_txt;
            // console.log(date);
            date = new Date(date).toDateString();
            // console.log(date)
            
            var temp = weather[i].main.temp;
           
            
            var wind = weather[i].wind.speed;
            // console.log(wind);
            // document.getElementById('wind').innerText = wind + " mph";
            
            var humidity = weather[i].main.humidity;
            // console.log(humidity);
            // document.getElementById('humidity').innerText = humidity + "%";
            
            if (i == 0) {
                document.getElementById('day1').innerText = date + " temp: " + temp + " wind: " + wind + " mph " + " humidity: " + humidity + "%";  
            } else if (i==1) {
                document.getElementById('day2').innerText = date + " temp: " + temp + " wind: " + wind + " mph " + " humidity: " + humidity + "%";  
            } else if (i==2) {
                document.getElementById('day3').innerText = date + " temp: " + temp + " wind: " + wind + " mph " + " humidity: " + humidity + "%";  
            } else if (i==3) {
                document.getElementById('day4').innerText = date + " temp: " + temp + " wind: " + wind + " mph " + " humidity: " + humidity + "%";  
            } else if (i==4) {
                document.getElementById('day5').innerText = date + " temp: " + temp + " wind: " + wind + " mph " + " humidity: " + humidity + "%";  
            }
        }
        
        
        
        // api openweather app changed finding uvi
        
        
        
    });

  

}
 


var time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date);
document.getElementById('date').innerText = time;