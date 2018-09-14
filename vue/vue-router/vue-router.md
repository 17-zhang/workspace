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


