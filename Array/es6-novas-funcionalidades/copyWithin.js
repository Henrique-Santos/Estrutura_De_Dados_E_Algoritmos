let copyArray = [1, 2, 3, 4, 5, 6]

copyArray.copyWithin(0, 3)
console.log(copyArray)

copyArray = [1, 2, 3, 4, 5, 6]

copyArray.copyWithin(1, 3, 5) // Copiamos os elementos, partindo do indice 3 até o indice 5 (não inclusivo), para a posição 1 do array.
console.log(copyArray)
