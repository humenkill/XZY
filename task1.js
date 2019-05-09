let boxs = document.getElementsByClassName("box");



//随机颜色
function randomcolor() {

    return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
}


function StartFlash() {
    let newboxs = [0,1,2,3,4,5,6,7,8];
    let m = newboxs.length,
        temp,
        a;
    while(m)
    {
        a = Math.floor(Math.random()*m--);
        temp = newboxs[m];
        newboxs[m] = newboxs[a];
        newboxs[a] = temp;
    }
    for (let i = 0;i<9;i++)
    {
        boxs[i].style.backgroundColor = "orange";
    }
    for (let i=0;i<3;i++)
    {
        boxs[newboxs[i]].style.backgroundColor = randomcolor();
    }

}

let z;
let start = function()
{
    clearInterval(z);

    z = setInterval(StartFlash,1000);

};


function ReSet() {
    clearInterval(z);
    for (let i = 0;i<9;i++)
    {
        boxs[i].style.backgroundColor = "orange";
    }
}
