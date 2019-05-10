<template>
    <div>
        <div v-focus>{{name}}</div>
        <input type="text" v-focus v-model="name">
    </div>
</template>

<script>
export default {
    name: 'firstpage',
    beforeCreate(){
        debugger;
        console.log('beforeCreate');
    },
    created(){
        debugger;
        console.log('created');
    },
    beforeMount(){
        debugger;
        console.log('beforeMount');
    },
    mouneted(){
        debugger;
        console.log('mouneted');
    },
    data(){
        return {
            name: 'firstpagename'
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

