<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import ContainerCards from './components/ContainerCards.vue';
import axios from 'axios';
import loader from './components/partials/loader.vue';

export default {
  name: 'App',
  components: {
    Header,
    ContainerCards,
    loader,
  },
  data() {
    return {
      store,
      isLoading: true, 
    };
  },
  methods: {
    getApi() {
      axios.get(this.store.apiUrl)
        .then((result) => {
          setTimeout(() => {
            this.store.CardList = result.data.data; 
            console.log(this.store.CardList); 
            this.isLoading = false;
          }, 2000);
        })
        .catch((error) => {
          console.error('Error:', error);
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
@use './scss/main.scss';
.main{
  overflow: hidden;
}
</style>
