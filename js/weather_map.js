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
            for (i = 0; i <= 4; i++) {
                html += '<div class="weather card mx-3 my-3">';
                html += '<div class="card-header">';
                html += '<h4> Date:' + (new Date(data.daily.data[i].time * 1000).getMonth() + 1) + '/' + (new Date(data.daily.data[i].time * 1000)).getDate() + '/' + new Date(data.daily.data[i].time * 1000).getFullYear() + '</h4>';
                html += '</div>';
                html += '<div class="card-body" id="daily">';
                html += '<h3 class = "card-title">' + (Math.round(data.daily.data[i].temperatureMax)) + "/" + (Math.round(data.daily.data[i].temperatureMin)) + '</h3>';
                html += '<h5 class = "card-text">' + Math.round((data.daily.data[i].precipProbability) * 100) + '% chance of ' + data.daily.data[i].precipType + '</h5>';
                html += '<h5 class = "card-text">Winds at ' + Math.round(data.daily.data[i].windSpeed) + ' MPH </h5>';
                html += '<div class="text-center">';
                html += '<img class="img-fluid" src="' + findImage(weatherArray) + '" alt="icon">';
                html += '</div>';
                html += '</div>';
                html += '</div>';

            }
            return html
        }

        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + '29.4241' + "," + '-98.4936', {
            daily: {
                data: {
                    temperatureMax: "",
                    temperatureMin: "",
                    precipProbability: "",
                    precipType: "",
                    windSpeed: ""
                }
            }
        }).done(function (data) {

            console.log(data);
            $('#today').html(posts(data));
        });



        map.addSource("radar", {
            type: "image",
            url: getPath(),
            coordinates: [
                [-104.8984452, 38.875868 ],
                [-90.393898, 38.875868 ],
                [-90.393898, 24.838930],
                [-104.8984452, 24.838930]
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
        }, 1000);
    });



    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: // Do not use the default marker style
            {
                draggable: true
            }

    });





    geocoder.on('result', function(ev) {// change the result to san antonio texas to hard code in start point// re do the geocoder.on to repopulate searched results
        map.getSource('single-point').setData(ev.result.geometry);
        var geoLat =  ev.result.geometry.coordinates[1];
        var geoLong = ev.result.geometry.coordinates[0];
        console.log(geoLat, geoLong);


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
                for (i = 0; i <= 4; i++) {
                    html += '<div class="weather card mx-3 my-3">';
                    html += '<div class="card-header">';
                    html += '<h4> Date:' + (new Date(data.daily.data[i].time * 1000).getMonth() + 1) + '/' + (new Date(data.daily.data[i].time * 1000)).getDate() + '/' + new Date(data.daily.data[i].time * 1000).getFullYear() + '</h4>';
                    html += '</div>';
                    html += '<div class="card-body" id="daily">';
                    html += '<h3 class = "card-title">' + (Math.round(data.daily.data[i].temperatureMax)) + "/" + (Math.round(data.daily.data[i].temperatureMin)) + '</h3>';
                    html += '<h5 class = "card-text">' + Math.round((data.daily.data[i].precipProbability) * 100) + '% chance of ' + data.daily.data[i].precipType + '</h5>';
                    html += '<h5 class = "card-text">Winds at ' + Math.round(data.daily.data[i].windSpeed) + ' MPH </h5>';
                    html += '<div class="text-center">';
                    html += '<img class="img-fluid" src="' + findImage(weatherArray) + '" alt="icon">';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
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
    });

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);



});