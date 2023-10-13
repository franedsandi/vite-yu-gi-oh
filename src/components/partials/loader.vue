<template>
  <div class="loader">
    <img src="img/logo.png" alt="Loader">
  </div>
</template>

<script>
export default {
  name: "loader",
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    stopLoad() {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped lang="scss">
.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotation 5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
