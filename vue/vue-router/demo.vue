<template>
    
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