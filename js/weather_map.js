$(document).ready(function(){
    'use strict';



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


    //--MAPBOX--


    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        maxZoom: 5.99,
        minZoom: 4,
        zoom: 5,
        center: [-98.4936, 29.4241]
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
        marker: false // Do not use the default marker style

    });



    geocoder.on('result', function(ev) {
        map.getSource('single-point').setData(ev.result.geometry);
        var geoLat =  ev.result.geometry.coordinates[1];
        var geoLong = ev.result.geometry.coordinates[0];
        console.log(geoLat, geoLong);

        var marker = new mapboxgl.Marker() // Initialize a new marker
        .setLngLat([geoLong, geoLat]) // Marker [lng, lat] coordinates
        .addTo(map); // Add the marker to the map




        function posts (data) {
            function findImage() {
                var result = 0;
                var newArray = [];
                var weather = String(data.daily.data[0].icon);
                console.log(weather);
                newArray = weatherArray.map(function (obj) {
                    return obj.status
                });
                console.log(newArray);
                var condition = Number(newArray.indexOf(weather));
                console.log(condition);
                var imageArray = [];
                imageArray = weatherArray.map(function (obj) {
                    return obj.image;
                });
                console.log(imageArray);
                result = imageArray[condition];
                console.log(result);
                return result;
            }
            var html = "";
            var i = 0;
                for (i = 0; i <= 2; i++) {
                    html += '<div class="weather card col s4">';
                    html += '<h3> Date:' + (new Date(data.daily.data[i].time * 1000).getMonth() + 1) + '/' + (new Date(data.daily.data[i].time * 1000)).getDate() + '/' + new Date(data.daily.data[i].time * 1000).getFullYear() + '</h3>';
                    html += '<h2>' + (Math.round(data.daily.data[i].temperatureMax)) + "/" + (Math.round(data.daily.data[i].temperatureMin)) + '</h2>';
                    html += '<h4>' + Math.round((data.daily.data[i].precipProbability) * 100) + '% chance of ' + data.daily.data[i].precipType + '</h4>';
                    html += '<h4>Winds at ' + Math.round(data.daily.data[i].windSpeed) + ' MPH </h4>';
                    html += '<img class="responsive-img" src="' + findImage(weatherArray) + '">';
                    html += '</div>'
                }
                return html
        }
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + geoLat + "," + geoLong,{
                daily: {
                    data: {
                        temperatureMax: "",
                        temperatureMin: "",
                        precipProbability: "",
                        precipType: "",
                        windSpeed: ""
                    }
                }
        }).done(function(data) {

            console.log(data);
            $('#today').html(posts(data));
                })
            .fail(function() {
                        alert( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });
    });





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
    })


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












});