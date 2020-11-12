<template>
    <div class="dingdang-tabs">
        <div class="dingdang-tabs-nav">
            <div :class="{selected: t=== selected}"
                 :key="index"
                 @click="select(t)"
                 class="dingdang-tabs-nav-item"
                 v-for="(t,index) in titles">
                {{t}}
            </div>
        </div>
        <div class="dingdang-tabs-content">
            <component :class="{selected: c.props.title === selected }"
                       v-for="c in defaults"
                       :is="c"
                       class="dingdang-tabs-content-item"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue';
    import { computed } from 'vue';

    export default {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const defaults = context.slots.default();
            defaults.forEach((tag) => {
                if (tag.type !== Tab) {
                    throw new Error('Tabs 子标签必须是 Tab');
                }
            });
            const titles = defaults.map((tag) => {
                return tag.props.title;
            });
            const current = computed(() => {
                return defaults.filter((tag) => {
                    return tag.props.title === props.selected;
                })[0];
            });
            const select = (title: string) => {
                context.emit('update:selected', title);
            };
            return {
                defaults,
                titles,
                current,
                select
            };
        }
    };
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .dingdang-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }
        }

        &-content {
            padding: 8px 0;

            &-item {
                display: none;

                &.selected {
                    display: block;
                }
            }
        }
    }
</style>