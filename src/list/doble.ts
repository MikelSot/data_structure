class Nodes {
    private _data: number
    private _next: Nodes
    private _prev: Nodes

    constructor(data: number, next: Nodes, prev: Nodes) {
        this._data = data
        this._next = next
        this._prev = prev
    }


    set data(value: number) {
        this._data = value;
    }

    set next(value: Nodes) {
        this._next = value;
    }

    set prev(value: Nodes) {
        this._prev = value;
    }
}

class Double {
    private head: Nodes
    private tail: Nodes
    private size: number

    constructor() {
        this.head =
        this.tail = Nodes
        this.size = 0
    }

    addToHead(data: number) {
        const newNode = new Nodes(data, this.head, null)

        if (this.head) {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }

        this.size++
    }

    print() {
        let current = this.head
        let result = ''

        while (current) {
            result+= `${current.data}<->`
            current = current.next
        }

        return result += 'x'
    }

    reversePrint() {
        let current = this.tail
        let result = ''

        while (current) {
            result+= current.data + '<->'
            current = current.next
        }

        return result += 'x'
    }
}


const double = new Double()

console.log(double)
double.addToHead(1)
console.log(double.print())

