function Node (val) {
    this.value = val;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;


// function nizhi (root) {
//     if (root.next != null) {
//         //此处return是为了最后的返回结果
//         return nizhi(root.next);    
//     } else {
//         return root;
//     }
// }


function nizhi (root) {
    if (root.next.next == null) {
        root.next.next = root;
        return root.next;
    } else {
        var res = nizhi(root.next);
        root.next.next = root;
        root.next = null;
        return res;
    }
}
console.log(nizhi(node1));



// function bianlink (root) {
//     if (root == null) return;
//     console.log(root.value);
//     bianlink(root.next);
// }

// bianlink(node1);



// var arr = [1,2,3,4];

// function bianArr (arr,i) {
//     if (arr[i] == null) return;
//     console.log(arr[i]);
//     bianArr(arr,i+1); 
// } 

// bianArr(arr,0);