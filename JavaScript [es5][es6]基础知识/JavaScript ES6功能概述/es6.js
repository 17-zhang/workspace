// 来源：https://segmentfault.com/a/1190000016023769


// JAVASCRIPT ES6 功能概述


/**
 * 1、块级作用域
 */
// es5
var x = 'outer';
function test(inner) {
    var x; 
    if (inner) {
        x = 'inner';
        return x;
    }
    return x;
}
// es6
let x = 'outer';
function test(inner) {
    if (inner) {
        let x = 'inner';
        return x;
    }
    return x;   // gets result from line 1 as expected
}
test(false);    // outer
test(true); // inner

/**
 * 在ES6中，let将变量提升到块的顶部（ES5是提升到函数的顶部）
 * let被限制为块级作用域。在声明之前不能使用它。
 * */
// es5
{
    var private = 1;
}
console.log(private)  // 1



/**
 * 2、解构分配
 * */

// 从数组中获取元素

// es5
var array = [1,2,3,4];
var first = array[0];
var third = array[2];
console.log(first, third);  // 1 3

// es6
const array = [1,2,3,4];
const [first, ,third] = array;
console.log(first, third);  // 1 3

// 交换values


// es5
var a = 1;
var b = 2;
var tmp = a;
a = b;
b = tmp;
console.log(a, b);  // 2 1

// es6
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b);   // 2 1


// 多次返回值的解构

// es5
function margin() {
    var left = 1,
        right = 2,
        top = 3,
        bottom = 4;
    return {
        left: left,
        right: right,
        top: top,
        bottom: bottom
    }
}
var data = margin();
var left = data.left;
var bottom = data.bottom;
console.log(left, bottom)   // 1 4

// es6,调用者只选择他们需要的数据
function margin() {
    const left = 1, right = 2, top = 3, bottom = 4;
    return {
        left,
        right,
        top,
        bottom
    }
}
const {left, bottom} = margin();
console.log(left,bottom); // 1 4

// 参数匹配的解构

// ES5
var user = {
    firstName: 'zhang',
    lastName: 'san'
};
function getFullName(user) {
    var firstName = user.firstName;
    var lastName = user.lastName;
    return firstName + '' + lastName;
}
console.log(getFullName(user));  // zhangsan

// es6,更加简洁
const user = {
    firstName: 'zhang',
    lastName: 'san'
};
function getFullName({firstName,lastName}) {
    return ${firstName} ${lastName}
};
console.log(getFullName(user))

// 深拷贝

// es5
function setting() {
    return {
        display: {color: 'red'},
        keyboard:{layout: 'query'}
    };
}
var tmp = setting();
var displayColor = tmp.display.color;
var keyboardLayout = tmp.keyboard.layout;
console.log(displayColor,keyboardLayout)  // red query

// es6
function settings() {
    return {
        display: {color: 'red'},
        keyboard: {layout: 'query'}
    };
}
const {
    display: {color: displayColor},keyboard: {layout:keyboardLayout}
} = settings();
console.log(displayColor, keyboardLayout);  // red query

/**
 * 这也称为对象解构。
 * 最佳做法：
 *      使用数组解构来获取元素或交换变量。它可以帮助你避免创建临时引用。
 *      不要对多个返回值使用数组解构，而是使用对象解构。
 * */


/**
 * 3、类和对象
 *
 * 在JavaScript中，每个对象都有一个原型，所有JavaScript对象都从其继承其方法和属性。
 * */

// 在es5中，我们使用构造函数来创建面向对象编程（OOP）
var Animal = (function () {
    function MyConstructor(name) {
        this.name = name;
    }
    MyConstructor.prototype.speak = function speak() {
        console.log(this.name + 'makes a noise.')
    };
    return MyConstructor;
})();

var animal = new Animal('animal');
animal.speak();  // animal makes a noise.

// es6
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak () {
        console.log(this.name + 'makes a noise.');
    }
}
const animal = new Animal('animal');
animal.speak();  // animal makes a noise.


/**
 * 继承
 * */
//在es5中更多涉及的是原型继承
var Lion = (function () {
    function MyConstructor() {
        Animal.call(this, name);
    }
    MyConstructor.prototype = Object.create(Animal.prototype);
    MyConstructor.prototype.constructor = Animal;
    MyConstructor.prototype.speak = function speak() {
        Animal.prototype.speak.call(this);
        console.log(this.name + 'roars');
    };
    return MyConstructor;
})();
var lion = new Lion('Simba');
lion.speak();

// es6
class Lion extends Animal{
    speak(){
        super.speak();
        console.log(this.name + 'roars');
    }
}
const lion = new Lion('Simba');
lion.speak();


/***
 * 4、Promise
 *
 */

// es5
function printAfterTimeout(string, timeout, done) {
    setTimeout(function () {
        done(string);
    },timeout);
}
printAfterTimeout('Hello', 2e3, function (result) {
    console.log(result);
    printAfterTimeout(result + 'Reader', 2e3, function (result) {
        console.log(result);
    });
});

// es6
function printAfterTimeout(string, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(string);
        }, timeout);
    });
}
printAfterTimeout('Hello', 2e3).then((result) => {
    console.log(result);
    return printAfterTimeout(result + 'Render', 2e3);
}).then((result) => {
    console.log(result);
})


/**
 * 5、箭头函数
 * */

// es5
var _this = this;
$('.btn').click(function (event) {
    _this.sendData();
});
$('.input').on('change', function (event) {
    this.sendData();
}.bind(this));

// es6
$('.btn').click((event) => this.sendData());

const ids = [291, 288, 984];
const messages = ids.map(value => 'ID is ${value}');

/**
 * 迭代 For...of
 */
// es5
var array = ['a','b','c','d'];
for (var i=0;i< array.length;i++){
    var element = array[i];
    console.log(element);
}
array.forEach(function (element) {
    console.log(element);   // a b c d a b c d
})

// es6
const array = ['a','b','c','d'];
for (const element of array) {
    console.log(element);
}

/**
 *  6、Rest parameters
 *  我们从参数到休息参数和传播运算符
 */
// es5
function printf(format) {
    var params = [].slice.call(arguments, 1);
    console.log('params', params);
    console.log('format', format)
}

// es6
function prinf(format, ...params) {
    console.log('params:', params);
    console.log('format:',format);
}

/**
 * 7、扩展运算符
 * */

// es5
Math.max.apply(Math, [2,100,1,6,43])  // 100

// es6
Math.max(...[2,100,1,6,43])  // 100

/**
 * 另外，我们从concat数组中开始使用 spread运算符：
 */
// es5
var array1 = [2,100,1,6,43];
var array2 = ['a','b','c','d'];
var array3 = [false, true, null, undefined];
console.log(array1.concat(array2, array3));   // [2, 100, 1, 6, 43, "a", "b", "c", "d", false, true, null, undefined]

// es6
const array1 = [2,100,1,6,43];
const array2 = ['a','b','c','d'];
const array3 = [false, true, null, undefined];
console.log([...array1, ...array2, ...array3]);  // [2, 100, 1, 6, 43, "a", "b", "c", "d", false, true, null, undefined]