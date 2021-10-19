<template>
  <div>
    <div class="origin-app">haha</div>
    <div :class="dark.bg">haha</div>
    <div class="origin-app">haha</div>
    <div :class="light.bg">haha</div>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this);
  }
}
</script>

<style lang="scss" scoped>
.origin-app {
  background: red;
}
</style>
<style module="dark">
.bg {
  background: pink;
}
</style>
<style module="light">
.bg {
  background: green;
}
</style>


