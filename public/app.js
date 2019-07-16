const MAPBOX_PUBLIC_KEY = "pk.eyJ1IjoiZGF2aWR3ZWlzc2NvZGUiLCJhIjoiY2p3a3Vpb3p2MHQ2MTN6bjB0ZmZkaWlwcyJ9.cbLzpaovquUhK_TDYFfA3A";
const KA_POS = {lon: 49.0092, lat: 8.4106};

async function explore() {
    const response = await fetch("/explore?"
        + "time=" + document.getElementById("timeInput").value
        + "&lon=" + KA_POS.lon
        + "&lat=" + KA_POS.lat);
    const jsonString = await response.text();
    const exploreData = await JSON.parse(jsonString);
    console.log("[C] Response from server is", exploreData);

    exploreData.stations.forEach(station => {
        L.marker([station.lon, station.lat]).addTo(map);
    });

    // Get a list with all stations within start circle

    // Endpoint /explore?time=60&lon=1&lat=2


}

let map = L.map("map").setView([KA_POS.lon, KA_POS.lat], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: MAPBOX_PUBLIC_KEY,
}).addTo(map);

let startMarker = L.marker([KA_POS.lon, KA_POS.lat]).addTo(map); //TODO: https://leafletjs.com/examples/custom-icons/

let startRange = L.circle([KA_POS.lon, KA_POS.lat], {
    color: '#6eb210',
    fillColor: '#6eb210',
    fillOpacity: 0.2,
    radius: document.getElementById("timeInput").value * 0.6 * 60
}).addTo(map);
