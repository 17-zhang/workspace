## axios [来源](https://www.jianshu.com/p/df464b26ae58)

### 一、安装

1. 利用npm安装 `npm install axios --save`
2. 利用bower安装 `bower install axios --save`
3. 直接cdn引入 `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

### 二、例子

1. 发送一个 **Get** 请求

```
 //通过给定的ID来发送请求
 axios.get('/user?ID=12345')
   .then(function(response){
     console.log(response);
   })
   .catch(function(err){
     console.log(err);
   });
 //以上请求也可以通过这种方式来发送
 axios.get('/user',{
   params:{
     ID:12345
   }
 })
 .then(function(response){
   console.log(response);
 })
 .catch(function(err){
   console.log(err);
 });
 
```

2. 发送一个 **POST** 请求

```
  axios.post('/user',{
    firstName:'Fred',
    lastName:'Flintstone'
  })
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });
  
```

3. 一次性并发多个请求

```
  function getUserAccount(){
    return axios.get('/user/12345');
  }
  function getUserPermissions(){
    return axios.get('/user/12345/permissions');
  }
  axios.all([getUserAccount(),getUserPermissions()])
    .then(axios.spread(function(acct,perms){
      //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
    }))
  
```