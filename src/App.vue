<script>
import Header from './components/Header.vue';
import ContainerCards from './components/ContainerCards.vue';
import { store } from './data/store';
import axios from 'axios';
import loader from './components/partials/loader.vue';

export default {
  name: "AppVue",
  components: {
    Header,
    ContainerCards,
    loader,
  },
  data() {
    return {
      store,
      offset: Math.floor(Math.random() * 1000) + 1,
      isLoading: true,
    };
  },
  methods: {
    getApi() {
      const apiUrlWithOffset = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.offset}`;

      axios.get(apiUrlWithOffset)
        .then((result) => {

          setTimeout(() => {
            store.cardList = result.data.data;
            console.log(store.cardList.data);
            this.isLoading = false; 
          }, 2000); 
        })
        .catch((error) => {
          console.error('Error');
          this.isLoading = false; 
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="main">
    <loader v-if="isLoading" />
    <Header v-if="!isLoading" />
    <ContainerCards v-if="!isLoading" />
  </div>
</template>



<style lang="scss">
@use "./scss/main.scss";
.main{
  overflow: hidden;
}
</style>
