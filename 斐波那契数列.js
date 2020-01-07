
// function febo (n) {
//     if (n < 1) return -1;
//     if (n == 1) return 0;
//     if (n == 2) return 1;
//     var a = 0;
//     var b = 1;
//     var c = 0;

//     for (var i = 3 ; i <= n ; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }

// console.log(febo(3));

function febo (n) {
    if (n < 1) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return febo (n - 1) + febo(n - 2);
}

// 青蛙跳台阶

// 如果青蛙一次只能跳一节或者两节台阶，那么跳上第n级台阶有几种跳法

// function jump (n) {
//     if (n <= 0) return -1;
//     if (n == 1) return 1;
//     if (n == 2) return 2; 
//     return jump(n - 1) + jump (n-2);
// }

// 变态青蛙跳台阶
function jump (n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;

    var result = 0;

    for (var i = 1 ; i < n ; i++) {
        result += jump(n-1);
    }
    return result + 1;  //加1表示从底层直接跳上去的
}


