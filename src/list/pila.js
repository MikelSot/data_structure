var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = {};
        this.count = 0;
    }
    Stack.prototype.push = function (element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    };
    Stack.prototype.pop = function () {
        this.count--;
        var element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    };
    Stack.prototype.peek = function () {
        return this.stack[this.count - 1];
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.print = function () {
        return this.stack;
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.size());
console.log(stack.push('Miguel'));
console.log(stack.push('Alejandro'));
console.log(stack.push('Brayan'));
console.log(stack.print());
console.log(stack.size());
console.log(stack.peek());
