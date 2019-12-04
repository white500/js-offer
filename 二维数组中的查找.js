//题目描述
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 解题思路
// 运用二维数组从左到右递增，每列从上到下递增规律，然后用目标target去对比二维数组右上角
// 有三种情况 
// 1.如果目标等于右上角 直接找到返回true
// 2.如果目标小于右上角 说明这一列都没有 然后向左移一列
// 3.如果目标大于右上角 说明这一行都没有 然后向下移一行

// 定义函数 find 来实现该题

function find(target, array) {
    var rows = array.length;
    var cols = array[0].length;
    for(var i=0,j=cols-1;i<rows && j>=0;) {
        if(target == array[i][j]){
            return true
        } else if (array[i][j] > target) {
            j--
        } else {
            i++
        }
    }
    return false
}