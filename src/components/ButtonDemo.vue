<template>
    <div>
        button组件测试
    </div>
    <h1>示例 1</h1>
    <div>
        <Button theme="">测试 Button</Button>
        <Button theme="button">测试 Button</Button>
        <Button theme="link">测试 Button</Button>
        <Button theme="text">测试 Button</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue';

    export default {
        components: {
            Button
        },
        setup() {
            const onClick = () => {
                console.log('hi');
            };
            return { onClick };
        }

    };
</script>

<style lang="scss" scoped>

</style>