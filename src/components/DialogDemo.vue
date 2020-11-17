<template>
    <div>
        <h1>Dialog 示例</h1>
        <Demo :component="Dialog1Demo"/>
        <Demo :component="Dialog2Demo"/>
    </div>
</template>

<script lang="ts">
    import Demo from './Demo.vue';
    import Dialog1Demo from './Dialog/Dialog1.demo.vue';
    import Dialog2Demo from './Dialog/Dialog2.demo.vue';

    export default {
        components: { Demo },
        setup() {
            return { Dialog1Demo, Dialog2Demo };
        }
    };
</script>

<style lang="scss" scoped>

</style>