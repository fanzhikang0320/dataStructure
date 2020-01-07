

//数组当中只能是纯数字

// function bubbleSort (arr) {
//     var length = arr.length;

//     if (length <=1) {
//         return arr;
//     }

//     for (var i = 0 ; i < length -1 ; i++) {
//         for (var j = 0 ; j < length - 1 - i ; j ++) {
//             if (arr[j] < arr[j + 1]) {
//                 var temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     return arr;
// }
// var arr = [2,3,4,5,6,6,6,6,8453,2,2,4,35]
// console.log(bubbleSort(arr));


// 方案二：


function selectSort (arr) {
    if (arr == null) {
        return ;
    }
    if (arr.length == 1) {
        return arr;
    }

    for (var i = 0 ; i < arr.length ; i ++) {
        for (var j = 0 ; j < arr.length - 1 - i; j ++ ) {
            if (compare(arr[j],arr[j + 1])) {
                exchange(arr,j,j+1)
            }
        }
    }
}

var arr = [3,4,5,2,1,3,54,53];

selectSort(arr);

console.log(arr);
// console.log(arr);



// 交换位置
function exchange (arr,a,b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


// 比较大小
function compare (a,b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}