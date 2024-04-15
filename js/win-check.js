import { field } from "./field-render.js";
import { icons, figures, checkWinResult } from "./data.js";

const getFigure = (index) => {
    const fieldNodes = field.childNodes;

    if (fieldNodes[index].classList.contains(icons.CROSS)) {
        return figures.CROSS;
    } else if (fieldNodes[index].classList.contains(icons.ZERO)) {
        return figures.ZERO;
    } else {
        return figures.EMPTY;
    }
};

const checkStatus = () => {
    const fieldNodes = field.childNodes;
    const totalCells = fieldNodes.length;
    const cellsInRow = Math.sqrt(totalCells);

    let crossCount;
    let zeroCount;
    let isDraw = true; // это ничья

    // проверка победы по горизонтали
    for (let n = 0; n < totalCells; n += cellsInRow) {
        crossCount = 0;
        zeroCount = 0;

        for (let x = n; x < n + cellsInRow; x++) {
            const figure = getFigure(x);
            if (figure === figures.EMPTY)
                break;
            else if (figure === figures.CROSS)
                crossCount++;
            else if (figure === figures.ZERO)
                zeroCount++;
        }

        if (crossCount === cellsInRow) {
            return checkWinResult.CROSS_WIN;
        } else if (zeroCount === cellsInRow) {
            return checkWinResult.ZERO_WIN;
        }
    }

    // проверка победы по вертикали
    for (let n = 0; n < cellsInRow; n++) {
        crossCount = 0;
        zeroCount = 0;

        for (let x = n; x < n + totalCells; x += cellsInRow) {
            const figure = getFigure(x);
            if (figure === figures.EMPTY)
                break;
            else if (figure === figures.CROSS)
                crossCount++;
            else if (figure === figures.ZERO)
                zeroCount++;
        }

        if (crossCount === cellsInRow) {
            return checkWinResult.CROSS_WIN;
        } else if (zeroCount === cellsInRow) {
            return checkWinResult.ZERO_WIN;
        }
    }

    // проверка победы по диагонали слева направо
    crossCount = 0;
    zeroCount = 0;
    for (let x = 0; x < totalCells; x += cellsInRow + 1) {
        const figure = getFigure(x);
        if (figure === figures.EMPTY)
            break;
        else if (figure === figures.CROSS)
            crossCount++;
        else if (figure === figures.ZERO)
            zeroCount++;
    }

    if (crossCount === cellsInRow) {
        return checkWinResult.CROSS_WIN;
    } else if (zeroCount === cellsInRow) {
        return checkWinResult.ZERO_WIN;
    }

    // проверка победы по диагонали справа налево
    crossCount = 0;
    zeroCount = 0;
    for (let x = cellsInRow - 1; x < totalCells - 1; x += cellsInRow - 1) {
        const figure = getFigure(x);
        if (figure === figures.EMPTY)
            break;
        else if (figure === figures.CROSS)
            crossCount++;
        else if (figure === figures.ZERO)
            zeroCount++;
    }

    if (crossCount === cellsInRow) {
        return checkWinResult.CROSS_WIN;
    } else if (zeroCount === cellsInRow) {
        return checkWinResult.ZERO_WIN;
    }

    // проверка ничья
    for (let x = 0; x < totalCells; x++) {
        const figure = getFigure(x);
        if (figure === figures.EMPTY) {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        return checkWinResult.DRAW;
    }
    return checkWinResult.CONTINUE;
};

export { checkStatus };
