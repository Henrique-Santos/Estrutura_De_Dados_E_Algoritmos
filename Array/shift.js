Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length - 1; i++) { // A última posiçao fica undefined, por isso ela não é percorrida.
        this[i] = this[i + 1] 
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.removeFirstPosition()
console.log(numbers)

numbers.shift()
console.log(numbers)


