const map = document.getElementById('map');

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();


function createBar(statId) {
    const statElement = document.getElementById(statId);
    const barContainer = document.createElement('div');

    barContainer.style.width = '90%';
    barContainer.style.height = '30px';

    barContainer.style.display = 'flex'; // pour aligner les carrés horizontalement
    barContainer.style.gap = '4px'; // espace entre les carrés
    barContainer.style.padding = '5px';

    // Supposons que la barre est composée de 10 carrés max
    const nbCarre = 5;
    // remplissage 
    const filledSquares = 1;

    for (let i = 0; i < nbCarre; i++) {
        const square = document.createElement('div');
        square.style.width = '30px';
        square.style.height = '30px';
        square.style.background = i < filledSquares ? '#ed6452' : '#fff'; // coloré ou vide
        barContainer.appendChild(square);
    }

    statElement.parentNode.insertBefore(barContainer, statElement.nextSibling);
}

['mental', 'social', 'energie'].forEach(createBar);
