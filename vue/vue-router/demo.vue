<template>
    <router-link tag="div" class="book" v-for="book in books" :to="{name: 'Detail', params: { id:book.id }}">
        <div class="cover">
            <img :src="book.img_url" />
        </div>
        <div class="title">{{ book.title }}</div>
        <div class="authors">{{ books.authors || join }}}</div>
    </router-link>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "demo"

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
    }

</script>

<style scoped>

</style>