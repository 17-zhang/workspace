### Vue Router总结 [vue-router中文文档](https://router.vuejs.org/zh/)


#### 动态路由详解 [来源](https://blog.csdn.net/wlangmood/article/details/78291591)

平时做项目时遇到的点击列表页，显示详情页面，此时就需要我们传递列表唯一的标识，然后显示对应的内容。

通常做法是以“参数=值”的形式传递参数，而动态路由将参数融入到路由的路径定义之内成为路径的一部分。

在参数名称之前加“：”，然后将参数写在路由的path内。

下面是给详情页detail传递唯一标识id，从而调取详细的内容。

```
  routes: [
              {
                  path: '/',
                  name: 'Home',
                  component: Home,
                  children: [
                      {
                          path: '/',
                          name: 'Detail',
                          component: Detail
                      }
                  ]
              }
          ]
          
```

在<router-link>中只需要在to属性中加入params属性来指定具体的参数值：

```
  <router-link tag="div" class="book" v-for="book in books" :to="{name: 'Detail', params: { id:book.id }}">
          <div class="cover">
              <img :src="book.img_url" />
          </div>
          <div class="title">{{ book.title }}</div>
          <div class="authors">{{ books.authors || join }}}</div>
  </router-link>
      
```

如果要同时传递多个参数，只需要在params中对应声明参数值即可。
那么问题来了？在组件Detail中怎么获取这个唯一标识id呢？可以通过$route.params属性来获取需要的参数值。

具体Detail.vue

```
  <template>
    <div class="detail">
      <p @click="back">返回</p>
      <p>{{$route.name}}</p>
      <p>{{$route.params.id}}</p>
    </div>
  </template>
  <script type="text/ecmascript-6">
    export default {
      watch: {
        '$route' (to, from) {
          // 对路由变化作出响应...
          console.log(to);
          console.log(from);
        }
      },
      created () {
        console.log(this.$route.params.id);
      }
    }
  </script>
  <style lang="less" rel="stylesheet/less" type="text/less">
   
  </style>

```

#### 路由重定向

重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：

```
  const router = new VueRouter({
    routes: [
      { path: '/a', redirect: '/b' }
    ]
  })
  
```

#### vue路由传参的三种基本方式 [来源](https://segmentfault.com/a/1190000012393587)

现有如下场景，点击父组件的li元素跳转到子组件中，并携带参数，便于子组件获取数据。
父组件中：

`<li v-for="article in articles" @click="getDescribe(article.id)">`

- 方案一

```
        getDescribe(id) {
            //   直接调用$router.push 实现携带参数的跳转
          this.$router.push({
            path: `/describe/${id}`,
          })
          
```
需要对应路由配置如下：

```
    {
       path: '/describe/:id',
       name: 'Describe',
       component: Describe
     }
     
```
很显然，需要在path中添加/:id来对应 $router.push 中path携带的参数。在子组件中可以使用来获取传递的参数值。

`this.$route.params.id`

- 方案二

父组件中：通过路由属性中的name来确定匹配的路由，通过params来传递参数。


```
   this.$router.push({
            name: 'Describe',
            params: {
              id: id
            }
         })
          
```

对应路由配置: 注意这里不能使用:/id来传递参数了，因为父组件中，已经使用params来携带参数了。


```
    {
       path: '/describe',
       name: 'Describe',
       component: Describe
     }
```
子组件中: 这样来获取参数

`this.$route.params.id`

- 方案三

父组件：使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？

```
  this.$router.push({
            path: '/describe',
            query: {
              id: id
            }
         })
          
```

对应路由配置：


```
    {
       path: '/describe',
       name: 'Describe',
       component: Describe
     }
     
```
对应子组件: 这样来获取参数

`this.$route.query.id`


这里要特别注意 在子组件中 获取参数的时候是$route.params 而不是$router 这很重要~~~


#### 导航守卫/导航钩子

分为全局导航钩子、组件导航钩子和路由独享钩子：

##### 全部导航钩子

- beforeEach

```
  const router = new VueRouter({ ... })
  
  router.beforeEach((to, from, next) => {
    // ...
  })
  
```

确保要调用 next 方法，否则钩子就不会被 resolved。

- beforeResolve [2.5新增]

在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

- afterEach

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：

```
  router.afterEach((to, from) => {
    // ...
  })
```

##### 组件内的钩子

- beforeRouterEach
- beforeRouterUpdate [2.2新增]
- beforeRouterLeave

```
  const Foo = {
    template: `...`,
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }
  }
  
```

##### 路由独享钩子

- beforeEnter

```
  const router = new VueRouter({
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        }
      }
    ]
  })
  
```

##### 滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

**注意: 这个功能只在支持 history.pushState 的浏览器中可用。**

```
  const router = new VueRouter({
    routes: [...],
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
    }
  })
  
```











