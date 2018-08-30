/**
 * 要想把this的值从一个上下文传到另一个，就要用call和apply方法。
 * */

// 一个对象可以作为call和apply的第一个参数，并且this会绑定到这个对象
var obj= { a: 'Custom'}

// 这个属性实在global对象定义中
var a = 'Global'

function whatsThis(arg) {
    return this.a  // this的值取决于函数的调用方式
}

whatsThis()  // Global
whatsThis.call(obj)  // Custom
whatsThis.apply(obj) // Custom
