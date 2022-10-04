<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Acá puedes radicar tu trámite ante la Gobernación de Caldas<br>
    <a href="http://ventanillaunica.caldas.gov.co/peticiones-quejas-y-reclamos/#/login" target="_blank" rel="noopener">Ventanilla Unica Gobernación de Caldas</a>.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #439671c0;
}
</style>
