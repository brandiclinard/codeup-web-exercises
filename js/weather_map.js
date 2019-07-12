$(document).ready(function(){
    'use strict';

function updatePage(){
   var jqxhr = $.getJSON(("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936"), function(){
       console.log( "success" );
   });
       jqxhr.done(function() {
           console.log(jqxhr);
       })
       .fail(function() {
           alert( "error" );
       })
       .always(function() {
           console.log( "finished" );
       });
}

updatePage();



    $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
        $( "#today" )
            // .append("<p> Date:" + new Date(data.daily.data[0].time * 1000) + "</p>")// date
            .append('<p>' + data.daily.data[0].summary + '</p>') //summary
            .append("<p>" + (Math.round(data.daily.data[0].temperatureMax)) + "/" + (Math.round(data.daily.data[0].temperatureMin)) + "</p>")//temp
            .append('<p>' + Math.round((data.daily.data[0].precipProbability) * 100) + '% chance of ' + data.daily.data[0].precipType + '.</p>')// precip type and percent
            .append('<p> Winds at ' + Math.round(data.daily.data[0].windSpeed) + ' kph </p>')
    }, "json" );

    $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
        $( "#tomorrow" )
            // .append("<p> Date:" + new Date(data.daily.data[1].time * 1000) + "</p>")// date
            .append('<p>' + data.daily.data[1].summary + '</p>') //summary
            .append("<p>" + (Math.round(data.daily.data[1].temperatureMax)) + "/" + (Math.round(data.daily.data[1].temperatureMin)) + " </p>")//temp
            .append('<p>' + Math.round((data.daily.data[1].precipProbability) * 100) + '% chance of ' + data.daily.data[1].precipType + '.</p>')// precip type and percent
            .append('<p> Winds at ' + Math.round(data.daily.data[1].windSpeed) + ' kph </p>')
    }, "json" );

    $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
        $( "#future" )
            // .append("<p> Date:" + new Date(data.daily.data[2].time * 1000) + "</p>")// date
            .append('<p>' + data.daily.data[2].summary + '</p>') //summary
            .append("<p>" + (Math.round(data.daily.data[2].temperatureMax)) + "/" + (Math.round(data.daily.data[2].temperatureMin)) + " </p>")//temp
            .append('<p>' + Math.round((data.daily.data[2].precipProbability) * 100) + '% chance of ' + data.daily.data[2].precipType + '.</p>')// precip type and percent
            .append('<p> Winds at ' + Math.round(data.daily.data[2].windSpeed) + ' kph </p>')
    }, "json" );


    var weatherArray = [
        {status: "clear-day", image: 'icon/clearDay.png'},
        {status: "clear-night", image: 'icon/clearNight.ico'},
        {status: "rain", image:'icon/rain.png'},
        {status: "snow", image:'icon/snow.png'},
        {status: "sleet", image:'icon/sleet.ico'},
        {status: "wind", image:'icon/wind.png'},
        {status: "fog", image: 'icon/fog.png'},
        {status: "cloudy", image: 'icon/cloudy.ico'},
        {status: "partly-cloudy-day", image:'icon/partlyCloudyDay.png'},
        {status: "partly-cloudy-night", image:'icon/partlyCloudyNight.png'}
    ];

    console.log(weatherArray[0].status);


     function icon0 () {
        $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
                var result = 0;
                var newArray = [];
                var weather = String(data.daily.data[0].icon);
                console.log(weather);
                newArray = weatherArray.map(function(obj){
                    return obj.status
                });
                console.log(newArray);
                var condition = Number(newArray.indexOf(weather));
                console.log(condition);
                // result = weatherArray[condtion].image;
                // console.log(result);
                var imageArray = [];
                imageArray = weatherArray.map(function(obj){
                    return obj.image;
                });
                console.log(imageArray);
                result = imageArray[condition];
                console.log(result);

            $( "#today" )
            .append('<p><img class="responsive-img" src="' + result + '"></p>')

        }, "json");
    };
    icon0();

    function icon1 () {
        $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
            var result = 0;
            var newArray = [];
            var weather = String(data.daily.data[1].icon);
            console.log(weather);
            newArray = weatherArray.map(function(obj){
                return obj.status
            });
            console.log(newArray);
            var condition = Number(newArray.indexOf(weather));
            console.log(condition);
            // result = weatherArray[condtion].image;
            // console.log(result);
            var imageArray = [];
            imageArray = weatherArray.map(function(obj){
                return obj.image;
            });
            console.log(imageArray);
            result = imageArray[condition];
            console.log(result);

            $( "#tomorrow" )
                .append('<p><img class="responsive-img" src="' + result + '"></p>')

        }, "json");
    };
    icon1();

    function icon2 () {
        $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
            var result = 0;
            var newArray = [];
            var weather = String(data.daily.data[2].icon);
            console.log(weather);
            newArray = weatherArray.map(function(obj){
                return obj.status
            });
            console.log(newArray);
            var condition = Number(newArray.indexOf(weather));
            console.log(condition);
            // result = weatherArray[condtion].image;
            // console.log(result);
            var imageArray = [];
            imageArray = weatherArray.map(function(obj){
                return obj.image;
            });
            console.log(imageArray);
            result = imageArray[condition];
            console.log(result);

            $( "#future" )
                .append('<p><img class="responsive-img" src="' + result + '"></p>')

        }, "json");
    }

    icon2();

    // var latInput = $("#lat").val();
    //
    // var longInput = $('#long').val();



    // function search (e) {
    //     e.preventDefault();
    //     console.log('yay');
    //     console.log(latInput);
    //     console.log(longInput);
    // }

  $('#submit').click(function search (e) {
        e.preventDefault();
      var latInput = $("#lat").val();
      var longInput = $('#long').val();
      $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latInput + "," + longInput, function( data ) {
          console.log('yay');
          console.log(latInput);
          console.log(longInput);
          console.log(data);
      });
    });




// function todayMakeHTML(today){
//     var todayHTML = '';
//     var dateObject = new Date(data.currently.time * 1000);//alter index to get dates for next three days
//     console.log(dateObject);
//     var windObject = data.daily.data;//alter index
//     console.log(windObject);
//     var tempObject = (Math.round(data.daily.data[0].temperatureMax)) + "℉/" + (Math.round(data.daily.data[0].temperatureMin)) + "℉";//alter index
//     console.log(tempObject);
//     var summaryObject = data.daily.data[0].summary;// alter index-- key words to trigger icons
//     console.log(summaryObject);
//     var precepObject = ((data.daily.data[0].precipProbability) * 100) + '% chance of ' + data.daily.data[0].precipType + '.';
//     console.log(precepObject);
//
//     for(var i = 0; today === 0;){
//     todayHTML += '<div>';
//     todayHTML += '<h3>' + dateObject + '</h3>';
//     todayHTML +=
//     todayHTML += '</div>';
//     }
//     return todayHTML;
// }



// $('#today').click(updatePage);











});