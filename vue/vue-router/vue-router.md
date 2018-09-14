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

