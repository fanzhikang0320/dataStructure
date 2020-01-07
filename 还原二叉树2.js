/*
 * @Author: your name
 * @Date: 2019-10-27 12:00:10
 * @LastEditTime: 2019-10-27 12:49:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\还原二叉树2.js
 */

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// 后序遍历
var trave_after = ['D','E','B','F','G','C','A'];

// 中序遍历
var trave_center = ['D','B','E','A','F','C','G'];

function reset (after,center) {
    if (after == null || center == null || after.length == 0 || center.length == 0 || after.length != center.length ) return;
    // 根据后序遍历找到根节点
    var root = new Node(after[after.length - 1]);
    // 找到根节点在中序遍历当中的位置
    var rootIndexAtCenter = center.indexOf(root.value);

    // 得到前序遍历当中的左子树
    var afterLeftTree = after.slice(0,rootIndexAtCenter );
    // 得到前序遍历当中的右子树
    var afterRightTree = after.slice(rootIndexAtCenter,after.length - 1);

    // 得到中序遍历当中的左子树
    var centerLeftTree = center.slice(0,rootIndexAtCenter);
    // 得到中序遍历当中的右子树
    var centerRightTree = center.slice(rootIndexAtCenter + 1,center.length);

    root.left = reset(afterLeftTree,centerLeftTree);
    root.right = reset(afterRightTree,centerRightTree);

    return root;
}


var root = reset(trave_after,trave_center);

console.log(root);

