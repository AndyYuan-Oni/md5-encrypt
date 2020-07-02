const express = require("express");
const path = require("path");
const md5 = require("md5-nodejs");
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => console.log(`App is hosting at http://localhost:${PORT}`))