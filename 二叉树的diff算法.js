/*
 * @Author: your name
 * @Date: 2019-10-27 19:43:14
 * @LastEditTime: 2019-10-28 10:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\二叉树的diff算法.js
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
var node22 = new Node ('X');
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


function diff (origin,target,diffArr) {

    if (origin == target) return diffArr;

    if (origin == null && target != null) {
        // 原来节点的值为空，现在的节点不为空了，说明添加新的值了
        diffArr.push({type:'add',oldValue:null,nowValue:target});

    } else if (origin != null && target == null) {
        // 原来的节点不为空，现在的节点变为空了，说明删除了
        diffArr.push({type:'delete',oldValue:origin,nowValue:null});

    } else if (origin.value != target.value) {
        // 相同位置但是值不同了
        // 这一步判断是当自身的值变了，但子节点并没有发生改变
        diffArr.push({type:'update',oldValue:origin,nowValue:target});
        
        diff(origin.left,target.left,diffArr);
        diff(origin.right,target.right,diffArr);
    
    } else {
        diff(origin.left,target.left,diffArr);
        diff(origin.right,target.right,diffArr);
    }
}

var diffList = []
diff(node1,node11,diffList);
console.log(diffList);


