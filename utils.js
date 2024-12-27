function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // it gives a number between 1 and 100
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

module.exports = generateRandomNumber;