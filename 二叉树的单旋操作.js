

/**
 * 某一节点 不平衡，左边浅，右边深，进行左单旋
 * 左边深，右边浅，进行右单旋
 * 
 * 旋转节点:不平衡的节点为旋转节点
 * 新根：旋转之后成为根节点的节点
 * 变化分支：父节点发生变化的那个分支
 * 不变分支：父节点不变的那个分支
 */

 /**
  * 左单旋时：
  * 
  * 旋转节点：当前不平衡的节点
  * 新根：右子树的根节点
  * 变化分支：旋转节点的右子树的左子树
  * 不变分支：旋转节点的右子树的右子树
  */


function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
var node1 =  new Node ('A');
var node2 = new Node ('B');
var node3 = new Node ('C');
var node4 = new Node ('D');
var node5 = new Node ('E');
node1.left = node2;
node2.left = node3;
node3.left = node4;
node4.left = node5;
// node1.right = node2;
// node2.left = node3;
// node2.right = node4;

function getDeep (root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep =  getDeep (root.right);
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


function change (root) {
    //判断是否平衡
    if (isBlance(root)) return root;

    if (root.left != null) change(root.left);

    if (root.right != null) change(root.right); 

    var leftDeep = getDeep (root.left);
    var rightDeep = getDeep (root.right);

    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep){
        // 不平衡，左边深，进行右单旋
        var changeTreeDeep = getDeep (root.left.right);
        var noChangeTreeDeep = getDeep (root.left.left);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left);
        }
        var newRoot =  rightRotate(root);
        newRoot.right = change(newRoot);

        return newRoot;
    } else {
        // 右边深，进行左单旋
        var changeTreeDeep = getDeep (root.right.left);
        var noChangeTreeDeep = getDeep (root.right.right);

        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right);
        }

        var newRoot = leftRotate(root);
        newRoot.left = change(newRoot);
        return newRoot;
    }
}

/*
*1.找到新根
2.找到变化分支
3.当前旋转节点的右孩子为变化分支
4.新根的左孩子为旋转节点
5. 返回新的根节点
*/
/**
 * 左单旋
 * 1.找到新根
 * 2.找到变化分支
 * 3.当前旋转节点的右孩子为变化分支
 * 4、新根的左孩子为旋转节点
 * 5.返回新的根节点
 * @param {*} root 
 */
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
    newRoot.right =  root;
    return newRoot;
}

  /**
   * 右单旋时：
   * 
   * 旋转节点：当前不平衡的节点
   * 新根：左子树的根节点
   * 变化分支：旋转节点的左子树的右子树
   * 不变分支：旋转节点的左子树的左子树
   */
    console.log(isBlance(node1));
   var newNode = change(node1);
   
    console.log(isBlance(newNode));
    console.log(newNode);

    /**
     * 如果变化分支的高度比旋转节点的另一侧高度差超过2，那么单旋之后依旧不平衡
     */


