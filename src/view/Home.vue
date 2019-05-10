<template>
    <div class="home-wrap">
        <div class="box-1200">
            <div class="title">VUE组件库</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mouneted(){
        console.log('mouneted');
    },
    data(){
        return {
            name: 'Home'
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
    .home-wrap{
        .title{
            font-size: 16px;
            font-weight: bold;
            &:focus{
                border: 1px solid #ccc;
            }
        }
    }
</style>

