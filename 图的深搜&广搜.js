
function Node (value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node ('A');
var b = new Node ('B');
var c = new Node ('C');
var d = new Node ('D');
var e = new Node ('E');
var f = new Node ('F');

a.neighbor.push(b);
a.neighbor.push(c);

b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);

c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);

d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);

e.neighbor.push(d);

/**
 * 
 * @param {*} root 
 * @param {*} target 
 * @param {*} path 
 */
function deepSearch (root,target,path) {
    if (root == null) return false;
    if (path.indexOf (root) > -1) return false;
    if (root.value == target) return true;

    path.push(root);
    var result = false;
    for (var i = 0 ; i < root.neighbor.length; i++) {
        result |= deepSearch(root.neighbor[i],target,path);
    }
    return result ? true : false;
}

// console.log(deepSearch(a,'N',[]));


function widthSearch (node,target,path) {

    if (node == null || node.length == 0) return false;

    var nextNodes = [];
    for (var i = 0 ; i < node.length ; i++) {
        if (path.indexOf(node[i]) > -1) {
            continue;
        }
        path.push(node[i]);
        if (node[i].value == target) {
            return true;
        } else {
            nextNodes = nextNodes.concat(node[i].neighbor)
        }
    }
    return widthSearch(nextNodes,target,path);

}
console.log(widthSearch([a],'A',[]))



