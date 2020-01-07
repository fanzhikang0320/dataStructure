function Node (value) {
    this.value = value;
    this.childs = [];
}

var a = new Node ('A');
var b = new Node ('B');
var c = new Node ('C');
var d = new Node ('D');
var e = new Node ('E');
var f = new Node ('F');

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);

b.childs.push(d);
b.childs.push(e);

function deepSearch (root,target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var result = false;
    for ( var i = 0 ; i < root.childs.length; i++) {
        result |= deepSearch(root.childs[i],target);
    }
    return result ? true : false;
}
console.log(deepSearch(a,'A'));

//广度优先搜索

function widthSearch (roots,target) {
    if (roots == null || roots.length == 0) return false;
    var childs = [];
    for (var i = 0 ; i < roots.length ; i++) {
        if (roots[i].value == target) {
            return true;
        } else {   
            childs = childs.concat(roots[i].childs)
        }
    }
    return widthSearch(childs,target)
}

// console.log(widthSearch([a],'g'));
