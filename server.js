const express = require("exress");
const path = require("path");
const md5 = require("md5-nodejs");
const app = express();

app.use(epxress.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log('app listening at http;//localhost:5000');
});