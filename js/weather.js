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

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        // hash: true,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-98.4936, 29.4241],
        zoom: 9
    });

    var marker = new mapboxgl.Marker({
        draggable: false
    })
        // .setlnglat([-98.4936, 29.4241])
        .addTo(map);

    var lngLat = marker.getLngLat();
    console.log(lngLat);

    map.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker:true
        }).on('result',function(data){
            console.log(data);
            marker.setLngLat(data.result.center);
            console.log(data.result.center);
            onDragEnd();
        })
    );



    function onDragEnd() {
        console.log(lngLat);
        return lngLat;
    }

    marker.on('dragend', onDragEnd);

    dailyInfo();

    function dailyInfo() {

        // ALL WEATHER DATA ADDED TO HTML LIVES HERE

    }
    dailyInfo ();











});