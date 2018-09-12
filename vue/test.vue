<template>
    <template v-if="loginType === username">
        <label>username</label>
        <input placeholder="Enter your username">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
    </template>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>