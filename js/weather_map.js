$(document).ready(function(){
    'use strict';


    //--MAPBOX--


    // mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRpY2xpbmFyZCIsImEiOiJjanhhcjFwc2MwMDdwM3lwZ2JkbnBqZ3lqIn0.RJJQ6f2engCbvMUZARCFfg';
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        maxZoom: 5.99,
        minZoom: 4,
        zoom: 5,
        center: [-75.789, 41.874]
    });

    var frameCount = 5;
    var currentImage = 0;

    function getPath() {
        return "https://docs.mapbox.com/mapbox-gl-js/assets/radar" + currentImage + ".gif";
    }

    map.on('load', function() {

        map.addSource("radar", {
            type: "image",
            url: getPath(),
            coordinates: [
                [-80.425, 46.437],
                [-71.516, 46.437],
                [-71.516, 37.936],
                [-80.425, 37.936]
            ]
        });
        map.addLayer({
            id: "radar-layer",
            "type": "raster",
            "source": "radar",
            "paint": {
                "raster-fade-duration": 0
            }
        });

        setInterval(function() {
            currentImage = (currentImage + 1) % frameCount;
            map.getSource("radar").updateImage({ url: getPath() });
        }, 200);
    });

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        // placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
        // bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
        // proximity: {
        //     longitude: -122.25948,
        //     latitude: 37.87221
        // } // Coordinates of UC Berkeley
    });

    geocoder.on('result', function(ev) {
        map.getSource('single-point').setData(ev.result.geometry);
        var geoLat =  ev.result.geometry.coordinates[1];
        var geoLong = ev.result.geometry.coordinates[0];
        console.log(geoLat, geoLong);

        // var marker = new mapboxgl.Marker() // Initialize a new marker
    //     .setLngLat([geoLong, geoLat]) // Marker [lng, lat] coordinates
    //     .addTo(map); // Add the marker to the map

        $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + geoLat + "," + geoLong , function( data ) {
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












    });

    // var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    //     accessToken: mapboxgl.accessToken, // Set the access token
    //     mapboxgl: mapboxgl, // Set the mapbox-gl instance
    //     marker: false, // Do not use the default marker style
    //     // placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
    //     // bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
    //     // proximity: {
    //     //     longitude: -122.25948,
    //     //     latitude: 37.87221
    //     // } // Coordinates of UC Berkeley
    // });

    // Add the geocoder to the map
    map.addControl(geocoder);

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on('load', function() {
        map.addSource('single-point', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        });

        map.addLayer({
            id: 'point',
            source: 'single-point',
            type: 'circle',
            paint: {
                'circle-radius': 10,
                'circle-color': '#448ee4'
            }
        });

        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        // Add a marker at the result's coordinates
        geocoder.on('result', function(ev) {
            map.getSource('single-point').setData(ev.result.geometry);
            var geoLat =  ev.result.geometry.coordinates[1];
            var geoLong = ev.result.geometry.coordinates[0];
        });
    });

//    --WEATHER--

    // function updatePage(){
    //     var jqxhr = $.getJSON(("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936"), function(){
    //         console.log( "success" );
    //     });
    //     jqxhr.done(function() {
    //         console.log(jqxhr);
    //     })
    //         .fail(function() {
    //             alert( "error" );
    //         })
    //         .always(function() {
    //             console.log( "finished" );
    //         });
    // }
    //
    // updatePage();



    // $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/29.4241,-98.4936", function( data ) {
    //     $( "#today" )
    //     // .append("<p> Date:" + new Date(data.daily.data[0].time * 1000) + "</p>")// date
    //         .append('<p>' + data.daily.data[0].summary + '</p>') //summary
    //         .append("<p>" + (Math.round(data.daily.data[0].temperatureMax)) + "/" + (Math.round(data.daily.data[0].temperatureMin)) + "</p>")//temp
    //         .append('<p>' + Math.round((data.daily.data[0].precipProbability) * 100) + '% chance of ' + data.daily.data[0].precipType + '.</p>')// precip type and percent
    //         .append('<p> Winds at ' + Math.round(data.daily.data[0].windSpeed) + ' kph </p>')
    // }, "json" );

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

    // $('#submit').click(function search (e) {
    //       e.preventDefault();
    //     var latInput = $("#lat").val();
    //     var longInput = $('#long').val();
    //     $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latInput + "," + longInput, function( data ) {
    //         console.log('yay');
    //         console.log(latInput);
    //         console.log(longInput);
    //         console.log(data);
    //         console.log(data.daily.data);
    //     });
    //   });

    $('#submit').click(function search (e) {
        e.preventDefault();
        var latInput = $("#lat").val();
        var longInput = $('#long').val();

        $.get( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latInput + "," + longInput, function( data ) {
            var newresult = 0;
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
            newresult = imageArray[condition];
            console.log(newresult);

            $( "#future" )
                .replace(result, newresult);

        }, "json");
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