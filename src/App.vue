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
    data(){
      return{
        store,
        offset: Math.floor(Math.random() * 1000) + 1,

      }
    },
 
    
    methods: {
    getApi() {
      
      const apiUrlWithOffset = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.offset}`;

      axios.get(apiUrlWithOffset)
        .then((result) => {
          store.cardList = result.data.data;
          console.log(store.cardList.data);
         
        })
        .catch((error) => {
          console.error('Errore');
       
        });
    }
  },

    mounted(){
      this.getApi()
      
     
    }
  }
</script>


<template>
  <div>
    <loader v-if="isLoading" />
    <Header />
    <ContainerCards v-if="!isLoading" />
  </div>
</template>


<style lang="scss">

@use "./scss/main.scss";


</style>