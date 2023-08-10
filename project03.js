// Simple Calculator
function calculator(num1, num2, operation) {
    let result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 !== 0){
                result = num1 / num2;
            } else {
                return "Error: Division by zero is not allowed";
            }
            break;
        default:
            return "Error: Operation not recognized";
    }

    return result;
}
