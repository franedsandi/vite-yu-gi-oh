<script>
export default {
name: 'singlecard',
props: {
    imgObj: String,
    titleObj: String,
    typeObj: String
  }
}
</script>

<template>
  <div class="konamicard">
    <div class="custom-card">
      <img :src="imgObj">
      <h5> {{ titleObj }} </h5>
      <h5> {{ typeObj }} </h5>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars.scss';
.konamicard{
  width: calc(100% / 5 - 10px);
  padding: 0;
  margin-bottom: 20px;
  .custom-card{
    text-align: center;
    background-color: #D48F38;

    height: 460px;
    img{
      width: 100%;
    }
    h5{
      margin-top: 20px;
    }
  }
}
</style>