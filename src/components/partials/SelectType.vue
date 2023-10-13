<script>
import axios from 'axios';
import { store } from '../../data/store';

export default {
  name: "select-type",
  data() {
    return {
      store,
      isLoading: false
    };
  },

  methods: {
    getApi() {
      this.isLoading = true;
      axios.get(store.apiUrlType)
        .then((res) => {
          store.listOftypes = res.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
          this.isLoading = false;
        });
    },

    filterTypeSelected() {
      this.isLoading = true;
      let url = store.apiUrl;

      if (store.selectedType !== null) {
        url = `${store.apiUrl}?archetype=${store.selectedType}`;
      }

      axios.get(url)
        .then((response) => {
          store.CardList = response.data.data.slice(0, 40);
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
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
  <div>
    <select
      @change="filterTypeSelected"
      v-model="store.selectedType"
      class="form-select form-select-sm"
      
    >
      <option
        v-for="(type, index) in store.listOftypes"
        :key="`type${index}`"
        :value="type.archetype_name"
      >{{ type.archetype_name }}</option>
    </select>
    <loader v-if="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
select {
  width: 200px;
  margin: 50px 0px;
}
</style>