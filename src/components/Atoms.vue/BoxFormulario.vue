<template> 
<div> 
  <article>
    <h1 class="title">{{ title }}</h1>
    <h4 class="subtitle">{{ subtitle }}</h4>
    <h4></h4>
    <p class="description">{{ description }}</p>
  </article>
</div>   
</template>

<script setup>
import { defineProps } from 'vue';

const props =
defineProps([
    title: 'string',
    subtitle: 'string',
    description: 'string',
]
)
</script>

<style scoped>
</style>