import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  CardList: [],
  isLoading: true,
  apiUrlType: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  listOftypes: [],
  selectedType: null
})