class Calculator {

    _isNum(num) {
        return typeof num === "number" ? true : false
    }

    _validateInput(...input) {
        input.forEach((num) => {
            if (!this._isNum(num)) {
                throw Error("Wrong data type as an argument. Only numbers are allowed!")
            }
        })
    }

    /**
     * Adds two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {number | error}
     */
    add(num1, num2) {
        this._validateInput(num1, num2)

        return num1 + num2;
    }

    /**
     * Subtracts two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {number | error}
     */
    subtract(num1, num2) {
        this._validateInput(num1, num2)

        return num1 - num2;
    }

    /**
     * Multiplies two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {number | error}
    */
    multiply(num1, num2) {
        this._validateInput(num1, num2)

        return num1 * num2;
    }

    /**
     * Divides two numbers
     * @param {number} num1
     * @param {number} num2
     * @returns {(number | error)}
    */
    divide(num1, num2) {
        this._validateInput(num1, num2)

        if (num2 === 0) {
            throw new Error("Cannot divde by zero!");
        }

        return num1 / num2;
    }

    /**
     * Remainder of division 
     * @param {number} num1
     * @param {number} num2
     * @returns {number | error}
     */
    remainder(num1, num2) {
        this._validateInput(num1, num2)

        return num1 % num2;
    }
}