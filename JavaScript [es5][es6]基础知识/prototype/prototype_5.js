// 来源：https://segmentfault.com/a/1190000000766541

//原型继承

// 1、基本模式

var Parent = function () {
    this.name = 'parent';
};
Parent.prototype.getName = function () {
    return this.name;
}
Parent.prototype.obj = {a : 1};

var Child = function () {
    this.name = 'child';    
}

Child.prototype = new Parent();   // 把父类的对象赋值给子类的构造函数的原型

var parent = new Parent();
var child = new Child();

console.log(parent.getName());  // parent
console.log(child.getName());  // clild

// 2、借用构造函数

var Parent = function (name) {
    this.name = name || 'parent';
};
Parent.prototype.getName = function () {
    return this.name;
};
Parent.prototype.obj = {a : 1};

var Child = function (name) {
    Parent.apply(this, arguments);
};
Child.prototype = new Parent();

var parent = new Parent('myParent');
var child = new Child('myChild');

console.log(parent.getName());   // myParent
console.log(child.getName());    // myChild

// 3、圣杯模式

