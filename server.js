const express = require("express");
const server = express();
const port = 8000;
require("dotenv").config();

//console.log(process.env.KVV_KEY);

server.use(express.static("public"));

server.listen(port, () => {
    console.log(`[S] Listening on port ${port}`); // Use backtick for template literals
});

server.get("/explore", (request, response) => {
    console.log("[S] GET received");
    // response.json({
    //     status: "OK",
    //     msg: "Server says hello!"
    // });
    response.send("Server says huhu");
});
