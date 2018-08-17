// 来源：https://segmentfault.com/a/1190000011363171

//创建对象

// 1、使用构造函数创建
var obj = new Object();

// 2、字面量创建
var obj = {}

// 3、工厂模式
/**
 * 使用构造函数和字面量创建对象，会导致很多代码重复和冗余，如下：
 * */
var p1 = new Object();
p1.name = "zhangsan"
p1.age = '16'
p1.showName = function () {
    return this.name
}

var p2 = new Object();
p2.name = "lisi"
p2.age = '26'
p2.showName = function () {
    return this.name
}

console.log(p1);  // name: "zhangsan", age: "16", showName: ƒ
console.log(p2);  // name: "lisi", age: "26", showName: ƒ

/**
 * 使用工场模式：
 * */

function createPerson(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.showName = function () {
        return this.name;
    };
    return obj;
}

var p1 = createPerson('张三', 16);
var p2 = createPerson('李四', 26);

console.log(p1);  // name: "zhangsan", age: "16", showName: ƒ
console.log(p2);  // name: "lisi", age: "26", showName: ƒ

// 4、构造模式
/**
 * 上面工厂模式虽然解决了创建多个对象的问题，但是却无法判断对象的类型，因为都是Object类型，
 * 无法识别 Array、或是function类型，重写上面例子如下：
 *
 * */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name)
    }
}

var p1 = new Person('张三', 16);
var p2 = new Person('李四', 26);

console.log(p1);  // name: "zhangsan", age: "16", showName: ƒ
console.log(p2);  // name: "lisi", age: "26", showName: ƒ

/**
 * 从上面代码可以得知：
 *   1、没有显示创建对象
 *   2、直接在this上添加属性和方法
 *   3、没有return
 *
 * 另外还使用了new操作符，要创建一个对象，必须使用new操作符。
 * 使用new操作符调用构造函数，经历如下几个阶段：
 *   1、创建一个对象
 *   2、把创建对象的值赋值给this
 *   3、执行函数中的代码，即把属性和方法添加到赋值之后的this
 *   4、返回新对象
 * */

/**
 * 构造函数虽然解决了同名属性重复问题，但也存在每个实例方法都需要创建一遍。如下：
 * */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = new Function('console.log(this.name);');
}

var p1 = new Person('张三', 16);
var p2 = new Person('李四', 26);
console.log(p1.showName === p2.showName);  // false

/**
 * 解决如上问题：把showName变成全局函数
 * */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = showName;
}

function showName() {
    console.log(this.name);
}

// 5、原型模式

/**
 * 什么是原型？
 * 当每个函数被创建时，都会给函数设置一个prototype(原型)属性，这个属性是个指针，都会指向一个对象。
 * 默认情况下，都会为prototype对象添加一个constructor属性，指向该函数。
 *
 *   Person.prototype.constructor = Person;
 * */
function Person() {

}
Person.prototype.name = '张三';
Person.prototype.friends = ['张三', '李四']；
Person.prototype.showName = function () {
    console.log(this.name);
}
var p1 = new Person();
var p2 = new Person();

console.log(p1.__proto__ === Person.prototype);  // true
console.log(Person.prototype.isPrototypeOf(p1));  // true


// 6、组合使用构造函数模式和原型模式

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ['张三','李四'];  // this.friends = new Array('张三','李四')
}

Person.prototype.showName = function () {
    console.log(this.name);
};

var p1 = new Person('Joe');
var p2 = new Person('Alex');
p1.friends.push('王五');

console.log(p1.friends);  // ["张三", "李四", "王五"]
console.log(p2.friends);  // ["张三", "李四"]

console.log(p1);

console.log(p1.showName === p2.showName);  // true


