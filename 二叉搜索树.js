

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/**
 * 添加节点
 * @param {*} root 根节点
 * @param {*} num 数值
 */
function addNode (root,num) {
    // 如果当前根节点为空，或者根节点的值等于当前的数值，直接返回
    if (root == null || root.value == num) return ;

    //如果当前节点的值小于传进来的值，要挂载到右子树上边，否则挂载到左子树上边
    if (root.value < num) {
        // 如果当前右子树上边没有节点，则直接创建一个新的节点，否则继续递归与下边的节点进行比较
        if (root.right == null) {
            root.right = new Node (num);
        } else {
            addNode(root.right,num);
        }
    } else {
        if (root.left == null) {
            root.left = new Node (num);
        } else {
            addNode (root.left,num);
        }
    }

}

/**
 * 创建二叉搜索树
 * @param {*} arr 
 */
function buildSearchTree (arr) {

    if (arr == null || arr.length == 0) return ;

    var root = new Node(arr[0]);
    for (var i = 1 ; i < arr.length ; i++) {
        addNode(root,i);
    }

    return root;

}

var num = 0;
/**
 * 查找某个值是否在这颗树上
 * @param {*} root 
 * @param {*} target 
 */
function searchByTree (root,target) {
    if (root == null) return;
    // 如果当前节点的值等于要查找的值，返回true
    num++;
    if (root.value == target) return true;

    // 如果要查找的值大于当前节点的值，则说明该查找的值，挂载到了右子树上边
    if (root.value < target) {
        return searchByTree(root.right,target);
    } else {
        return searchByTree(root.left,target);
    }
    // return false;
}
var arr = [5,4,3,6,8,4,2];

var num1 = 0;
//使用原始方法进行查找
function demo1 (arr,target) {
    for (var i = 0 ; i < arr.length ; i ++) {
        
        if (arr == null || arr.length == 0) return false; 
        num1+=1;
        if (arr[i] == target) {
            return true;
        }
        
    }
    return false;
}

console.log(demo1(arr,6));
console.log(num1);

// 使用二叉搜索树进行查找
var root = buildSearchTree(arr);
console.log(searchByTree(root,6));
console.log(num);
