function clearInput() {
    document.getElementById('result').value = '';
}

function appendInput(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        var resultField = document.getElementById('result');
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
