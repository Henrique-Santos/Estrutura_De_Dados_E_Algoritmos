let numbersCopy = Array.of(1, 2, 3, 4, 5, 6)
console.log(numbersCopy)

numbersCopy.fill(0)
console.log(numbersCopy)

numbersCopy.fill(2, 1)
console.log(numbersCopy)

numbersCopy.fill(1, 3, 5) // O valor final passado como parametro não é inclussivo.
console.log(numbersCopy)