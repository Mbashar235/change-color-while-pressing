let grnd = document.querySelector('#ground');
let change = document.querySelector('#btn-1');
let reset = document.querySelector('#btn-2');
function dab(){
    let color = ['red', 'yellow', 'black', 'blue'];
    let rand = Math.round(Math.random() * color.length);
    grnd.style.backgroundColor = color[rand];
}
function rib(){
    grnd.style.backgroundColor = '';
}
change.addEventListener('click', dab);
reset.addEventListener('click', rib);
