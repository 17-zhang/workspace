[使用webpack代码分割功能在vue中进行延迟加载](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)

## Vue组件中的延迟加载

- 通过import函数包装到箭头函数中，Vue仅在请求时执行它，并在该时刻加载模块。

```
  Vue.component('AsyncCmp', () => import('./AsyncCmp'))
```
- 并使用本地注册

```
new Vue({
  // ...
  components: {
    'AsyncCmp': () => import('./AsyncCmp')
  }
})
```

- 如果组件导入使用命名导出，则可以在返回的Promise上使用对象解构。例如，对于从UiAlert部件[KeenUI](https://github.com/JosephusPaye/Keen-UI)：

```
...
components: {
  UiAlert: () => import('keen-ui').then(({ UiAlert }) => UiAlert)
}
...

```

## Vue-router中的延迟加载

- Vue路由器内置支持[延迟加载](https://router.vuejs.org/guide/advanced/lazy-loading.html)。它就像使用该import函数导入组件一样简单。假设我们想在/ login路由中延迟加载一个Login组件：


```
// Instead of: import Login from './login'
const Login = () => import('./login')

new VueRouter({
  routes: [
    { path: '/login', component: Login }
  ]
})

```



## Vuex中的延迟加载

- Vuex有一种registerModule方法可以让我们动态创建Vuex模块。如果我们考虑到该import函数返回ES模块作为有效负载的承诺，我们可以使用它来延迟加载模块：

```
const store = new Vuex.Store()

...

// Assume there is a "login" module we wanna load
import('./store/login').then(loginModule => {
  store.registerModule('login', loginModule)
})

```