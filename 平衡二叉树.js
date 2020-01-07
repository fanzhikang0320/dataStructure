
// 1. 平衡二叉树的左子树与右子树的高度差不能超过1
// 2. 这颗二叉树的每个子树都符合第一条

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node ('A');
var b = new Node('B');
var c = new Node ('C');
var d = new Node ('D');
var e = new Node ('E');
var f = new Node ('F');
var g = new Node ('G');
var h = new Node ('H');
var j = new Node ('J');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
e.left = j;



/**
 * 得到最深的层数
 * @param {*} root 
 */
function getDeep (root) {
    // 如果当前节点已经为空，直接返回0，下面没有层了
    if (root == null) return 0;

    var leftDeep = getDeep(root.left);

    var rightDeep = getDeep(root.right);
    // 最终返回的结果是最深的层数，并且要加上当前的层数
    return Math.max(leftDeep,rightDeep) + 1;
}

// console.log(getDeep(a));

// 判断当前二叉树是否处于平衡状态
function isBlance (root) {
    if (root == null) return true;
    
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);

    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false
    } else {
        // 如果深度相同，继续往下判断左子树和右子树是否是平衡的
        return isBlance(root.left) && isBlance(root.right);;
    }
    
}

console.log(isBlance(a));


