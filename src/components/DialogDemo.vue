<template>
    <div>
        dialog组件测试
        <div>
            <Button @click="toggle">toggle</Button>
        </div>
    </div>
    <!--
        <Dialog :visible="x" @update:visible="x = $event"></Dialog>
    -->
    <Dialog :cancel="f2" :closeOnClickOverlay="false" :ok="f1" v-model:visible="x">
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
        <template v-slot:content>
            <strong>hi</strong>
            <div>hi2</div>
        </template>
    </Dialog>

</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import { ref } from 'vue';

    export default {
        components: { Dialog, Button },
        setup() {
            const x = ref(false);
            const toggle = () => {
                x.value = !x.value;
            };
            const f1 = () => {
                return false;
            };
            const f2 = () => {
            };
            return { x, toggle, f1, f2 };
        }
    };
</script>

<style lang="scss" scoped>

</style>