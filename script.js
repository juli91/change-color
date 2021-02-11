const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const newColors = [
    [
        ['#ff0000', '#ff3376'],
        ['#ff7a7a', '#ffc0cb', '#b19cd9'],
        ['#8b0000', '#d11d53'],
    ], 
    [
        ['#0000ff', '#00ee00'],
        ['#bfefff', '#00ff7f'],
        ['#00008b', '#228b22'],
    ]
];


colorBtn.addEventListener('click', changeColor);

function changeColor() {
    const firstOrSecond = Math.floor(Math.random()*newColors.length);
    const primarySet = Math.floor(Math.random()*newColors[firstOrSecond].length);
    const finalColor = Math.floor(Math.random()*newColors[firstOrSecond][primarySet].length) 
    bodyBcg.style.backgroundColor = newColors[firstOrSecond][primarySet][finalColor];
}