/*
 * @Author: your name
 * @Date: 2019-10-27 11:14:21
 * @LastEditTime: 2019-10-27 11:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\还原二叉树.js
 */

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var trave_before = ['A','B','D','E','C','F','G'];
var trave_center = ['D','B','E','A','F','C','G'];


function reset (before,center) {

    //严谨性判断
    if (before == null || center == null || before.length == 0 || center.length == 0 || before.length != center.length ) return ;

    var root = new Node (before[0]);    //找到根节点

    var rootAtCenterIndex = center.indexOf(root.value); //找到根节点在中序中的位置

    // 根据中序当中的左子树当中的个数，在前序当中找到左子树对应的个数
    var beforeLeftTree = before.slice(1,rootAtCenterIndex + 1);
    // 找到前序当中的右子树
    var beforeRightTree = before.slice(rootAtCenterIndex + 1,before.length);

    // 得到中序遍历当中的左子树
    var centerLeftTree = center.slice(0,rootAtCenterIndex);

    // 得到中序遍历当中的右子树
    var centerRightTree = center.slice(rootAtCenterIndex + 1 ,center.length);

    root.left = reset(beforeLeftTree,centerLeftTree);   //得到左子树的根节点
    root.right = reset(beforeRightTree,centerRightTree);    //得到右子树的根节点

    return root;    //每次都是返回根节点
}

var root = reset(trave_before,trave_center);

console.log(root);

