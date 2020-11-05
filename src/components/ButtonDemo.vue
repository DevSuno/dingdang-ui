<template>
    <div>
        button组件测试
    </div>
    <h1>示例 1</h1>
    <div>
        <Button>我是一个 Button</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue';
    export default {
        components:{
            Button
        }
    };
</script>

<style lang="scss" scoped>

</style>