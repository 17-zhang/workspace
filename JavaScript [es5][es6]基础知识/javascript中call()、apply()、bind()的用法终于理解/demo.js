// 来源：https://www.cnblogs.com/Shd-Study/archive/2017/03/16/6560808.html

/**
 * 例1
 */
var name = '小王', age = 17;
var obj = {
    name: '小张',
    objAge: this.age,  // this指向了obj
    myFun: function () {
        console.log(this.name + "年龄" + this.age)
    }
}
obj.objAge;
obj.myFun(); //小张年龄undefined

/**
 *  例2
 */
var fav = "盲僧";
function show() {
    console.log(this.fav);  // this指向了window
}
show(); // 盲僧


/**
 * call() apply bind()都是用来重新定义this这个对象的
 */
var name = '小王', age = 17;
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function () {
        console.log(this.name + "年龄" + this.age);
    }
}
var db = {
    name: '德玛',
    age: 99
}

obj.myFun.call(db);  // 德玛年龄99
obj.myFun.apply(db); // 德玛年龄99
obj.myFun.bind(db)(); // 德玛年龄99

/**
 * 以上bind方法后面多个()外，结果返回都一致！
 * 由此得出结论,bind返回的是一个新的函数，你必须调用它才会被执行
 */

var name = '小王', age = 17;
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function () {
        console.log(this.name + "年龄" + this.age, "来自" + fm + "去往" + t);
    }
}
var db = {
    name: '德玛',
    age: 99
}

obj.myFun.call(db, '成都','上海');  //德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db, ['成都', '上海']);  //德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db, '成都', '上海')();  //德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db, ['成都','上海'])();  //德玛 年龄 99  来自 成都去往上海

/**
 * 总结:
 * call,apply,bind这三个函数的第一个参数都是this的指向对象，第二个参数差别就不一样了：
 *   call的参数是直接放进去的，第二第三第n参数全都用逗号分隔。
 *   apply的所有参数都必须放在一个数组里面穿进去
 *   bind除了返回函数以外，它的参数和call一样。
 *
 *   当然，三者的参数不限定为string类型，允许是各种类型，包括函数、Object等。
 */

