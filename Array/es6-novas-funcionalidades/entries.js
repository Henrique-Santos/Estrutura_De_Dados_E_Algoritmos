let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let aEntries = numbers.entries() // Obtendo um iterador de chave/valor.

for (n of numbers) {
    console.log(aEntries.next().value) // [chave, valor].
}