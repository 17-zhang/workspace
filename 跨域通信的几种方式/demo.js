/**
 * JSONP
 */
var script = document.createElement('script');
script.type = 'type/javascript';
script.src = url;  // 跨域地址
document.head.appendChild(script);

setTimeout(function () {
    document.head.removeChild(script);
    script = null;
});
// 接收数据
function jsonpCallback(data) {
    console.log(data);
}

/**
 * websocket
 */

var ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = function (e) {
    ws.send('hello...');
}
ws.onmessage = function (e) {
    var data = e.data
}
ws.onclose = function () {
    console.log('close....');
}

/**
 * hash
 */

// 父窗体
var son = document.getElementByTagName('iframe');
son.src = son.src + '#' + data;

// 子窗体
window.onhashchange = function () {
    var data = window.location.hash;
}

/**
 * postMessage
 */

// 窗口A 发送
BWindow.postMessage('发送的数据', 'http://B.com');

// 窗口B 接收
window.addEventListener('message', (event) => {
    event.origin; // http://A.com
    event.source; // AWindow
    event.data; // ‘发送的数据’
})

/**
 * CORS:跨域资源共享
 */

fetch(url, {
    method: 'get',
    // 头信息配置
}).then(() => {});
