来源：https://segmentfault.com/a/1190000015980718


/**
 * 《Javascript权威指南》对闭包的定义
 *
 *  函数对象可以通过作用域相互关联起来，函数体内部变量可以保存在函数作用域内，这就是闭包。
 * */
var global = "global scope";  // 全局变量

function checkScope() {
    var scope = "local scope";  // 局部变量
    function f() {
        return scope;  // 在作用域中返回这个值
    };
    return f();
}
checkScope();  // local scope

/**
 * 严格来说，闭包要满足3个条件
 *  【1】访问所在所用域
 *  【2】函数嵌套
 *  【3】在所在作用域外被调用
 * */


/**
 * 1、我们为什么需要闭包
 * */
var counter = 0;
function add() {
    return counter += 1;
}
add();
add();
add();  // 3

/**
 *  2、使用闭包应注意的问题
 *
 *  由于闭包会携带包含它的函数的作用域，因此会占用更多的内存。因此可以手动解除对匿名函数的引用，
 *  以便释放内存
 * */

function f2() {
    var n = 22;
    var nAdd = function () {
        n++;
    }
    return function () {
        return {
            n:n,
            nAdd:nAdd()
        }
    }
}
// result2 就是创建了一个匿名函数
var result2 = f2();
// 调用函数
console.log(result2());   // {n: 22, nAdd: undefined}
result2().nAdd();
console.log(result2());
// 解除对匿名函数的引用，以便释放内存
result2 = null;




