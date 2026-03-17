function calc(op) {
    const op1 = parseInt(document.getElementById('calc-input').value) || 0;
    const op2 = parseInt(document.getElementById('calc-input2').value) || 0;
    console.log(op1, op2, op);
    let result = 0;
    switch (op) {
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            result = op1 / op2;
            break;
    }
    document.getElementById('calc-result').textContent = `Результат: ${result}`;
}
