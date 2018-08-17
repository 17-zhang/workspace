// 来源：https://segmentfault.com/a/1190000004505028


// 1、使用Promise

/**
 *  Promise是ES6之后原生的对象，只需要进行实例化就可以直接使用。
 *
 * */

var promise = new Promise(function (resolve, reject) {

    console.log('begin do something');

    if (Math.random() * 10.0 > 5) {
        console.log('run success');
        resolve();   // 如果成功就调用resolve
    } else {
        console.log('run failed');
        reject();   // 失败就调用reject
    }
});

/**
 * Promise.prototype.then是Promise执行之后的回调，可以用then方法分别指定resolve和reject的回调。
 * */

promise.then(function () {
    console.log('resolve from promise');
}, function () {
    console.log('reject from promise');
});


// 2、使用Promise进行网络请求

getRequest = function (url) {
    var promise = new Promise(function () {
        var request = require('request');
        request(url, function (error, respones, body) {
            if (error) {
                reject(error);
                return;
            }
            if (respones.statusCode == 200) {
                resolve(body)
            } else {
                reject(respones.status);
            }
        });
    });
    return promise;
};

getRequest('https://github.com/').then(function (result) {
    console.log(result);
}, function (error) {
    console.error('error', error)
});
