// 来源：https://segmentfault.com/a/1190000012785212


// 1、什么是闭包？

var local = '变量';    // 声明变量
function foo() {    // 声明函数
    console.log(local);   // 在函数的内部可以访问到local变量
}

/**
 * 闭包就是能够读取其他函数内部变量的函数。
 *
 * */


// 2、闭包的作用

!function () {

    var lives = 50;  // 声明变量

    window.奖励一条命 = function () {    // 一个闭包
        lives += 1;
    };

    window.死一条命 = function () {   // 另一个闭包
        lives -= 1;
    };

}();