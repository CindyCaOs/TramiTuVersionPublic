<template>
  <div id="app">
    <Navegacion />
    <router-view />
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';

export default {
  name: 'App',
  components: {
    Navegacion,
}
}
</script>
<style scoped>
*{
  font-family: 'Inconsolata', monospace;
}
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>  


