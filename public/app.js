const MAPBOX_PUBLIC_KEY = "pk.eyJ1IjoiZGF2aWR3ZWlzc2NvZGUiLCJhIjoiY2p3a3Vpb3p2MHQ2MTN6bjB0ZmZkaWlwcyJ9.cbLzpaovquUhK_TDYFfA3A";
const KA_POS = {lon: 49.0092, lat: 8.4106};

// https://stackoverflow.com/questions/48535822/es6-module-uncaught-referenceerror-function-is-not-defined-at-htmlbuttonelemen?rq=1
async function explore() {
    const response = await fetch("/explore");
    console.log(response);
    const data = await response.text();
    console.log("[C] Response from server is", data);

    let marker = L.marker([KA_POS.lon, KA_POS.lat]).addTo(map); // https://leafletjs.com/examples/custom-icons/

    let range = L.circle([KA_POS.lon, KA_POS.lat], {
        color: '#6eb210',
        fillColor: '#6eb210',
        fillOpacity: 0.2,
        radius: document.getElementById("totalTimeInput").value * 0.6 * 60
    }).addTo(map);
}

let map = L.map("map").setView([KA_POS.lon, KA_POS.lat], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: MAPBOX_PUBLIC_KEY,
}).addTo(map);
