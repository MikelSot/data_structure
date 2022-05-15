class Stack {
    private stack: any
    private count : number

    constructor() {
        this.stack = {}
        this.count = 0
    }

    push(element: any) {
        this.stack[this.count] = element
        this.count++

        return this.stack
    }

    pop() {
        this.count--
        const element = this.stack[this.count]
        delete this.stack[this.count]

        return element
    }

    peek() {
        return this.stack[this.count -1]
    }

    size() {
        return this.count
    }

    print() {
        return this.stack
    }
}

const stack = new Stack()

console.log(stack.size())
console.log(stack.push('Miguel'))
console.log(stack.push('Alejandro'))
console.log(stack.push('Brayan'))
console.log(stack.size())
console.log(stack.print())
console.log(stack.peek())