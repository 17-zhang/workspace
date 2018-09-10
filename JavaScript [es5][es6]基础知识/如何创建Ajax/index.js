
// 创建xhr对象
var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXOBject("Microsoft.XMLHTTP");

// GET请求
xhr.open('GET', url, true);
xhr.send();

// POST请求
xhr.open('POST', url, true);
// 表单数据，也可以提交json数据,响应的content-Type: application/json
xhr.setRequestHeader('content-Type', 'application/x-www-from-urlencoded');
xhr.send(dataArr.join('&'));

xhr.onload = function () {
    if (xhr.status === 200 || xhr.status === 304) {
        var data = xhr.responseText;
        // 拿到数据
    } else {
        // 出问题了
    }
}
