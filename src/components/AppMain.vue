<script>
import productCard from './ProductCard.vue'; 

export default {
  components: {
    productCard, 
  },
}
</script>

<template>
  <div class="main">
    <productCard/>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../scss/partials/appmain.scss';
</style>