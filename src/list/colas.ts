class Queue {
    private queue: string[]

    constructor() {
        this.queue = []
    }

    inQueue(element: string) {
        this.queue.push(element)

        return this.queue
    }

    deQueue() {
        // el primero
        return this.queue.shift()
    }

    peek() {
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    isEmpty() {
        return this.queue.length === 0
    }

    print() {
        return this.queue
    }
}

const queue = new Queue()
console.log(queue.inQueue('Miguel'))
console.log(queue.inQueue('Alejandro'))
console.log(queue.inQueue('Brayan'))
console.log(queue.print())
console.log(queue.size())
console.log(queue.peek())
console.log(queue.deQueue())
console.log(queue.isEmpty())
console.log(queue.print())

// HACER LA PILA Y LA COLA
