<template>
    <div>
        <h1>一、params的传参方式,需修改路由配置为:path: "/test/goods/:id/code/:code",</h1>
        <h2>goods id: {{$route.params.id}},code:{{$route.params.code}}</h2>
        <h2>1.网址后面跟了跟路由参数个数匹配的参数，网页才会被正确显示，如：http://localhost:8888/test/goods/1001/Code/100001</h2>
        <h2>2.网址后面没有参数或参数数量不对，则网页不会显示，如：http://localhost:8888/test/goods/或http://localhost:8888/test/goods/1001/</h2>

        <h1>二、query的传参方式，需修改路由配置为:path: "/test/goods"</h1>
        <h2>goods id: {{$route.query.id}},code:{{$route.query.code}}</h2>
    </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
