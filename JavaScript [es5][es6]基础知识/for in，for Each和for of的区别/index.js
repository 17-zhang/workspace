// 来源：https://www.cnblogs.com/guoxianglei/p/7044107.html

/**
 *  1、forEach循环，不能跳过或者终止循环
 */

const a = ["a","ss","cc"]
    a.dd="11"
    a.forEach(index =>{
//        if (index ==='ss') {
//            break;
//        }   // 终止循环 如果终止循环会报错
        console.log(index)
})  // a ss cc


/**
 * 2、for in循环， 返回可枚举的属性
 * */

for(index in a){
    console.log(a[index])
}  // a ss cc 11  // 返回可枚举的属性


/**
 * 3、for of 循环，ES6用法  可终止循环
 * */

for (let index of a) {
    if (index === 'ss') {
        continue  // break
    }
    console.log(index)
} // a ss cc