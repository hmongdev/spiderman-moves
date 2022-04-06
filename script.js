var button_punch = document.getElementById('spiderman');
var punches = ['punch-low.gif', 'punch-medium.gif', 'punch-high.gif'];
var i = 0;

function nextPunch() {
    for (i = 0; i < 3; i++)
        i++;
    return setImg();
}

function setImg() {
    return button_punch.setAttribute('src', 'images/' + punches[i]);
}

function idleImg() {
    document.querySelector('#spiderman').src = 'images/idle.gif';
}