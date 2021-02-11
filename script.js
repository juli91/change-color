const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const newColors = [
    ['yellow', '#ffff4d', '#ffd500'], 
    ['red', '#ff4d4d', '#800000'], 
    ['blue', '#add8e6', '#0000b3']
]


colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let primaryColor = Math.floor(Math.random()*newColors.length);
    let randomColor = Math.floor(Math.random()*newColors[primaryColor].length);
    bodyBcg.style.backgroundColor = newColors[primaryColor][randomColor];
}