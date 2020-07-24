$(document).ready(function() {

    $("#search").on("click", function(event) {
        event.preventDefault();
   $(".card").show();
    $("#five-day-forecast").show();


        //var cityName = "atlanta";
        var cityName = $("#city").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=2360f9b77906436bc0a543ab31fd9421";
        //var queryUV = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + coordLat + "&lon=" + coordLon + "&appid=2360f9b77906436bc0a543ab31fd9421";
        var queryFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=2360f9b77906436bc0a543ab31fd9421";
        console.log(cityName);
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(response) {
            console.log(response);
            //console.log(queryURL);
            var tempK = (response.main.temp);
            var tempF = (tempK - 273.15) * 9 / 5 + 32;
            var tempFixed = tempF.toFixed(2);
            var coordLat = response.coord.lat;
            var coordLon = response.coord.lon;
            console.log(tempK);
            console.log(tempF);
            console.log(tempFixed);
            //console.log(coordLat);
            //console.log(coordLon);
            //return tempFixed;
            //return coordLat;
            //return coordLon;
            $(".city").text("City: " + cityName);
            $(".temp").text("Temperature: " + tempFixed + " °F");
            //$(".temp").text("Temperature: ");
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".wind").text("Wind Speed : " + response.wind.speed);
            var queryUV = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + coordLat + "&lon=" + coordLon + "&appid=2360f9b77906436bc0a543ab31fd9421";
            $.ajax({
                url: queryUV,
                method: "GET"
            })
            .then(function(uvInfo) {
                console.log(uvInfo.value);
                var uvIndex = uvInfo.value;
                //return uvIndex;
                $(".uv").text("UV Index: " + uvIndex);
            })
        });
        
        $.ajax({
            url: queryFiveDay,
            method: "GET"
        })
        
        .then(function(response) {
            console.log(response);
            console.log(response.list[0].weather[0].icon);
            console.log(response.list[0].dt_txt);
            console.log(response.list[0].main.temp);
            console.log(response.list[0].main.humidity);
            var dateOne = (response.list[0].dt_txt);
            var dateOneTempF = (response.list[0].main.temp - 273.15) * 9 / 5 + 32;
            console.log(dateOneTempF);
            var dateOneTempFixed = dateOneTempF.toFixed(2);
            console.log(dateOneTempFixed);
            var dateOneHumidity = (response.list[0].main.humidity);
            var dateOneIcon = (response.list[0].weather[0].icon);
            
            var dateTwo = (response.list[1].dt_txt);
            var dateTwoTempF = (response.list[1].main.temp - 273.15) * 9 / 5 + 32;
            var dateTwoHumidity = (response.list[1].main.humidity);
            var dateTwoIcon = (response.list[1].weather[0].icon);
            console.log(dateTwoIcon);

            var dateThree = (response.list[2].dt_txt);
            var dateThreeTempF = (response.list[2].main.temp - 273.15) * 9 / 5 + 32;
            var dateThreeHumidity = (response.list[2].main.humidity);
            var dateThreeIcon = (response.list[2].weather[0].icon);
            
            var dateFour = (response.list[3].dt_txt);
            var dateFourTempF = (response.list[3].main.temp - 273.15) * 9 / 5 + 32;
            var dateFourHumidity = (response.list[3].main.humidity);
            var dateFourIcon = (response.list[3].weather[0].icon);
            
            var dateFive = (response.list[4].dt_txt);
            var dateFiveTempF = (response.list[4].main.temp - 273.15) * 9 / 5 + 32;
            var dateFiveHumidity = (response.list[4].main.humidity);
            var dateFiveIcon = (response.list[4].weather[0].icon);

            $("<p>" + dateOne + "</p>").add($("<img src=http://openweathermap.org/img/wn/" + dateOneIcon + ".png>")).add($("<p>" + dateOneTempF.toFixed(2) + "</p>")).add($("<p>" + dateOneHumidity + "</p>")).appendTo($("#day1"));
            //$("#day1").html("<p>" + dateOne + "</p>");
            //$("#day2").text(dateTwo + dateTwoTempFixed + dateTwoHumidity);
            $("<p>" + dateTwo + "</p>").add($("<img src=http://openweathermap.org/img/wn/" + dateTwoIcon + ".png>")).add($("<p>" + dateTwoTempF.toFixed(2) + "</p>")).add($("<p>" + dateTwoHumidity + "</p>")).appendTo($("#day2"));
            $("<p>" + dateThree + "</p>").add($("<img src=http://openweathermap.org/img/wn/" + dateThreeIcon + ".png>")).add($("<p>" + dateThreeTempF.toFixed(2) + "</p>")).add($("<p>" + dateThreeHumidity + "</p>")).appendTo($("#day3"));
            $("<p>" + dateFour + "</p>").add($("<img src=http://openweathermap.org/img/wn/" + dateFourIcon + ".png>")).add($("<p>" + dateFourTempF.toFixed(2) + "</p>")).add($("<p>" + dateFourHumidity + "</p>")).appendTo($("#day4"));
            $("<p>" + dateFive + "</p>").add($("<img src=http://openweathermap.org/img/wn/" + dateFiveIcon + ".png>")).add($("<p>" + dateFiveTempF.toFixed(2) + "</p>")).add($("<p>" + dateFiveHumidity + "</p>")).appendTo($("#day5"));
        })
})


})