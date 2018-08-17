// 来源: https://segmentfault.com/a/1190000000638443

/**
 * javascript中this指向大致有四种情况：
 * */

// 1、函数调用模式的时候，this指向window

function aa() {
    console.log(this)
}
aa();     // window


// 2、方法调用的时候，this指向方法所在的对象

var a={};
a.name = 'hello';
a.getName = function () {
    console.log(this.name)
}
a.getName();   // hello


// 3、构造函数模式的时候，this指向新生成的实例

function Aaa(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    }
}
var a = new Aaa('kitty');
a.getName();  // kitty

var b = new Aaa('bob');
b.getName();  // bob

// 4、apply/call调用模式的时候，this指向apply/call方法中的第一个参数

var list1 = {name: 'andy'};
var list2 = {name: 'peter'};

function d() {
    console.log(this.name)
}

d.call(list1);  // andy
d.call(list2);  // peter


