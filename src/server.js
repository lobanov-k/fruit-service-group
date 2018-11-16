const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/dist/index.html");
});

app.get("/en/", (request, response) => {
    response.sendFile(__dirname + "/dist/index.html");
});

app.listen(8888, () => {
    console.log("Server running at port 8888: http://127.0.0.1:8888");
});