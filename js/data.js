const icons = {
    CROSS: 'cross',
    ZERO: 'zero'
};

const figures = {
    CROSS: 2,
    ZERO: 1,
    EMPTY: 0
};

const fieldSettings = {
    smallField: {
        name: 'small',
        cellsInRow: 3,
        totalCells: 9
    },
    middleField: {
        name: 'middle',
        cellsInRow: 4,
        totalCells: 16
    },
    bigField: {
        name: 'big',
        cellsInRow: 5,
        totalCells: 25
    },
    hugeField: {
        name: 'huge',
        cellsInRow: 6,
        totalCells: 36
    }
};

const checkWinResult = {
    CROSS_WIN: 3,
    ZERO_WIN: 2,
    DRAW: 1,
    CONTINUE: 0
}

const statusMessages = {
    CROSS_WIN: 'крестики выиграли',
    ZERO_WIN: 'нолики выиграли',
    DRAW: 'ничья'
}

export { fieldSettings, icons, figures, checkWinResult, statusMessages };
