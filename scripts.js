
const lampadina = document.getElementById('lampadina');
const button = document.getElementById('accendi');


button.addEventListener('click', function () {
    if  (lampadina.classList.contains('active')) {   //(elemento, classi dell'elemento, controllo se esiste la classe)
        lampadina.src = 'white_lamp.png';
        button.textContent = 'Accendi';
        lampadina.classList.remove('active');
    } else {
        lampadina.src = 'yellow_lamp.png';
        button.textContent = 'Spegni';
        lampadina.classList.add('active');
    }
});



// button.addEventListener('click', function () {
//     if (lampadina.src.includes('white_lamp.png')) {
//         lampadina.src = 'yellow_lamp.png';
//         button.textContent = 'Spegni';
//     } else {
//         lampadina.src = 'white_lamp.png';
//         button.textContent = 'Accendi';
//     }
// });



// 1 lampadina spenta 
// 2 premi pulsante
// 3 controllo if false
// 4 entro nell'else
// 5 cambio immagine - testo - aggiungi classe
// 6 lampada accesa 
// 7 premi pulsante 
// 8 entro nell' if perchè diventa true 

