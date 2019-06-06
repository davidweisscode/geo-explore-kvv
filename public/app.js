import * as constants from "./config.js";

const KA_POS = {
    lon: 49.0092,
    lat: 8.4106
}

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
        radius: document.getElementById("totaltime_input").value * 0.6 * 60
    }).addTo(map);

}

let map = L.map("map").setView([KA_POS.lon, KA_POS.lat], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: constants.MAXBOX_KEY
}).addTo(map);
