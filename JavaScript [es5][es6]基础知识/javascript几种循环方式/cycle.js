// 来源：https://segmentfault.com/a/1190000016110909

/**
 * JavaScript几种循环方式
 *      for
 *      forEach
 *      do...while
 *      while
 *      for...in
 *      for...of
 *      for...in vs for...of
 * */

/**
 * 1、for循环
 *
 *      可以使用break中断循环，可以使用continue继续循环
 * */
const list = ['a','b','c']
for (let i = 0; i < list.length; i++){
    console.log(list[i])  // a b c
    console.log(i)  // 0 1 2
}

/**
 * 2、forEach
 *
 * */
// 在ES5引入。给定一个数组，可以使用list.forEach（）迭代其属性
const list = ['a','b','c']
list.forEach((item, index) => {
    console.log(item);
    console.log(index);
})
// index is options
list.forEach(item => console.log(item));

/**
 * 3、do...while
 *
 * */
const list = ['a','b','c']
let i = 0
do {
    console.log(list[i])
    console.log(i)
    i = i + 1
} while (i < list.length)

// 可以使用break中断while循环
do {
    if (something) break
} while (true)

// 可以使用continue跳转到下一个迭代
do {
    if (something) continue

    // do something else
} while (true)

/**
 * 4、while
 * */
const list = ['a','b','c']
let i = 0
while (i < list.length) {
    console.log(list[i])  // value
    console.log(i)  // index
    i = i + 1
}

// 与do...while的区别在于do...while总是至少执行一次循环

/**
 * 5、for...in
 *
 *      迭代对象的所有可枚举属性，给出属性名称。
 * */
for (let prototype in object) {
    console.log(prototype)  // prototype name
    console.log(object[prototype])  // prototype value
}

/**
 * 6、for...of
 *
 *  ES2015引入了for循环，它结合了forEach的简洁性和破解能力
 * */
// iterate over the value
for (const value of ['a','b','c']) {
    console.log(value)  // value
}

// get the index as well, using 'entries()'
for (const [index, value] of ['a','b','c'].entries()) {
    console.log(index)  // index
    console.log(value)  // value
}

/**
 * for...in与for...of的区别：
 *
 *      for...of迭代属性值
 *      for...in迭代属性名称
 * */



