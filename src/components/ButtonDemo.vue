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
        <Button size="big" theme="link">大大大</Button>
        <Button theme="link">普普通</Button>
        <Button size="small" theme="link">小小小</Button>
    </div>
    <hr>
    <div>
        <Button size="big" theme="text">大大大</Button>
        <Button theme="text">普普通</Button>
        <Button size="small" theme="text">小小小</Button>
    </div>
    <h1>示例 3</h1>
    <div>
        <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
        <div>
            <Button level="main" theme="link">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button level="danger" theme="link">危险链接按钮</Button>
        </div>
        <div>
            <Button level="main" theme="text">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button level="danger" theme="text">危险文字按钮</Button>
        </div>
    </div>
    <h1>示例 4</h1>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button disabled theme="link">禁用链接按钮</Button>
        <Button disabled theme="text">禁用按钮</Button>
    </div>
    <h1>示例 5</h1>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
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