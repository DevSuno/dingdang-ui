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
    <h1>示例3</h1>
    <div>
        <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
        <div>
            <Button theme="link" level="main">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" level="danger">危险链接按钮</Button>
        </div>
        <div>
            <Button theme="text" level="main">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button theme="text" level="danger">危险文字按钮</Button>
        </div>
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