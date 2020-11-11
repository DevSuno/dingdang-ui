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
        <div>h1</div>
        <div>h2</div>
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