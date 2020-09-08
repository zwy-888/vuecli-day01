<template>
    <div>
        <h3>用户列表页</h3>
        <table border="2">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>生日</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="user in users" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.bir}}</td>
                <td>{{user.content}}</td>

                <td><a href="javascript:;" @click="delOne(index)">删除</a>| <router-link :to="`/detail/${user.id}`">查看用户详情</router-link> |
<!--                    <a href="javascript:;" @click="goDetail(user.id)">查看用户详情</a>-->
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "User",
        data: function () {
            return {
                users: [
                    {id: 1, username: "小黑", bir: "2012-12-12", content: "自我介绍"},
                    {id: 2, username: "小白", bir: "2013-12-12", content: "自我介绍"},
                    {id: 3, username: "小红", bir: "2014-12-12", content: "自我介绍"},
                ]
            }
        },
        methods: {
            // goDetail(user_id){
            //     // 跳转到详情页  并且传递id过去
            // },
            delOne(index) {
                this.users.splice(index, 1)
            }
        }
    }
</script>

<style scoped>

</style>
