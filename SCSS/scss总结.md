## scss是什么？
- css的预编译器
## 在vue-cli的安装步骤？
1. npm3个loader(sass-loader、css-loader、node-loader)
2. 在build目录中找到webpack.base.config.js,在那个extends属性中加入一个拓展.scss
3. 在同一文件中配置module属性
4. 然后在组件的style标签加上 lang="scss"
## 特性
1. 可以定义变量，例如($变量名称=值)
2. 可以定义混合器，例如
3. 可以进行嵌套
4. 可以进行运算
5. 有作用域
6. 可以使用JavaScript表达式
7. 颜色可编辑

---2018/08/20