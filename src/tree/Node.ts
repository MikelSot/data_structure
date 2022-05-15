export default class Node {
    private readonly _data: number
    private _left: Node | null
    private _right: Node | null
    private _counter: number

    constructor(data: number) {
        this._data = data
        this._left = null
        this._right = null
        this._counter = 1
    }

    get left(): Node | null {
        return this._left;
    }

    get right(): Node | null{
        return this._right;
    }

    get data(): number {
        return this._data;
    }


    set left(value: Node | null) {
        this._left = value;
    }

    set right(value: Node | null) {
        this._right = value;
    }

    set counter(value: number) {
        this._counter = value;
    }

    get counter(): number {
        return this._counter;
    }
}
