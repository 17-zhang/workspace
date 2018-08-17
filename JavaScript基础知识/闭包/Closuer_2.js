// 来源：https://segmentfault.com/a/1190000002911145

// 1、什么是闭包

/**
 * 闭包就是能够读取其他函数内部变量的函数。
 * */

function outer() {

    var a = 100;  // outer的局部变量

    function inner() {   // 闭包
        console.log(a);
    }

    return inner;    // 没有这条语句，闭包起不到outer外部访问变量a的作用。
}

console.log(a);  // 在外部直接访问a出错，Uncaught ReferenceError: a is not defined

var test = outer();   // outer运行完返回inner，赋值给test
test();   // 100,执行test(),相当于执行inner(),这样就可以访问到outer内部的a了


// 2、闭包的原理

function outer() {

    var a = 100;

    function inner() {
        console.log(a);
    }

    a = a + 50;   // 改变了a的值

    return inner;
}

var test = outer();

test();   // 150,取得a是150,而不是100

/**
 *  闭包只能取得包含函数中任何变量的最后一个值，即包含函数执行完毕时变量的值。
 * */


// 3、创建闭包的方式


with (obj) {
    // 这里是对象闭包
}


(function () {
    // 函数闭包
})();


try {
    // ...
} catch (e) {
    // catch闭包，但IE里不行
}


// 4、闭包的作用

/**
 *  1、在函数外面读取函数的局部变量（如上）
 * */

/**
 *  2、在内存中维持一个变量(PS:消耗内存，在IE中可能导致内存泄露)
 * */

function outer() {

    var a = 100;

    function inner() {
        console.log(a++);
    }

    return inner;
}

var test = outer();

test();   // 100
test();   // 101
test();   // 102
test();   // 103

/**
 *  3、实现面向对象中的对象
 *
 *  javascript并没有提供类这样的机制，但是可以通过闭包来模拟类的机制。
 *  把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），
 *  把内部变量当作它的私有属性（private value）。
 *
 * */

function Person() {

    var name = 'XiaoMing';

    return {
        setName: function (theName) {
            name = theName;
        },
        getName: function () {
            return name;
        }
    }
}

var person = new Person();

console.log(person.name);   // undefiend
console.log(person.getName());  // XiaoMing


// 4、几个闭包实例

/**
 * 闭包uniqueID
 * */

uniqueID = (function () {

    var id = 0;

    return function () {
        return id++;    // 返回，自加
    }

})();

console.log(uniqueID());  // 0
console.log(uniqueID());  // 1
console.log(uniqueID());  // 2
console.log(uniqueID());  // 3
console.log(uniqueID());  // 4

/**
 * 闭包阶乘
 * */

var a = (function (n) {
    if (n < 1) {
        alert('hello,world');
        return 0;
    }

    if (n == 1) {
        return 1;
    } else {
        return n * arguments.callee(n-1);  //  在函数名称未知的情况下用arguments.callee，ES5严格模式已经移除。
    }
})(4);

console.log(a);   // 24
