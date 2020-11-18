<template>
    <div>
        <h1>示例 1</h1>
        <Demo :component="Tab1Demo"/>
    </div>
</template>

<script lang="ts">
    import Demo from './Demo.vue';
    import Tab1Demo from './Tab/Tab1.demo.vue';

    export default {
        props: {
            component: Object
        },
        components: {
            Demo
        },
        setup() {
            return { Tab1Demo };
        }
    };
</script>

<style lang="scss" scoped>

</style>