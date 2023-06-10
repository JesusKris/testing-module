class UserInput {

    #input;

    /**
     * @param {number} input
     */
    constructor(input) {
        if (!this._containsOnlyNumbers(input)) {
            throw Error(`${input} is not a number. Only numbers are allowed!`)
        }

        this.#input = input;
    }

    _containsOnlyNumbers(input) {
        return typeof input === "number"
    }

    /**
     * @returns {number}
     */
    get value() {
        return this.#input
    }
}

class Calculator {

    ensureAreUserInstances(...input) {
        input.forEach((value) => {
            if (!(value instanceof UserInput)) {
                throw new Error(`${value} is not an instance of UserInput. Only instance of UserInput is allowed.`)
            }
        })
    }

    /**
     * Adds two numbers
     * @param {UserInput} addendOne
     * @param {UserInput} addendTwo
     * @returns {number | error} sum | error
    */
    add(addendOne, addendTwo) {
        this.ensureAreUserInstances(addendOne, addendTwo)
        return addendOne.value + addendTwo.value;
    }

    /**
     * Subtracts two numbers
     * @param {UserInput} minuend
     * @param {UserInput} subtrahend
     * @returns {number | error} difference | error
     */
    subtract(minuend, subtrahend) {
        this.ensureAreUserInstances(minuend, subtrahend)
        return new UserInput(minuend).value - new UserInput(subtrahend).value;
    }

    /**
     * Multiplies two numbers
     * @param {UserInput} multiplicandOne
     * @param {UserInput} multiplicandTwo
     * @returns {number | error} product | error
    */
    multiply(multiplicandOne, multiplicandTwo) {
        this.ensureAreUserInstances(multiplicandOne, multiplicandTwo)
        return multiplicandOne.value * multiplicandTwo.value;
    }

    /**
     * Divides two numbers
     * @param {UserInput} dividend
     * @param {UserInput} divisor
     * @returns {(number | error)} quotient | error
    */
    divide(dividend, divisor) {
        this.ensureAreUserInstances(dividend, divisor)

        if (divisor.value === 0) {
            throw new Error("Cannot divde by zero.");
        }

        return dividend.value / divisor.value;
    }

    /**
     * Remainder of division 
     * @param {UserInput} dividend
     * @param {UserInput} divisor
     * @returns {number | error} remainder | error
     */
    remainder(dividend, divisor) {
        this.ensureAreUserInstances(dividend, divisor)

        if (divisor.value === 0) {
            throw new Error("Cannot divde by zero.");
        }

        return dividend.value % divisor.value;
    }
}