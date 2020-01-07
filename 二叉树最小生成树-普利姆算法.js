

/**
 * 俗称：加点法
 * 1.任选一个点为起点，
 * 2.找到以当前选中点为起点路径最短的边
 * 3.如果这个边的另一端没有被联通进来，那么就连接
 * 4.如果这个边的另一端已经被连接进来，则看倒数第二短的边
 * 5.重复2-4过程，直到将所有的点都联通为止
 */


/**
 * 创建图的节点
 * @param {*} value 
 */
function Node (value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node ('A');
var b = new Node ('B');
var c = new Node ('C');
var d = new Node ('D');
var e = new Node ('E');



// 表示一张图，可以用点集合和边集合进行表示

var pointSet = []; //声明点的集合

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

var max = 100000;
// 声明边的距离集合
var distance = [
    [0,4,7,max,max],
    [4,0,8,6,max],
    [7,8,0,5,max],
    [max,6,5,0,7],
    [max,max,max,7,0]
]


/**
 * 找到点所在的位置，用于确定该点所对应的边的集合
 * @param {*} str 
 */
function getIndex (str) {

    for (var i = 0 ; i < pointSet.length ; i ++) {
        if (str == pointSet[i].value) {
            return i;
        }
    }

    return -1;
}



/**
 * 根据当前已经有的节点，来进行判断，获取到距离最短的点
 * @param {*} pointSet 所有点的集合
 * @param {*} distance 边的集合
 * @param {*} nowPointSet 当前已经连接过的点的集合
 */
function getMinDisNode (pointSet,distance,nowPointSet) {

    var fromNode = null;    //线段的起点，默认为空
    var minDisNode = null;  //线段的终点，默认为空
    var minDis = max;   //默认最短的距离为max

    // 根据当前已有这些点为起点，以此判断连接其他的点的距离是多少
    for (var i = 0 ; i < nowPointSet.length ; i ++) {

        // 找到该点所对应的边的集合
        // console.log(pointSet[i]);
        var nowPointIndex = getIndex(pointSet[i].value);

        // console.log(nowPointIndex);
        // console.log(distance[nowPointIndex])
        for (var j = 0 ; j < distance[nowPointIndex].length ; j ++) {

            var thisNode = pointSet[j]; //thisNode表示distance当中的点，但是这个点不是对象

            // 判断 这个点首先不能是已经连接过的点,并且点之间的距离是目前最短的距离
            if (nowPointSet.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < minDis) {
                
                fromNode = nowPointSet[i];
                minDisNode = thisNode;
                minDis = distance[nowPointIndex][j];
            }
        }
    }

    fromNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(fromNode);

    return minDisNode;

}



/**
 * 普利姆算法
 * @param {*} pointSet 点的集合
 * @param {*} distance 边的集合
 * @param {*} start 起始点
 */
function prim (pointSet,distance,start) {
    var nowPointSet = [];
    //根据已有节点获取最小代价的边
    nowPointSet.push(start);
    while (true) {
        var minDisNode = getMinDisNode(pointSet,distance,nowPointSet);
        nowPointSet.push(minDisNode);

        if (nowPointSet.length == pointSet.length) {
            break;
        }
    }
}

prim(pointSet,distance,pointSet[2]);

// console.log(pointSet);

for (var i = 0 ; i < pointSet.length ; i ++) {
    console.log(pointSet[i]);
}
