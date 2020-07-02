const md5 = require('md5-nodejs');
let input1 = document.getElementById('firstSection').textContent();
console.log(inpout1);



function orderKey() {
    Object.keys(input).sort().forEach(key => {
        ordered[key] = input[key];
    });
    console.log(JSON.stringify(ordered));
}

function combine() {
    for (k in ordered) {
        stringed = stringed + k + '=' + ordered[k] + '&';
    }
    stringed = stringed + "key=jR84LUKAGSuiI2OC9ppeoiIlEb6lGeJM";
}

function runIt() {
    md5(stringed).toUpperCase()
}




var ordered = {};
var stringed = "";

function sortOut(input) {
    Object.keys(input).sort().forEach(key => {
        ordered[key] = input[key];
    });
    console.log(JSON.stringify(ordered));
    for (k in ordered) {
        stringed = stringed + k + '=' + ordered[k] + '&';
    }
    stringed = stringed + "key=jR84LUKAGSuiI2OC9ppeoiIlEb6lGeJM";
}

var oClose = {
    appid: "ww5e273d993db00f8c",
    mch_id: "1521538731",
    nonce_str: "4ca93f17ddf3443ceabf72f26d64fe0e",
    out_trade_no: "1415659990",
}



sortOut(oClose);


console.log(stringed);

const hash = md5(stringed).toUpperCase();
console.log(hash);