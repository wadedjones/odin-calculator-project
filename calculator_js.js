// CALCULATE

function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3);
    switch (randomPlay) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
};

const compPlay = computerPlay();

console.log(compPlay);