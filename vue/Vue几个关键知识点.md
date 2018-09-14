### 几个常用的知识点 [来源](https://segmentfault.com/a/1190000013153782)

### 1、路由器懒加载

```
  {
      path: '/development',
      name: 'development',
      component: (resolve) => {
          require(['../views/development.vue'], resolve)
      }
  }
  
```

 或者

```
 const _import_ = file => () => import('views/' + file + '.vue')
 
 {
     path: '/development',
     name: 'development',
     component: _import_('development')
 }
  
```

### 2、登录拦截

通过路由的 <font color=red>**beforeEach**</font> 钩子函数判断是否需要登录

```
 // 如：系统设置需要登陆
 { 
     path: '/system', 
     name: '系统设置', 
     meta: { 
         login: true
     },
     component: _import_('System/index')
 }
 
 router.beforeEach((to, from, next) => {
     if (to.meta.login) { //判断前往的界面是否需要登陆
         if (store.state.user.user.name) { // 是否已经登陆
             next()
         }else{
             Vue.prototype.$alert('请先登录!')
                 .then( () => {
                     store.state.user.isLogin = true
                 })
         }
     }else{
         if (to.meta.page) store.state.app.pageLoading = true
         next() 
     }
     
 })
  
```

### 3、动画切换

通过检测设置在Router上的animate属性，来判断它做的什么样的切换动画


```
   Router.prototype.animate = 0
   
   // 获取每个路由meta上面的slide 来判断它做什么动画
   { 
       path: '/system', 
       name: '系统设置', 
       meta: { 
           slide: 1 
       },
       component: _import_('System/index')
   }
   
   
   watch: {
       $route (to, from) {
           /*
           0: 不做动画
           1: 左切换
           2: 右切换
           3: 上切换
           4: 下切换
           ...
            */
           let animate = this.$router.animate || to.meta.slide
           if (!animate) {
               this.animate = '' 
           }else{
               this.animate = animate === 1 ?  'slide-left' :
                   animate === 2 ?  'slide-right' :
                   animate === 3 ?  'slide-top' :
                   animate === 4 ?  'slide-bottom' : ''
           }
           this.$router.animate = 0
       }
   } 
    
```

### 4、视频播放

因为在IOS上 无法隐藏video的controls，所以我们可以隐藏video，通过绘制canvas来达到视频播放的效果。
