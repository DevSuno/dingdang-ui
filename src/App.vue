<template>
    <div>
        导航栏 |
        <router-link to="/">index1</router-link>  |
        <router-link to="/xxx">index2</router-link>
        <hr/>
    </div>
    <router-view/>
</template>

<script>
export default {
  name: 'App',

}
</script>
``