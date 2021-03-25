let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.reverse()
console.log(numbers)

numbers.sort() // Deixa em ordem lexicográfica.
console.log(numbers)

numbers.sort((a, b) => a - b) // Ordenando em forma crescente. Isso funciona pq o método sort pode receber um compareFunction.
console.log(numbers)