<template>
    <div class="home-wrap">
        <div class="box-1200">
            <div class="title">VUE组件库</div>
            <input type="text" v-model="title">
            {{title}}
            <span v-once>{{title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    created(){
    },
    data(){
        return {
            name: 'Home',
            title: 'title'
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    }
}
</script>

<style lang="less">
    @import "../assets/css/home.less";
</style>
