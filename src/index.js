var rowNum, ifOrder, input1, inputEnd
var setBtn = document.getElementById('formGene');
var generateBtn = document.getElementById('formGene');
var clearBtn = document.getElementById('clear');
var copyBtn = document.getElementById('copy');
var display = document.getElementById("addon");
var input1 = document.getElementById('firstSection');
var input2 = document.getElementById('secondSection');
var output = document.getElementById('output');
var order = false;
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

})

function md5Gene() {

}