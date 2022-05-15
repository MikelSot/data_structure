var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.inQueue = function (element) {
        this.queue.push(element);
        return this.queue;
    };
    Queue.prototype.deQueue = function () {
        // el primero
        return this.queue.shift();
    };
    Queue.prototype.peek = function () {
        return this.queue[0];
    };
    Queue.prototype.size = function () {
        return this.queue.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    Queue.prototype.print = function () {
        return this.queue;
    };
    return Queue;
}());
var queue = new Queue();
console.log(queue.inQueue('Miguel'));
console.log(queue.inQueue('Alejandro'));
console.log(queue.inQueue('Brayan'));
console.log(queue.print());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.deQueue());
console.log(queue.isEmpty());
console.log(queue.print());
