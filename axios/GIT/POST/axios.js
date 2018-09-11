// 来源：https://www.jianshu.com/p/df464b26ae58

/**
 * GIT请求
 * */
// 通过给定的ID来发送请求
axios.get('/user?ID=12345')
    .then(function (respone) {
        console.log(respone)
    })
    .catch(function (err) {
        console.log(err)
    })

// 以上请求也可以通过这种方法
axios.get('/user', {
    params: {
        ID: 12345
    }
})
.then(function (respone) {
    console.log(respone)
})
.catch(function (err) {
    console.log(err)
})


/**
 * POST请求
 * */

axios.post('/user', {
    firstName: 'Nike',
    lastName: 'Alexston'
})
    .then(function (res) {
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })

/**
 * 一次并发多个请求
 * */

function getUserAccount() {
    return axios.get('/user/12345')
}
function getUserPermissions() {
    return axios.get('/user/12345/permissions')
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        // 当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
    }))
