<script setup>
import Header from './components/Header.vue';
import RegisterArea from './components/RegisterArea.vue';
</script>

<template>
  
    <Header
      :title="'COURSE NOTES'"
    ></Header>
    <main class="container">
      <RegisterArea />
    </main>
</template>

<style lang="scss" scoped>
@use './assets/sass/main' as *;

.container{
  @include displayGrid(1,2);
}
@media only screen and (max-width:600px){
  .container{
  @include displayGrid(2,1);
}
}
</style>
