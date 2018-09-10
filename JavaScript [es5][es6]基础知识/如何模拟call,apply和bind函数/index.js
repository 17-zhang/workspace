// 来源：https://segmentfault.com/a/1190000016329715

/***
 *  怎样去模拟一个call函数？
 *
 *  思路：call一个非常重要的作用就是改变上下文环境的this,我们可以给用户传入的上下文对象上添加一个函数，
 *  通过这个上下文对象去执行函数，然后将这个函数删除，返回结果就可以了。
 *
 */

Function.prototype.myCall = function (context, ...args) {
    context = context || window;
    // 给上下文对象添加这个函数
    context.fn = this;
    // 通过这个上下文对象去执行函数
    let result = context.fn(...args);
    // 将这个函数删除
    delete context.fn;
    return result;
}


/**
 *  call既然都实现了，那么apply也是类似的，只不过传入的参数是一个数组而已。
 */

Function.prototype.myApply = function(context, arr) {
    context = context || window;
    arr = arr || [];
    let type = {}.toString.call(arr).slice(8,-1);
    if(type !== 'Array')
        throw new TypeError('CreateListFromArrayLike called on non-object');
    context.fn = this;
    let result = context.fn(...arr);
    delete context.fn;
    return result;
}

/**
 * 模拟bind函数，bind函数应该返回一个新的函数。
 */

Function.prototype.myBind  = function(context, ...args) {
    // 保存当前的函数
    let func = this;
    return function F(...params) {
        if(this instanceof F) {
            return new func(...args, ...params);
        }
        return func.apply(context,[...args,...params]);
    }
}