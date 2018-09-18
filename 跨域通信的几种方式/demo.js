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

