// 来源：https://segmentfault.com/a/1190000015754436

// 1、变量声明const和let

/**
 * ES6之前，我们都是用var关键字声明变量，无论声明在何处，都会被视为声明在函数最顶部。
 *
 * 变量提升例子如下：
 * */

function a() {
    if (bool) {
        var str;  // 变量提升
        str = 'frontend';
    } else {
        // 此处访问str值为undefined
        console.log(str);
    }
}

/**
 * ES6之后，我们用let表示变量，const表示常量，let和const都是块级作用域。
 *
 * 块级作用域：
 *      在一个函数内部
 *      在一个代码块内部
 * 通常来说{}大括号内的代码块即为let和const的作用域
 * */

function a() {
    if (bool) {
        let str = 'frontend';
    } else {
        // str在此处访问不到
        console.log(str);   // undefind
    }
}

/**
 *  let的作用域是它当前所在的代码块，但不会被提升到当前函数的顶部。
 *  const声明的变量会被认为常量，表示它的值设置后就不能再更改。
 *
 * */


/**
 * 一道面试题
 * */

var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}
funcs.forEach(function (func) {
    func()
})

// 输出10次  0-9

/**
 * ES5利用闭包解决这个问题：
 * */

var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(
        (function (value) {
            return function () {
                console.log(value);
            }
        })(i)
    )
}
funcs.forEach(function (func) {
    func()
})

/**
 * ES6解决
 * */

const funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}
funcs.forEach(func => func());


// 2、模板字符串


/**
 * 第一个用途，基本的字符串格式化。将表达式嵌入字符串中进行拼接。用${}来及界定。
 * */

// es5
var name = 'frontend';
console.log('hello' + name);    // hellofrontend

// es6
const name = 'frontend';
console.log(`hello ${name}`);  // 报错？

/**
 * 第二个用途，在ES5我们通过反斜杠()来做多行字符串或字符串一行行拼接。ES6反引号('')直接搞定。
 * */

// es5
var msg = 'Hi \
\
man!'
console.log(msg);  // Hi man!

// es6
const template = '<div>' +
    '<span>hello world</span>' +
    '</div>';

/**
 * ES6其他字符串
 * */

/**
 * 1、includes: 判断是否包含然后直接返回布尔值
 * */
const str = 'hahay';
console.log(str.includes('y'));  // true

/**
 * 2、repeat: 获取字符串重复n次
 * */
const str = 'he';
console.log(str.repeat(3));  // 报错？

/**
 * 3、startsWith 和 endsWith 判断是否以 给定文本 开始或者结束
 * */
const str = 'hello world!';
console.log(str.startsWith('hello'));  // true
console.log(str.endsWith('!'));  // true


// 3、箭头函数

/**
 * 1、不需要function关键字来创建函数
 * 2、省略return关键字
 * 3、继承当前上下文的this关键字
 * */
[1, 2, 3].map(x => x + 1);

// 等同于
[1, 2, 3].map((function (x) {
    return x + 1
}).bind(this))

/**
 * 使用ES6重构一下代码
 * */
var calculate = function (x, y, z) {
    if (typeof x != 'number') {
        x = 0
    }
    if (typeof y != 'number') {
        y = 6
    }

    var dwt = x % y
    var result

    if (dwt == z) {
        result = true
    }
    if (dwt != z) {
        result = false
    }

    return result
}

// es6

const calculate = (x, y, z) => {
    x = typeof x !== 'number' ? 0 : x;
    y = typeof y !== 'number' ? 6 : y;
    return x % y === z;
};


// 4、拓展的对象功能

/**
 * ES5我们对于对象都是以键值对的形式书写，是有可能出现键值对重名的，如下：
 * */
function people(name, age) {
    return {
        name: name,
        age: age
    };
};

/**
 * ES6对象初始化简写
 * */

function people(name, age) {
    return {
        name,
        age
    }
}


/**
 * ES5对象添加方法
 * */

const people = {
    name: 'sa',
    getName: function () {
        console.log(this.name);
    }
}

/**
 * ES6通过省略冒号与function关键字，讲上面语法变得更加简洁
 * */

const people = {
    name: 'sa',
    getName() {
        console.log(this.name);
    }
}

/**
 * ES6对象提供了Object.assign()这个方法实现浅复制
 *
 * Object.assign()可以把任意多个源对象自身可枚举的属性拷贝给目标对象，然后返回目标对象，
 * 第一参数即为目标对象。
 * */

const objA = {name: 'cc', age: 18};
const objB = {address: 'beijing'};
const objC = {};   // 目标对象
const obj = Object.assign(objC, objA, objB);

console.log(objA);
console.log(objB);
console.log(objC);
console.log(obj);

Object.assign({}, objC, objA, objB);


// 5、更方便的数据访问--解构


/**
 * ES5我们提取对象的信息如下：
 * */
const people = {
    name: 'aa',
    age: 20
}
const name = people.name;
const age = people.age
console.log(name + '---' + age);

/**
 * ES6解构能让我们从对象或者数组里取出数据存为变量，例如
 * */
// 对象
const people = {
    name: 'sa',
    age: 20
}
const { name, age} = people
console.log('${name} --- ${age}');

// 数组
const color = ['red', 'blue'];
const [first, second] = color;
console.log(first)   // 'red'
console.log(second)   // 'blue'

/**
 * 面试题：请使用ES6重构以下代码：
 * 第一题：
 *      var jsonParse = require('body-parser').jsonParse
 * 第二题：
 *      var body = request.body
 *      var username = body.username
 *      var password = body.password
 * */
// 1
import { jsonParse } from 'body-parser';

// 2
const { body, body: { username, password }} = request


// 6、Generators---生成器


/**
 * 生成器（Generators）是能返回一个迭代器的函数。生成函数本身也是一种函数，最直观的表现是
 * 比普通的function多个*,在其函数体内可以使用yield关键字，函数遇到每个yiel后暂停。
 *
 * */
//生成器
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
// 生成器能像正规函数那样被调用，但会返回一个迭代器
let iterator = createIterator();

console.log(iterator.next().value);  // 1
console.log(iterator.next().value);  // 1
console.log(iterator.next().value);  // 1


