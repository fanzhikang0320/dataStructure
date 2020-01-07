
function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function trave_before (root) {
    if (root == null) return ;
    console.log(root.value);
    trave_before(root.left);
    trave_before(root.right);
}

trave_before(a);

// function trave_center (root) {
//     if (root == null) return;
    
//     trave_center(root.left);
//     console.log(root.value);
//     trave_center(root.right);
// }

// trave_center(a);


// function trave_after (root) {
//     if (root == null) return;
//     trave_after(root.left);
//     trave_after(root.right);
//     console.log(root.value); 
// }

// trave_after(a);