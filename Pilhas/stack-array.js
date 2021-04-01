class StackArray {

    constructor() {
        this.items = []
    }

    // Adicionao um ou mais elementos no topo da pilha
    push(element) {
        this.items.push(element)
    }

    // Remove o elemento no topo da pilha
    pop() {
        return this.items.pop()
    }
 
    // Devolve o elemento que está no topo da pilha
    peek() {
        return this.items[this.items.length - 1]
    }

    // Retorna true caso a pilha esteja vazia
    isEmpty() {
        return this.items.length === 0
    }

    // Retorno o tamanho da pilha
    size() {
        return this.items.length
    }

    // Esvazia a pilha
    clear() {
        this.items = []
    }
}

const stack = new StackArray()
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)

console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)

stack.pop()
stack.pop()

console.log(stack.size())