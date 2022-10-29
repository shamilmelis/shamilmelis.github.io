function calc() {
    const firstNum = prompt('Выбери первое число')
    if (firstNum === firstNum) {
        alert(`Вы выбрали ${firstNum} число`)
    }
    const secondNum = prompt('Выбери второе число') 
    if (secondNum === secondNum) {
        alert(`Вы выбрали ${secondNum} число`)
    }
    const operator = prompt('Выбери оператора + - * % **)')
    if (operator === '+') {
        alert(+firstNum + +secondNum)
    } else if (operator === '-') {
        alert(firstNum - secondNum)
    } else if (operator === '*') {
        alert(firstNum * secondNum)
    } else if (operator === '/') {
        alert(firstNum / secondNum)
    } else if (operator === '**') {
        alert(firstNum ** secondNum)
    } else if(operator === '%') {
        alert(firstNum % secondNum)
    } 
}
