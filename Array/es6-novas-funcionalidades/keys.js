let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const aKeys = numbers.keys() // Obtem um iterador de chaves.

for (n of numbers) {
    console.log(aKeys.next()) // Se done == false, significa que ainda há mais chaves para iterar no array.
}

