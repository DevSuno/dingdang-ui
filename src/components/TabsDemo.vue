<template>
    <div>
        <h1>示例 1</h1>
        <Tabs>
            <tab title="导航 1">内容 1</tab>
            <tab title="导航 2">内容 2</tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue';
    import Tabs from '../lib/Tabs.vue';

    export default {
        components: {
            Tab, Tabs
        }
    };
</script>

<style lang="scss" scoped>

</style>