"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTree_1 = require("./BinaryTree");
var binaryTree = new BinaryTree_1.default();
// insert some nodes
binaryTree.insert(15);
binaryTree.insert(8);
binaryTree.insert(22);
binaryTree.insert(7);
binaryTree.insert(26);
binaryTree.insert(22);
binaryTree.insert(5);
binaryTree.insert(8);
binaryTree.insert(2);
binaryTree.insert(30);
binaryTree.inOrder(binaryTree.root);
console.log(binaryTree.root);
//              15
//          7       22
//      5     8         26
//  2                       30
//
