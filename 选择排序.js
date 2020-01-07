
function compare (a,b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
function exchange (arr,a,b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function selectSort (arr) {

    if (arr.length == 0 || arr == null) {
        return ;
    }

    if (arr.length == 1) {
        return arr;
    }


    for (var i = 0 ; i < arr.length ; i ++) {
        var maxIndex = 0;
        for (var j = 0 ; j < arr.length - 1 - i ; j ++) {

            // 每次循环都去比较当前最大的值
            if (compare(arr[maxIndex],arr[j])) {
                // 如果当前位的值大于最大值，则交换索引
                maxIndex = j;
            }
            // 每次比较都把最大的那一个放到最后面
        }
        exchange(arr,maxIndex,arr.length - 1 - i); 
    }
  
}


var arr = [2,34,4,5,2,3,5,6];

selectSort (arr);

console.log(arr);