const express = require('express');
const https = require('https');
const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=9bccf81d8a364e8b238757191da30290";
    https.get(url, function (response) {
        console.log(response);
    });
})


app.listen(3000, function () {
    console.log("This server is running in port 3000");
});