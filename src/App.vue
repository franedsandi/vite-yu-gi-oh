<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components:{
    'custom-header': AppHeader,
    'custom-main': AppMain,
  }
}
</script>

<template>
  <custom-header/>
  <custom-main/>
</template>

<style lang="scss">
@use './scss/main.scss'
</style>




