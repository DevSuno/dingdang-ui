<template>
    <div class="topnav">
        <router-link class="logo" to="/">
            <svg class="icon">
                <use xlink:href="#icon-logo"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg @click="toggleMenu"
             class="toggleAside"
             v-if="toggleMenuButtonVisible">
            <use xlink:href="#icon-menu-left">
            </use>
        </svg>
    </div>

</template>

<script lang="ts">
    import { inject, Ref } from 'vue';

    export default {
        props: {
            toggleMenuButtonVisible: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const menuVisible = inject<Ref<boolean>>('menuVisible');
            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value;
            };
            return { toggleMenu };
        }
    };
</script>

<style lang="scss" scoped>
    $color: #007974;
    .topnav {
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;
        color: $color;

        > .logo {
            max-width: 6em;
            margin-right: auto;

            > svg {
                width: 32px;
                height: 32px;
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1em;
            }
        }

        > .toggleAside {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            background: fade-out(black, 0.9);
        }

        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>