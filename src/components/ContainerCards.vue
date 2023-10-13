<script>
import singleCard from './partials/singleCard.vue';
import { store } from '../data/store';

export default {
  name: "card-container",
  components: {
    singleCard
  },
  data(){
    return {
      store
    }
  },
  mounted(){
    console.log(singleCard.name)
  }
 
}
</script>


<template>

  <div class="container">
    <div class="found">
      <span>Found {{ store.cardList.length }} cards</span>
    </div>
    <div class="row">
      <singleCard v-for="singleCard in store.cardList" :key="singleCard.id"
      :imgObj="singleCard.card_images[0].image_url_small"
      :titleObj="singleCard.name"
      :typeObj="singleCard.archetype"
      />

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/container.scss';
</style>