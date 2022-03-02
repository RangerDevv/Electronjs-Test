const click = document.getElementById('click');
let count = 0;

function handleClick() {
    click.innerHTML = `Clicked ${++count} times`;
}