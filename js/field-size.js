import {fieldSettings} from './data.js';
import { renderCells } from './field-render.js';
import {clearField} from "./game-process.js";

// получение секции с выбором размера игрового поля
const settings = document.querySelector('.settings fieldset');

// получение всех инпутов
const fieldInputs = document.querySelectorAll('.field-input');

let currentFieldSizeName = fieldSettings.smallField.name; // название текущего размера поля
let numberOfCellsInRow = fieldSettings.smallField.cellsInRow; // текущее количество ячеек в ряду

// функция получения значения выбранного инпута
const getCheckedInput = () => {
    for (let fieldInput of fieldInputs) {
        if (fieldInput.checked) {
            currentFieldSizeName = fieldInput.value;
        }
    }
    clearField();
    return currentFieldSizeName;
};

settings.addEventListener('change', () => {
    let totalNumberOfCells;
    currentFieldSizeName = getCheckedInput();

    if (currentFieldSizeName === fieldSettings.smallField.name) {
        numberOfCellsInRow = fieldSettings.smallField.cellsInRow;
        totalNumberOfCells = fieldSettings.smallField.totalCells;
    } else if (currentFieldSizeName === fieldSettings.middleField.name) {
        numberOfCellsInRow = fieldSettings.middleField.cellsInRow;
        totalNumberOfCells = fieldSettings.middleField.totalCells;
    } else if (currentFieldSizeName === fieldSettings.bigField.name) {
        numberOfCellsInRow = fieldSettings.bigField.cellsInRow;
        totalNumberOfCells = fieldSettings.bigField.totalCells;
    } else if (currentFieldSizeName === fieldSettings.hugeField.name) {
        numberOfCellsInRow = fieldSettings.hugeField.cellsInRow;
        totalNumberOfCells = fieldSettings.hugeField.totalCells;
    }

    // вызов функции renderCells для отрисовки ячеек игрового поля с новым размером
    renderCells(totalNumberOfCells);
});

export { getCheckedInput };
