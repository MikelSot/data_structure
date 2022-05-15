"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this._root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        var newNode = new Node_1.default(data);
        if (this._root === null) {
            this._root = newNode;
            return;
        }
        this.insertNode(this._root, newNode);
    };
    BinaryTree.prototype.insertNode = function (node, newNode) {
        if (newNode.data === node.data) {
            node.counter++;
            return;
        }
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
                return;
            }
            this.insertNode(node.left, newNode);
            return;
        }
        if (node.right === null) {
            node.right = newNode;
            return;
        }
        this.insertNode(node.right, newNode);
    };
    BinaryTree.prototype.inOrder = function (node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    };
    Object.defineProperty(BinaryTree.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    return BinaryTree;
}());
exports.default = BinaryTree;
