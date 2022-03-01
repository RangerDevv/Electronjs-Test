const button = document.getElementById('count');

let count = 0;

function handleClick() {
    button.innerHTML = `Clicked ${++count} times`;
    }