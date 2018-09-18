// 来源：https://segmentfault.com/a/1190000016329715#articleHeader10


/**
 * Fetch：
 *    1、Fetch API是基于Promise设计的
 *    2、容易同构(前后端运行同一套代码)
 *    3、语法简洁，更加语义化
 *    4、原生支持率不高，可以用polyfill兼容IE8+浏览器
 *
 * Fetch:常见问题：
 *    1、fetch请求默认不带cookie的，需要设置fetch(url, {credentials: 'include'})
 *    2、服务器返回400，500错误码时不会reject，只有网络错误导致不能完成时，才会reject
 *    3、Ie8/9的XHR不支持CORS跨域
 */

fetch(url).then(function (response){
    return response.json();
}).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})


/**
 * Ajax：
 *    1、设计粗糙，不关注分离原则
 *    2、基于事件的异步原型，不够友好
 */

var xhr = new XMLHTTPRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function () {
    console.log(xhr.response);
}
xhr.onerror = function () {
    console.log('error')
}

xhr.send();


