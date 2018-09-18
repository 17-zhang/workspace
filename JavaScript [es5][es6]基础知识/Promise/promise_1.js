// 来源：阮一峰es6 http://es6.ruanyifeng.com/#docs/promise


// 1、Promise的含义

/**
 * Promise对象两个特点：
 *  1、对象的状态不受外界影响。有三种状态：pending(进行中)、fulfilled(已成功)和rejected(已失败)
 *  2、一旦改变，就不会再变，任何时候都可以得到结果。Promise对象的状态只有两种可能：
 *  pending --> fulfilled  和 pending --> rejected 。
 *
 * */

// 2、基本用法

/**
 * ES6规定，Promise对象是一个构造函数，用来生成Promise实例。
 */

const promise = new Promise(function (resolve, reject) {
    // some code

    if ('异步操作成功') {
        resolve(value);
    } else {
        reject(error);
    }
});

/**
 * 使用then方法分别指定resolved状态和rejected状态的回调函数
 *
 * */

promise.then(function (value) {
    // success
}, function (error) {
    // failure
});


/**
 * 写一个Promise对象的简单例子
 */

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);  // done
});

/**
 * Promise 新建后就会立即执行。
 * */

let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('resolved.');
});

console.log('Hi！');

// Promise
// Hi!
// resolved.

/**
 * 异步加载图片的例子
 *
 * */

function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        Image.onload = function () {  // 如果加载成功就调用resolve方法
            resolve(image);
        };

        Image.onerror = function () {   // 否则调用reject方法
            reject(new Error('Could not load image at' + url));
        };

        image.src = url;
    });
}

/**
 * 下面用Promise对象实现 Ajax操作的例子。
 *
 * */

const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }

            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });
    return promise;
};

getJSON('/posts.json').then(function (json) {    // getJSON是对json数据发出Http请求
    console.log('Contents:' + json);
}, function (error) {
    console.log('出错了', error)
});


/**
 *  3、Promise.prototype.then()
 *
 *  它的作用视为Promise实例添加状态改变时的回调函数。
 *  then的第一个参数是resolved状态的回调函数，第二个参数(可选)是rejected状态的回调函数。
 */

/**
 * 4、Promise.prototype.catch()
 *   是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 */

// promise抛出一个错误，就被catch方法指定的回调函数捕获。

// 写法一：

const promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});
promise.catch(function (error) {
    console.log(error);
});

// 写法二

const promise = new Promise(function (resolve, reject) {
    reject(new Error('test'));
});
promise.catch(function (error) {
    console.log(error);
})



