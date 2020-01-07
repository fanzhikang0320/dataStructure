/*
 * @Author: your name
 * @Date: 2019-10-27 12:51:56
 * @LastEditTime: 2019-10-27 16:05:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\二叉树的搜索.js
 */

 function Node (value) {
     this.value = value;
     this.left = null;
     this.right = null;
 }

var node1 = new Node ('A');
var node2 = new Node ('B');
var node3 = new Node ('C');
var node4 = new Node ('D');
var node5 = new Node('E');
var node6 = new Node  ('F');
var node7 = new Node('G');

node1.left = node2;
node1.right = node3;
// node2.left = node4;
// node2.right = node5;
node3.left = node6;
node3.right = node7;

function deepSearch (root,target) {

    if (root == null || target == null) return false;
    if (root.value == target)  return true;
    return deepSearch(root.left,target)||deepSearch(root.right,target);
}

// console.log(deepSearch(node1,'B'));

function wideSearch(rootList,target) {
    // 判断是否传递数组
    if (rootList == null || rootList.length == 0) return false;

    var childList = [];

    for (var i = 0 ; i < rootList.length ; i ++) {

        // 判断rootList当中的值是否为空,如果为空继续判断其它子树
        if (rootList[i] == null) {
            continue;
        }; 
        
        if (rootList[i].value == target) {
            return true;
        } else {
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return wideSearch(childList,target);
}

console.log(wideSearch([node1],'G'));
