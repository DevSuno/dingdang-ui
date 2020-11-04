<template>
    <div>
        <Switch v-model:value="x"/>
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue'
    export default {
        components:{Switch},
        setup(){
            const x = ref(false)
            return {x}
        }
    };
</script>

<style lang="scss" scoped>

</style>