import Node from "./Node";

export default class BinaryTree {
    private _root: Node |null

    constructor() {
        this._root = null
    }

    insert(data: number) {
        let newNode =  new Node(data)
        if (this._root === null) {
            this._root = newNode

            return
        }

        this.insertNode(this._root, newNode)
    }

    insertNode(node: Node, newNode: Node) {
        if (newNode.data === node.data) {
            node.counter++
            return
        }

        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
                return
            }
            
            this.insertNode(<Node>node.left, newNode)
            return
        }

        if (node.right === null) {
            node.right = newNode
            return
        }
        this.insertNode(<Node>node.right, newNode)
    }

    inOrder(node: Node){
        if (node !== null) {
            this.inOrder(<Node>node.left)
            console.log(node.data)
            this.inOrder(<Node>node.right)
        }
    }

    get root(): Node | null {
        return this._root;
    }
}