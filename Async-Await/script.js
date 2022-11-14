/* ASYNC/AWAIT BASIC */
// const myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Sucesso');
//     }, 2000);
// });

// async function myAsync() {
//     console.log('antes da promessa');
//     const result = await myPromise;
//     console.log(result);
//     console.log('depois da promessa');
// }

// console.log('antes da função myAsync');
// myAsync();
// console.log('depois da função myAsync');

/*  EXERCISE APP  */

const exercise = [
    'Alongamento', 'Abdominal',
    'Bicicleta', 'Corrida',
    'Meditar'
];

const exerciseBtn = document.querySelector('#button');
const pic = document.querySelector('#pic');

exerciseBtn.addEventListener('click', async () => {
    const myPause = new Promise((resolve) => setTimeout(resolve, 5000));
    
    const qualImg = Math.floor(Math.random() * exercise.length);

    pic.src = `./img/${exercise[qualImg]}.png`;
    exerciseBtn.value = exercise[qualImg];
    exerciseBtn.disabled = true;

    await myPause;

    pic.src = '';
    exerciseBtn.value = 'next';
    exerciseBtn.disabled = false;

});