<script>
import axios from 'axios';
import { store } from '../data/store';
import singlecard from './partials/singleCard.vue';
import SelectType from './partials/SelectType.vue';

export default {
  name: 'ContainerCards',
  components: {
    singlecard,
    SelectType
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    filterTypeSelected() {
      let url = this.store.apiUrl;

      if (this.store.selectedType !== null) {
        url = `${this.store.apiUrl}?archetype=${this.store.selectedType}`;
      }

      axios.get(url)
        .then((response) => {
          store.CardList = response.data.data.slice(0, 40);

        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });
    },
  },

  mounted() {
    this.filterTypeSelected();
  },
};
</script>

<template>
  <div class="container selector">
    <SelectType @type-selected="filterTypeSelected" />
  </div>
  
  <div class="container my5">
    <div class="found">
      <span>Found {{ store.CardList.length }} cards</span>
      <!-- Mostrar la cantidad de cartas encontradas -->
    </div>
    <div class="row">
      <singlecard
        v-for="card in store.CardList"
        :key="card.id"
        :imgObj="card.card_images[0].image_url"
        :titleObj="card.name"
        :typeObj="card.archetype"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: white;
  padding: 50px 0px 30px;
  .found {
    background-color: black;
    height: 40px;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 20px;
    margin: 0 50px;
  }
  .row {
    gap: 12.5px;
    margin: 0 50px;
  }
}
.selector{
  background-color: #D48F38;
  padding: 0;
  ;
}
</style>