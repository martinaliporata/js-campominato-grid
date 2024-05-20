const gridElement = document.querySelector('section#grid')

const playButton = document.getElementById('play-button')

playButton.addEventListener('click', function(){
    generateNewGame(gridElement, difficultySelectEl);
})

const difficultySelectEl = document.querySelector('#select-difficulty')

function generateNewGame(containerElement, selectElement) {
    containerElement.innerHTML = '';
    
    let numberOfCells
    let classToAdd

    switch (selectElement.value) {
    case '0':
        numberOfCells = 100;
        classToAdd='easy';
        break;
    case '1':
        numberOfCells = 81;
        classToAdd='medium';
        break;
    case '2':
        numberOfCells = 49;
        classToAdd='hard';
        break;
    default:
        numberOfCells = 100;
        classToAdd='easy';
    }

    for(let index = 0; index < numberOfCells; index++) {
        const squareElement = document.createElement('article');
        squareElement.classList.add('square', classToAdd);

        const contentEl = document.createElement('span')
        contentEl.classList.add('content');
        contentEl.append(index+1);
        squareElement.appendChild(contentEl);

        squareElement.addEventListener('click', function(){
            if((index+1) % 2 === 0){
                console.log(index);
                squareElement.classList.add('active');
            } else {
                console.log(index);
                squareElement.classList.add('active', 'odd');
            }
        });

        gridElement.appendChild(squareElement);
    }
}

function getRandomInt(min,max) {
    return Math.floor(Math.random()*((max + 1) - min)) + min
}

function getRandomIntUnique(uninvitedNumbers, min,max) {
    let randomNumber
    let isFound = false

    while (isFound){
        randomNumber = getRandomInt(min, max)

        if(uninvitedNumbers.includes(randomNumber) !== false){
            isFound = true
        }
    }

    return randomNumber
}