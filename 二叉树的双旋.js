

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node1 = new Node ('A');
var node2 = new Node ('B');
var node3 = new Node ('C');
var node4 = new Node ('D');
var node5 = new Node ('E');

node1.left = node2;
node2.left = node3;
node3.left = node4;
node4.left = node5;

function getDeep (root) {
    if (root == null) return 0;
    var leftDeep = getDeep (root.left);
    var rightDeep = getDeep (root.right);
    return Math.max(leftDeep,rightDeep) + 1;
}

function isBlance (root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep (root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBlance(root.left) && isBlance(root.right);
    }
}

// console.log(isBlance(node1));
function change (root) {
    if (isBlance(root)) return root;
    if (root.left != null ) change(root.left);
    if (root.right != null) change(root.right);

    var leftDeep = getDeep (root.left);
    var rightDeep = getDeep (root.right);

    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {
        var changeTreeDeep = getDeep (root.left.right);
        var noChangeTreeDeep = getDeep (root.left.left);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left);
        }
        return rightRotate(root);
    } else {

        var changeTreeDeep = getDeep (root.right.left);
        var noChangeTreeDeep = getDeep (root.right.right);

        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right);
        }
        return leftRotate(root);
    }
}

function leftRotate (root) {
    if (root == null) return root;
    var newRoot = root.right;
    var changeTree = root.right.left;
    root.right = changeTree;
    newRoot.left = root;
    return newRoot;
}

function rightRotate (root) {
    if (root == null) return root;
    var newRoot = root.left;
    var changeTree = root.left.right;
    root.left = changeTree;
    newRoot.right = root;
    return newRoot;
}
console.log(isBlance(node1));
var newRoot = change(node1);

console.log(isBlance(newRoot));
console.log(newRoot);
/**
 * 变化分支，不可以是唯一的最深分支
 * 如果变化分支是唯一的最深分支，我们要先进行反向的旋转
 */

/**
 * 二叉树的双旋
 * 
 * 当要对某个节点进行左单旋时，如果变化分支是唯一的最深分支，那么我们要对新根进行右单旋
 * 然后在进行左单旋，这样的旋转叫做右左双旋
 * 
 * 当要对某个节点进行右单旋时，如果变化的分支是唯一的最深分支，那么我们要对新根进行左单旋，
 * 然后在进行右单旋，这样的旋转叫做左右双旋
 */
