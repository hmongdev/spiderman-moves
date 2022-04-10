// -------------------- punch -------------------- 
const punches = ["images/punch-low.gif", "images/punch-mid.gif", "images/punch-high.gif"];
const numPunches = punches.length;

//onlick next image in punches array
function nextPunch() {
    document.querySelector('#punch').addEventListener('click', function () {
        for (i = 0; i < numPunches; i++) {
            document.querySelector('img').setAttribute('src', punches[i]);
        }
    });
}