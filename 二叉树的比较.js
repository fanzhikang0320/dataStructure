/*
 * @Author: your name
 * @Date: 2019-10-27 16:09:36
 * @LastEditTime: 2019-10-27 17:25:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\二叉树的比较.js
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
var node5 = new Node ('E');
var node6 = new Node ('F');
var node7 = new Node ('G');

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;



var node11 = new Node ('A');
var node22 = new Node ('B');
var node33 = new Node ('C');
var node44 = new Node ('D');
var node55 = new Node ('E');
var node66 = new Node ('F');
var node77 = new Node ('G');

node11.left = node22;
node11.right = node33;
node22.left = node44;
node22.right = node55;
node33.left = node66;
node33.right = node77;


// 判断二叉树是否相等时，必须要确定左右两颗子树交换之后算不算同一颗二叉树

// 方案一：同一颗二叉树左右两棵子树交换位置不算为同一棵二叉树

// function compareRoot (origin,target) {
    
//     if (origin == target) return true; //如果放了同一个二叉树，直接返回true

//     // 判断二叉树有一个为空另一个不为空的情况
//     if (origin == null && target != null || origin != null && target == null) return false;

//     // 相同位置的值不相等的情况
//     if (origin.value !== target.value) return false;
//     // 判断左子树是否相等
//     var left = compareRoot(origin.left,target.left);

//     // 判断右子树是否相等
//     var right = compareRoot(origin.right,target.right);

    
//     return left && right
    
// }

// console.log(compareRoot(node1,node11));


// 方案二：同一棵二叉树左右两棵子树交换位置算为同一棵二叉树

function compareRoot (origin,target) {

    if (origin === target) return true;

    if (origin == null && target != null || origin != null && target == null ) return false; 

    if (origin.value !== target.value) return false;

    return compareRoot(origin.left,target.left) && compareRoot(origin.right,target.right) || compareRoot(origin.left,target.right) && compareRoot(origin.right,target.left);


    
    
}