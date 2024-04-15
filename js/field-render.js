// изначальный размер поля
const defaultFieldSize = 9;

// получаем секцию для вставки сообщения о выигрыше или ничьей
const message = document.querySelector('.status-message');

// получаем секцию для вставки ячеек
const field = document.querySelector('.field');

// получаем шаблон секции для вставки ячеек
const fieldTemplate = document.querySelector('#field-template').content.querySelector('.cell');

// функция для отрисовки ячеек
const renderCells = (totalNumber) => {
    const totalNumberOfRows = Math.sqrt(totalNumber);
    // очищаем предыдущие ячейки
    field.innerHTML = '';

    // определение количества ячеек в ряду игрового поля
    field.style.gridTemplateColumns = `repeat(${totalNumberOfRows}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${totalNumberOfRows}, 1fr)`;

    for (let i = 0; i < totalNumber; i++) {
        const cell = fieldTemplate.cloneNode(true);
        field.appendChild(cell);
    }
};

// функция показа сообщения о выигрыше или ничьей
const renderMessage = (text) => {
    message.textContent = text;
};

renderCells(defaultFieldSize);

export { field, message, renderCells, renderMessage };
