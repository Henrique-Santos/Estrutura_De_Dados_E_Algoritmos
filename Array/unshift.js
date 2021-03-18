Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]
    }
    this[0] = value
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.insertFirstPosition(-1)

numbers.unshift(-2)

console.log(numbers)