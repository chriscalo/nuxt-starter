<template>
  <div>
    <h1>Nuxt is working</h1>
    <div class="msg">
      {{ msg }}
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      msg: "Hello, World!",
    }),
  };
</script>

<style scoped>
  .msg {
    color: teal;
  }
</style>
