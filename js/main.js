const COLORS = {
    '1': 'aqua',
    '-1': 'silver',
    '0': 'white',
};

init();

function render() {
    board.forEach(function(element, idx) {
        const td = document.getElementById(`${idx}`);
        td.style.backgroundColor = COLORS[element];
});
};

// To do : condense
const but0 = document.querySelectorAll('td button')[0].addEventListener('click', handleClick);
const but1 = document.querySelectorAll('td button')[1].addEventListener('click', handleClick);
const but2 = document.querySelectorAll('td button')[2].addEventListener('click', handleClick);
const but3 = document.querySelectorAll('td button')[3].addEventListener('click', handleClick);
const but4 = document.querySelectorAll('td button')[4].addEventListener('click', handleClick);
const but5 = document.querySelectorAll('td button')[5].addEventListener('click', handleClick);
const but6 = document.querySelectorAll('td button')[6].addEventListener('click', handleClick);
const but7 = document.querySelectorAll('td button')[7].addEventListener('click', handleClick);
const but8 = document.querySelectorAll('td button')[8].addEventListener('click', handleClick);

function handleClick(evt) {
    const marker = evt.target;
    const idx = parseInt(marker.parentElement.id);
    board[idx] = turn;
    // To do : pushes 'X' and 'O' into cells but need to figure out how to reset w/o removing buttons
    // if (turn === 1) {
    //     let text = document.getElementById(`${idx}`);
    //     text.textContent = 'X';
    // } else if (turn === -1) {
    //     let text = document.getElementById(`${idx}`);
    //     text.textContent = 'O';
    // };
    marker.disabled = true;
    // To do: hides buttons on click but they are still missing even after reset button
    // marker.style.backgroundColor = 'transparent';
    // marker.textContent = '';
    // marker.style.borderColor = 'transparent';
    turn *= -1;
    render(); 
};

document.querySelector('input').addEventListener('click', reset);
function reset() {
    const buttons = document.getElementsByTagName('button');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        }
    // To Do : resets 'X' and 'O' content but also removes buttons
    // const texts = document.getElementsByTagName('td');
    // for (i = 0; i < texts.length; i++) {
    //     texts[i].textContent = '';
    // }
    init();
}

function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    winner = null;
    turn = 1;
    render();
};

