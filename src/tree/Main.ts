import BinaryTree from "./BinaryTree";
import Node from "./Node";

const binaryTree = new BinaryTree()

// insert some nodes

binaryTree.insert(15)
binaryTree.insert(8)
binaryTree.insert(22)
binaryTree.insert(7)
binaryTree.insert(26)
binaryTree.insert(22)
binaryTree.insert(5)
binaryTree.insert(8)
binaryTree.insert(2)
binaryTree.insert(30)

binaryTree.inOrder(<Node>binaryTree.root)

console.log(binaryTree.root)

//              15
//          7       22
//      5     8         26
//  2                       30
//
