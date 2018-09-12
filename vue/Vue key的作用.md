### vue key的作用 [来源](https://blog.csdn.net/qq_27626333/article/details/76130397)

1. v-if中key 管理可复用的元素

例如，如果你允许用户在不同的登录方式之间切换

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>

```