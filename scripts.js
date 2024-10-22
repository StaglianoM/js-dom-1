
const lampadina = document.getElementById('lampadina');
const button = document.getElementById('accendi');


button.addEventListener('click', function () {
    if (lampadina.src.includes('white_lamp.png')) {
        lampadina.src = 'yellow_lamp.png';
        button.textContent = 'Spegni';
    } else {
        lampadina.src = 'white_lamp.png';
        button.textContent = 'Accendi';
    }
});
