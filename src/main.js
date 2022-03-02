const button = document.getElementById('button');

let clicks= 0;

function addClick(){
    clicks++;
    button.innerHTML = clicks;
}