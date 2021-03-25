let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const aValues = numbers.values()

for (n of numbers) {
    console.log(aValues.next()) // Se done == false, significa que ainda há mais valores para iterar no array.
}