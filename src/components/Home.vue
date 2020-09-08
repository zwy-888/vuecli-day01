<template>
    <div>
        <h3>留言板</h3>
        <input type="text" v-model="msg">
        <br>
        <button @click="add_note" >发表留言</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
            return {
                msg: "",
            }
        },
        methods: {
            add_note() {
                // 完成留言的添加
            },
        }
    }
</script>

<style scoped>

</style>
