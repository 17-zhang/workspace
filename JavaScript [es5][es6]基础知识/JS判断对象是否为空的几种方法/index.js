// 来源：https://blog.csdn.net/qq_38627581/article/details/77353015

/***
 * 1、将json对象转换成json字符串，再判断该字符串是否为“{}”
 */

var data = {};
var b = (JOSN.stringify(data) === "{}");
alert(b); // true


/**
 * 2、使用for循环
 * */

var obj = {};
var b = function () {
    for (var key in obj) {
        return false;
    }
    return true;
}
alert(b()); // true


/**
 * 3、jquery的isEmptyObject方法
 *      此方法是jquery讲2方法（for in）进行封装，使用时需要依赖jquery
 * */

var data = {};
var b = $.isEmptyObject(data);
alert(b);  // true


/**
 * 4、Object.getOwnPropertyNames()方法
 *
 *      此方法是使用Object对象的getOwnPropertyName方法，获取对象中的属性名，存到一个数组中，
 *      我们可以通过判断数组的length来判断此对象是否为空
 * */

var data = {};
var arr = Object.getOwnPropertyNames(data);
alert(arr.length === 0);  // true


/**
 * 5、使用ES6的Object.keys()方法
 * */

var data = {}
var arr = Object.keys(data);
alert(arr.length === 0); // true