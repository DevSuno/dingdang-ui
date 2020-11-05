<template>
    <button :class="{[`theme-${theme}`]: theme}"
            class="dingdang-button">
        <slot/>
    </button>

</template>

<script lang="ts">
    export default {
        props: {
            theme: {
                type: String,
                default: 'button'
            }
        },
    };
</script>
<style lang="scss" scoped>
    div {
        border: 1px solid red;
    }
</style>