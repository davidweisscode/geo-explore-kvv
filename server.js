const express = require("express");
const server = express();
const port = 8000;
require("dotenv").config();

//console.log(process.env.KVV_KEY);

server.use(express.static("public"));

server.listen(port, () => {
    console.log(`[S] Listening on port ${port}`);
});

server.get("/explore", async (request, response) => {
    console.log("[S] GET received", request.query);
    let stations = await getStations(); // Wait for time consuming 3rd party server request
    response.json({
        status: "OK",
        msg: "Server says hello!",
        stations: stations, 
    });
});

function getStations() {
    setTimeout(function() {
        return dummyStations
    }, 1000);
}

let dummyStations = [
    {lon: 49.0092, lat: 8.4106},
    {lon: 49.0094, lat: 8.4106},
    {lon: 49.0099, lat: 8.4106}
];
