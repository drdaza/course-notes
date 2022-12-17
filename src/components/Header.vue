<script setup>

const props = defineProps({
  title:{
    type: String,
    required: true,
  }
});
</script>
<template>
  <header class="template-header">
    <h1>{{props.title}}</h1>
  </header>
</template>
<style lang="scss" scoped>
.template-header{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
