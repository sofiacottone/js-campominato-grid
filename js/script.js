// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const playBtn = document.querySelector('#play-btn');
const mainGrid = document.querySelector('#grid');

playBtn.addEventListener('click', function () {
    // reset griglia
    mainGrid.innerHTML = '';

    // creo una variabile contenente la scelta dell'utente
    let levelValue = document.querySelector('#level').value;
    console.log('Difficulty:', levelValue);

    let numSquare;
    if (levelValue === 'Easy') {
        numSquare = 100;

    } else if (levelValue === 'Medium') {
        numSquare = 81;

    } else if (levelValue === 'Hard') {
        numSquare = 49;

    }

    // creo i div utilizzando una funzione
    for (let i = 1; i <= numSquare; i++) {
        const square = generateSquare(i, levelValue);
        square.classList.add('square', 'border', 'd-flex', 'justify-content-center', 'align-items-center');

        if (levelValue === 'Easy') {
            square.classList.add('ms-easy');

        } else if (levelValue === 'Medium') {
            square.classList.add('ms-medium');

        } else if (levelValue === 'Hard') {
            square.classList.add('ms-hard');

        }

        mainGrid.append(square);
    }
});

// square.classList.add('ms-hard')



//#region FUNCTIONS

// 1
// funzione per generare un quadrato (div) contenente un numero progressivo limitato da choice
// con un event listener per aggiungere una classe al click che cambia lo sfondo del quadrato
// number -> numero intero
// choice -> stringa per determinare la classe da inserire nel div generato
// return -> torna un elemento del DOM che rappresenta un quadrato
function generateSquare(number, choice) {

    const newSquare = document.createElement('div');

    // newSquare.classList.add(`ms-${levelValue}`.toLowerCase);
    newSquare.innerHTML = `<span>${number}</span>`;


    // gestione del click su ogni quadrato
    newSquare.addEventListener('click', function () {
        this.classList.toggle('bg-info');

        // console log del numero all'interno della cella (solo al primo click - se toggle - altrimenti togliere if)
        if (this.classList.contains('bg-info')) {
            console.log('clicked square:', number);
        }
    })

    return newSquare;

}


//#endregion FUNCTIONS