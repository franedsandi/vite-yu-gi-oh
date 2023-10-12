<script>

export default {
  name: "single-card",

  props: {
    imgObj: String,
    titleObj: String,
    typeObj: String
  }
}
</script>

<template>

    <div class="card-custom">
      <img :src="imgObj">
      <h5> {{ titleObj }} </h5>
      <h6> {{ typeObj }} </h6>
    </div>


</template>



<style lang="scss" scoped>
@use '../../scss/partials/card.scss'
</style>