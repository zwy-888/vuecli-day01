<template>
    <div>
        id = {{$route.params.id}}
        <span>{{users[($route.params.id)-1]}}</span>
        <br>
        <button>返回首页</button>
        <button>返回用户列表页</button>

    </div>
</template>

<script>

    export default {
        name: "UserDetail",
        data: function () {
            return {
                users: [
                    {id: 1, username: "小黑", bir: "2012-12-12", content: "自我介绍"},
                    {id: 2, username: "小白", bir: "2013-12-12", content: "自我介绍"},
                    {id: 3, username: "小红", bir: "2014-12-12", content: "自我介绍"},
                ]
            }
        },
    }
</script>

<style scoped>

</style>
