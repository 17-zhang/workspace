// 来源：https://segmentfault.com/a/1190000016418021

/**
 * 一、利用ES6 Set去重(ES6最常用)
 */
function unique(arr) {
    return Array.from(new Set(arr))  // Array.from方法可以将 Set 结构转为数组。
}
unique([1,1,1,2,2,3,3,3,4])  // [1,2,3,4]

/** [...new Set(arr)] 简化代码。
 *
 *  let arr = [3,5,2,2,2,5,5,3]
 *  let unique = [..new Set(arr)];
 *
 *  // [3, 5, 2]
 * */

/**
 * 二、利用for嵌套for,然后splice去重(ES5最常用)
 */

function unique(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){  // 第一个等同于第二个，splice方法删除第二个
                arr.splice[j, 1];
                j--;
            }
        }
    }
    return arr;
}
/*unique([1,1,1,2,2,3,3,3,4]) */


/**
 * 三、利用indexOf去重
 */

function unique(arr) {
    if (!Array.isArray(arr)) {  // 确定对象为数组。
        console.log('type error！')
        return
    }

    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}


/**
 * 四、利用Map数据结去重
 */

function arrayNonRepeatfy(arr) {
    let map = new Map();
    let array = new Array(); // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false);  // 如果没key值
            array.push(arr[i]);
        }
    }
    return array;
}


/**
 * 五、利用sort()去重
 */

function unique(arr) {
    if (!Array.isArray(arr)) {  // 确定对象为数组。
        console.log('type error!')
        return;
    }
    arr = arr.sort();
    var array = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            array.push(arr[i]);
        }
    }
    return array;
}


