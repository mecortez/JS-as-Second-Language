const pics = [ 
    './img/0.jpg', './img/1.jpg',
    './img/2.jpg', './img/3.jpg',
    './img/4.jpg', './img/5.jpg',
];

const button = document.querySelector('#switchBtn');
const pic = document.querySelector('#pic');

button.addEventListener('click', () => getLhama(), false);

function getLhama(lhamaId) {
    lhamaId = lhamaId ?? // Nullish Coalescing operator
     Math.floor(Math.random()* pics.length);

    document.querySelector('#pic').src = pics[lhamaId];
}

getLhama(0);

/*
    ----  Nullish Coalescing operator  ----
    (Operador de coalescência nula)

    Is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

    Retorna se o valor da função for null ou undefined, se for 0, não retorna falso (como no caso de || ) e sim a primeira lhama.
*/