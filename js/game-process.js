import {checkWinResult, icons, statusMessages} from "./data.js";
import { field, message, renderMessage } from "./field-render.js";
import { checkStatus } from "./win-check.js";

// получаем секции для подсчета очков игроков
const players = document.querySelectorAll('.player');
const firstPlayerPoints = players[0].querySelector('span');
const secondPlayerPoints = players[1].querySelector('span');

const button = document.querySelector('.button');

let currentIcon = icons['CROSS'];

// начальный счет игроков
let firstPlayerPointsCount = 0;
let secondPlayerPointsCount = 0;

// функция проставления крестиков или ноликов
const showFigure = (evt) => {
    let cell = evt.target;

    // проверка, содержит ли нажатый элемент класс cell и не содержит другие классы
    if ((cell.classList.contains('cell')) &&
        (!cell.classList.contains('cross')) &&
        (!cell.classList.contains('zero'))) {
        cell.classList.add(currentIcon);
        button.style.display = 'block';
        // при последующих нажатиям на уже не пустые ячейки классы не должны меняться
        if (currentIcon === icons['CROSS']) {
            currentIcon = icons['ZERO']
        } else {
            currentIcon = icons['CROSS']
        }
    }

    // вызов функции проверки выигрыша
    const statusResult = checkStatus();
    if (statusResult === checkWinResult.CROSS_WIN) {
        renderMessage(statusMessages.CROSS_WIN);
        firstPlayerPointsCount++;
        firstPlayerPoints.textContent = `${firstPlayerPointsCount}`;
        field.removeEventListener('click', showFigure);
    } else if (statusResult === checkWinResult.ZERO_WIN) {
        renderMessage(statusMessages.ZERO_WIN);
        secondPlayerPointsCount++;
        secondPlayerPoints.textContent = `${secondPlayerPointsCount}`;
        field.removeEventListener('click', showFigure);
    } else if (statusResult === checkWinResult.DRAW) {
        renderMessage(statusMessages.DRAW);
        field.removeEventListener('click', showFigure);
    }
};

field.addEventListener('click', showFigure);

// функция очистки игрового поля
const clearField = () => {
    const cells = field.querySelectorAll('.cell');
    cells.forEach((cell) => {
        if (cell.classList.contains('cross')) {
            cell.classList.remove('cross');
        } else if (cell.classList.contains('zero')) {
            cell.classList.remove('zero');
        }
    });
    currentIcon = icons['CROSS'];
    button.style.display = 'none';
    message.textContent = '';
    field.addEventListener('click', showFigure);
};

button.addEventListener('click', () => {
    clearField();
});

export { clearField };
