<template>
    <div>
        <h1>示例 1</h1>
        <Tabs v-model:selected="x">
            <Tab title="导航1">内容1</Tab>
            <Tab title="导航2">内容2</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue';
    import Tabs from '../lib/Tabs.vue';
    import { ref } from 'vue';

    export default {
        components: {
            Tab, Tabs
        },
        setup() {
            const x = ref('导航1');

            return { x };
        }
    };
</script>

<style lang="scss" scoped>

</style>