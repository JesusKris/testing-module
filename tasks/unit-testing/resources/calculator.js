function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'division':
            if (num2 !== 0) {
                return num1/num2;
            } else {
                return 'Cannot divide by zero!';
            }
        case 'remainder':
            return num1 % num2;
        default:
            return 'Invalid operation!';
    }
}
