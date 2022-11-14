<template>
  <MenuComp/>
  <router-view></router-view>
</template>

<script>
import MenuComp from './components/MenuComp.vue';

export default {
  name: 'App',
  components: {
    MenuComp
  }
}
</script>

<style>

</style>
