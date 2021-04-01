interface Person {
    name: string
    age: number
}

let friend: Person[]

friend = [
    { name: 'John', age: 30},
    { name: 'Ana', age: 20},
    { name: 'Chris', age: 25},
]

function comparePersons(a: Person, b: Person) {
    if (a.age < b.age) 
        return -1
    if (a.age > b.age) 
        return 1
    if (a.age == b.age) 
        return 0
}

console.log(friend.sort(comparePersons))