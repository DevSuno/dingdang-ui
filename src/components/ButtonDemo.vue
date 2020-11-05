<template>
    <div>
        button组件测试
    </div>
    <h1>示例 1</h1>
    <div>
        <Button theme="button">默认 Button</Button>
        <Button theme="link">link Button</Button>
        <Button theme="text">text Button</Button>
    </div>
    <h1>示例 2</h1>
    <div>
        <Button size="big">大大 Button</Button>
        <Button>默认 Button</Button>
        <Button size="small">小小 Button</Button>
    </div>
    <hr>
    <div>
        <Button theme="link" size="big">大大大</Button>
        <Button theme="link">普普通</Button>
        <Button size="small" theme="link">小小小</Button>
    </div>
    <hr>
    <div>
        <Button size="big" theme="text">大大大</Button>
        <Button theme="text">普普通</Button>
        <Button size="small" theme="text">小小小</Button>
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