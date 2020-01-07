
/**
 * 快速排序就是找到中间值把它截取出来。小于中间值的放左边，其余的放在右边，然后递归
 * 
 * 数组内只能是纯数字
 * @param {*} arr 
 */


// function quickSort (arr) {
//     var leftArr = [];
//     var rightArr = [];
//     var middleIndex = Math.floor(arr.length / 2);
//     var middleValue = arr.splice(middleIndex,1)[0];
    

//     if (arr.length <= 1) {
//         return arr;
//     }

//     for (var i = 0 ; i < arr.length ; i++) {
//         if ( arr[i] < middleValue) {
//             leftArr.push(arr[i])
            
//         } else {
//             rightArr.push(arr[i])
//         }
//     }
//     console.log(middleValue)
//     console.log(leftArr);
//     console.log(rightArr);
//     return quickSort(leftArr).concat(middleValue,quickSort(rightArr));
// }


// 标准快排

/**
 * 
 * @param {*} arr 要排序的数组
 * @param {*} begin 起始位置索引
 * @param {*} end 终止位置索引
 */
function quickSort (arr,begin,end) {

    if (begin >= end - 1) return;
    
    var left = begin;   //定义两个指针，一个指向起始位置的索引,一个指向末尾位置的索引
    var right = end;

    // 当左边的索引位置小于右边的索引位置就继续循环

    do {
        // 这里边的两个do。。while循环主要就是改变指针的位置，和看看是否满足左右两边交换

        // 先比较左边的第二位位置是否小于起始位置，满足就让左边的指针一直往后加一，直到不满足的情况，才继续往下执行
        do left ++; while (left < right && arr[left] < arr[begin]);

        // 不管满足还是不满足条件先让右边的指针往前挪一位，然后右边指针位置挨个与begin位置比较，一旦右边的比起始位置还小，就要与上一步比左边大的那个位置进行交换
        do right --; while(right > left && arr[right] > arr[begin] );

        // 只要指针不相交，满足了左右两边交换，就执行交换
        if (left < right) {
            exchange (arr,left,right);
        }
    } while (left < right);

    // 等左右两边指针相交，简单的把小于begin位置的放到左边，大于begin位置的放到右边，然后把begin位置的数往中间一插，分成左右两边
    var swapPoint = left == right ? right - 1 : right;
    exchange(arr,begin,swapPoint);  
   

    // 这两步重新比较左右两边
    quickSort(arr,begin,swapPoint);
    quickSort(arr,swapPoint + 1,end);
}


/**
 * 交换位置
 */
function exchange (arr,a,b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

var arr = [3,4,64,3,3,2,4,6]

quickSort (arr,0,arr.length);

console.log(arr);