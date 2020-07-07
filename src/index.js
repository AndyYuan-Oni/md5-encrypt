var rowNum, ifOrder, input1, inputEnd
var setBtn = document.getElementById('formGene');
var generateBtn = document.getElementById('generate');
var clearBtn = document.getElementById('clear');
var copyBtn = document.getElementById('copy');
var display = document.getElementById("addon");
var input1 = '';
var inputKv = '';
var input2 = '';
var output = document.getElementById('output');
var inMap = new Object();
var order = document.getElementById('Check1');
var stringed;

setBtn.addEventListener('click', function() {
    var kvTag = "";
    rowNum = Number(document.getElementById("genePair").value);
    for (var i = 1; i <= rowNum; i++) {
        kvTag = kvTag + '<div class="form-row" id="row' + i + '"><input type="text " class="form-control col" id="key' + i + '" placeholder="key" /><input type="text " class="form-control col" id="value' + i + '" placeholder="value" /></div>'
    }
    console.log(kvTag);
    console.log(display);
    display.innerHTML = kvTag;
});

clearBtn.addEventListener('click', function() {
    display.innerHTML = '';
    input1.value = '';
    input2.value = '';
    output.value = '';
});

generateBtn.addEventListener('click', function() {
    getInput();
    runIt(stringed)
})

copyBtn.addEventListener('click', function() {
    output.select();
    document.execCommand('copy');
})

function getInput() {
    var kid = document.getElementById(`addon`).children;
    for (var j = 0; j < kid.length; j++) {
        var key = kid[j].children[0].value;
        var value = kid[j].children[1].value;
        inMap[key] = value;
    }
    input1 = document.getElementById('firstSection').value;
    input2 = document.getElementById('secondSection').value;
    if (order.checked) {
        inMap = orderKey(inMap)
    }
    inputKv = combine(inMap);
    stringed = input1 + inputKv + input2;
    console.log(stringed);
}

function orderKey(input) {
    var ordered = {};
    Object.keys(input).sort().forEach(key => {
        ordered[key] = input[key];
    });
    console.log(JSON.stringify(ordered));
    return ordered
}

function combine(ordered) {
    var temp = '';
    for (k in ordered) {
        temp = temp + k + '=' + ordered[k] + '&';
    }
    return temp.substring(0, temp.length - 1);
}

function runIt(input) {
    output.value = md5(input).toUpperCase();
    console.log(output);
}