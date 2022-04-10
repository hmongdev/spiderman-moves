// -------------------- punch -------------------- 
const punches = ["images/punch-low.gif", "images/punch-mid.gif", "images/punch-high.gif"];
const numPunches = punches.length;

//HERE: not cycling through punches array
var punchButton = document.querySelector('#punch').addEventListener('click', function () {
    for (i = 0; i < numPunches; i++) {
        document.querySelector('img').setAttribute('src', punches[i]);
    }
});