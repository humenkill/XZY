var boxs = document.getElementsByClassName("box");

function getRandomInt() {

    return Math.floor((Math.random() * 9));
}

function getRandomColor() {
    return 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}


function starflash() {

    for (let i = 0; i < 3; i++) {
        boxs[getRandomInt()].style.backgroundColor = getRandomColor();
    }

}
var interval;
function AutoFlish() {
    clearInterval(interval);
     interval = setInterval(starflash, 2000);
}

function ReSet() {
    clearInterval(interval);
    for (let i = 0; i <= boxs.length; i++) {
        boxs[i].style.backgroundColor = "orange";
    }

}


