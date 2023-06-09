class Calculator {
 
    /**
     * Adds two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
     */
    add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Subtracts two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
     */
    subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     * Multiplies two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
     */
    multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * Divides two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {(number|error)}
     */
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divde by zero");
        }

        return num1 / num2;
    }

    /**
     * Remainder of division 
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
     */
    remainder(num1, num2) {
        return num1 % num2;
    }
}