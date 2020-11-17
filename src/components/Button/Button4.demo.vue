<demo>
    支持 disabled
</demo>
<template>
    <Button disabled>禁用按钮</Button>
    <Button disabled theme="link">禁用链接按钮</Button>
    <Button disabled theme="text">禁用按钮</Button>
</template>

<script lang="ts">
    import Button from '../../lib/Button.vue';

    export default {
        components: {
            Button
        }
    };
</script>