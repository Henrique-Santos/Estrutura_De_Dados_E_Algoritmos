let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(numbers.indexOf(10)) // Devolve o indice do primeiro elemento encontrado.
console.log(numbers.indexOf(100)) // Devolve -1, pois não existe o valor 100, no array.

numbers.push(10)
console.log(numbers)

console.log(numbers.lastIndexOf(10)) // O indice do último elemento encontrado.
console.log(numbers.lastIndexOf(100))