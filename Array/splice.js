let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.splice(5, 5)

console.log(numbers)

numbers.splice(5, 0, 6, 7, 8, 9, 10) // O sugundo parametro '0', indica que você quer adicionar elementos.

console.log(numbers)

delete numbers[0] // Deixará com o valor undefined.

console.log(numbers)