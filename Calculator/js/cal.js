
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button')



function updateDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error){
        display.value = 'Error';
    }
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C'){
            clearDisplay();
        }

        else if (value === '='){
            calculate();
        }

        else {
            updateDisplay(value)
        }
    })
})