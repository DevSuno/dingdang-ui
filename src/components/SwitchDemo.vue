<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <Demo :components="Switch1Demo"/>
        <Demo :components="Switch2Demo"/>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue';
    import Switch1Demo from './Switch1.demo.vue';
    import Switch2Demo from './Switch2.demo.vue';
    import { ref } from 'vue';
    import 'prismjs';
    import 'prismjs/themes/prism.css';
    import Demo from './Demo.vue';

    const Prism = (window as any).Prism;

    export default {
        components: {
            Demo,
            Button
        },
        setup() {
            const bool = ref(false);
            return {
                bool,
                Switch1Demo,
                Switch2Demo,
                Prism
            };
        }
    };
</script>

<style lang="scss" scoped>

</style>