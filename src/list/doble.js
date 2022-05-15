var Nodes = /** @class */ (function () {
    function Nodes(data, next, prev) {
        this._data = data;
        this._next = next;
        this._prev = prev;
    }
    Object.defineProperty(Nodes.prototype, "data", {
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nodes.prototype, "next", {
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nodes.prototype, "prev", {
        set: function (value) {
            this._prev = value;
        },
        enumerable: false,
        configurable: true
    });
    return Nodes;
}());
var Double = /** @class */ (function () {
    function Double() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Double.prototype.addToHead = function (data) {
        var newNode = new Nodes(data, this.head, null);
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    };
    Double.prototype.print = function () {
        var current = this.head;
        var result = '';
        while (current) {
            result += "".concat(current.data, "<->");
            current = current.next;
        }
        return result += 'x';
    };
    Double.prototype.reversePrint = function () {
        var current = this.tail;
        var result = '';
        while (current) {
            result += current.data + '<->';
            current = current.next;
        }
        return result += 'x';
    };
    return Double;
}());
var double = new Double();
console.log(double);
double.addToHead(1);
console.log(double.print());
