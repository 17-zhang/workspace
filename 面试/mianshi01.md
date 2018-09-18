#### 1、前端缓存问题(cookie,LocalStorge,SessionStroge区别)

cookie：容量小，仅4k左右。在网络**请求时**发送数据。不建议存储重要数据。
LocalStroge: 是一种持久化的存储方式，需要定向手动清除。
SessionStroge: 关闭浏览器就清空数据。

#### 2、页面加载过程(小米面试)

1. 用户输入URL地址
2. 浏览器解析URL，并解析出主机名
3. 浏览器将主机名转化成服务器ip地址
4. 浏览器将端口号从URL解析出来
5. 浏览器建立一条与目标web服务器的TCP链接(三次握手)
6. 浏览器向服务器发送一条HTTP请求
7. 服务器向浏览器返回一条HTTP响应
8. 关闭链接，浏览器解析document文档(img,css,js等)

#### 3. call()和apply()区别

call()和apply()都是将**第一个参数**用作函数后面的参数。

- call(参数1,参数2)方法接受逗号分割的参数作为后面的参数。
- apply(参数1,[参数2])方法接受一个参数数组作为后面的参数。

#### 4、Sass和Less的共同之处

1. 混入(Mixins): class中的class
2. 参数混入：可以传递参数的class,像函数一样
3. 嵌套规则：class中嵌套class,减少代码重复
4. 运算：css中用上数学概念
5. 颜色功能：可以编辑颜色
6. 名字空间(namespace)：分组样式，从而可以被调用
7. 作用域：局部样式可修改
8. JavaScript赋值：在css中使用JavaScript表达式赋值

#### 5、JS中new操作符具体干了什么？

1. 创建一个新对象
2. 将构造函数的作用域赋值给新对象，因此this指向了新对象
3. 执行构造函数中的代码(为新对象添加属性)
4. 返回新对象

#### 6、typeOf和instance of的区别

1. 返回值不同。
- typeof返回的字符串--各个数据类型对应的字符串。typeof一把返回：number,string,boobean,undefiend,object,function
- instance of返回的是一个布尔类型的值--true/false

2. typeof是判断数据类型的，instance of变量是否属于某个对象。

#### 7、Post和Get的区别

1. Post对请求参数的长度没有限制，而Get如果请求参数过长，会被浏览器截断。
2. Get请求参数会直接暴露url上，所以不适合用来传递敏感信息。
3. Get请求可以被浏览器主动缓存，而Post请求不可以，除非手动设置。
4. Get请求在浏览器回退时是无害的，而Post会再次提交请求


