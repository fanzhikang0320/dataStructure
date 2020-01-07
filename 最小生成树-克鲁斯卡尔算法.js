
/**
 * 俗称：加边法
 * 1.选择最短的边进行连接
 * 2.要保证边连接的两端至少有一个点是新的点
 * 3.或者这个边是将两个部落进行连接的
 * 4.重复1-3，直到将所有点都连接到一起
 */

function Node (value) {
    this.value = value;
    this.neibor = [];
}

var a = new Node ('A');
var b = new Node ('B');
var c = new Node ('C');
var d = new Node ('D');
var e = new Node ('E');

var pointArr =  [];
pointArr.push(a);
pointArr.push(b);
pointArr.push(c);
pointArr.push(d);
pointArr.push(e);


var max = 100000;

var distance = [
    [0,4,7,max,max],
    [4,0,8,6,max],
    [7,8,0,5,max],
    [max,6,5,0,7],
    [max,max,max,7,0]
];

/**
 * 判断两点之间是否能够连接
 * @param {*} resultList 
 * @param {*} begin 起点
 * @param {*} end 终点
 */
function canLink (resultList,TempBegin,TempEnd) {

    var beginIn = null;
    var endIn = null;
    // 遍历部落
    for (var i = 0 ; i < resultList.length ; i ++) {
        // 判断当前部落是否含有起始点，如果有
        if (resultList[i].indexOf(TempBegin) > -1) {
            beginIn = resultList[i];
        }
        // 判断当前部落是否含有终点
        if (resultList[i].indexOf(TempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    // 两个点都是新的点，都不在任何部落里，可以连接，产生新的部落
    // begin在A部落，end没有部落，  A部落扩充一个村庄
    // begin，没有部落，end在B部落 ， B部落扩充一个村庄
    // begin在A部落，end在B部落，A部落跟B部落合并为一个新的部落
    // begin和end在同一个部落 不可以连接
    // 如果当前的起始点和终点都不是空，并且起始点等于终点，说明不能连接
    if (beginIn != null && endIn != null && beginIn == endIn) {
        return false;
    }

    return true;
}

/**
 * 将两个点进行连接
 * @param {*} resultList 
 * @param {*} begin 
 * @param {*} end 
 */
function link (resultList,tempBegin,tempEnd) {
    var beginIn = null;
    var endIn = null;

    for (var i = 0 ; i < resultList.length ; i ++) {

        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
// 两个点都是新的点，都不在任何部落里，可以连接，产生新的部落
// begin在A部落，end没有部落，  A部落扩充一个村庄
// begin，没有部落，end在B部落 ， B部落扩充一个村庄
// begin在A部落，end在B部落，A部落跟B部落合并为一个新的部落
// begin和end在同一个部落 不可以连接


    //当两个点都是新的点
    if (beginIn == null && endIn == null) {
        var newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        resultList.push(newArr);

    } else if (beginIn != null && endIn == null ) {//当起始点已经连接，终点没有连接
        beginIn.push(tempEnd);
    } else if (beginIn == null && endIn != null) {//当终点已经连接，起始点没有连接
        endIn.push(tempBegin);
    } else if (beginIn != null && endIn != null && beginIn != endIn) {//当起始点连接，终点也已经连接，并且终点跟起始点连接的不一样的部落
        var allIn = beginIn.concat(endIn);  //将两个部落进行拼接

        // 清空多余的部落，把拼接的两个部落重新放进存放部落的数组当中
        var needRemoveIndex = resultList.indexOf(endIn);
        resultList.splice(needRemoveIndex,1);

        needRemoveIndex = resultList.indexOf(beginIn);
        resultList.splice(needRemoveIndex,1);

        resultList.push(allIn);
    }

    tempBegin.neibor.push(tempEnd);
    tempEnd.neibor.push(tempBegin);
}   
/**
 * 
 * @param {*} pointArr 点的集合
 * @param {*} distance 边的集合
 */
function kruskal (pointArr,distance) {

    var resultList = []; //这里是用来存放部落的它是一个二维数组，每个数组存放相连的点
    while (true) {
        var minDis = max;   //初始化最小值
        var begin = null;   //定义一个起点
        var end  = null;    //定义一个终点
    
        for (var i = 0 ; i < distance.length; i ++) {
            for (var j = 0 ; j < distance[i].length ; j ++) {
                tempBegin = pointArr[i];    //从第一个点开始进行比较
                tempEnd = pointArr[j];  //依次与每个点进行比较

                //判断两点之间的距离是否小于当前最小的距离，除去自己跟自己进行比较，并且判断当前的两个点是否能够连接
                if (i !== j && distance[i][j] < minDis && canLink(resultList,tempBegin,tempEnd)) {
                    minDis = distance[i][j];    //更新最小距离
                    begin = tempBegin;  //更新起始点
                    end = tempEnd;  //更新终点
                }
            }
        }
    
        link(resultList,begin,end); //连接两点，

        // 如果存放部落的长度为1，并且这个部落的长度为1，说明已经将所有的点进行了连接
        if (resultList.length == 1 && resultList[0].length == pointArr.length) {
            break;
        }
    }
}


kruskal(pointArr,distance);

console.log(pointArr);