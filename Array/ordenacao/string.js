let names = ['Ana', 'ana', 'john', 'John']
console.log(names.sort())

function compareString(a, b) {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase())
        return -1
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase())
        return 1
    if (a.toLocaleLowerCase() == b.toLocaleLowerCase())
        return 0
}
console.log(names.sort(compareString))

names.sort((a, b) => a.localeCompare(b))
console.log(names)

let names2 = ['Maéve', 'Maeve']
console.log(names2.sort((a, b) => a.localeCompare(b)))