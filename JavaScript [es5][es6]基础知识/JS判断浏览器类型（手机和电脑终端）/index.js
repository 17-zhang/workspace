// 来源：https://www.cnblogs.com/tiger95/p/7338292.html


var brower = {
    versions: function () {
        var u = window.navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果，谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  // android终端或者UC浏览器
            iPhone: u.index('iPhone') > -1 || u.indexOf('Mac') > -1,  // 是否为iPhone或者安卓QQ浏览器
            iPad: u.indexOf('iPad') > -1,  // 是否为iPad
            webApp: u.indexOf('Safari') == -1, // 是否为web应用程序，没有头部和底部
            weixin: u.indexOf('MicroMessenger') == -1  // 是否为微信浏览器
        };
    }()
}
document.writeln(" 是否为移动端：" + brower.versions.mobile);
document.writeln(" ios终端:" + brower.versions.ios);
document.writeln(" android终端:" + brower.versions.android);
document.writeln(" 是否为iPhone:" + brower.versions.iPhone);
document.writeln(" 是否iPad:" + brower.versions.iPad);
document.writeln(navigator.userAgent)