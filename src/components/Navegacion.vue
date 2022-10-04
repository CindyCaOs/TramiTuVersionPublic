<template>
  <header id="principal" class="box-shadow">
    <div class="img">
      <img alt="TramiTu logo" id="logo" src="../assets/tramitú.png">
    </div>
    <slot id="text">Derechos de Peticiòn | Devoluciones | Prescripciones</slot>
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/Document">Información</router-link> 
      <router-link to="/Tramites">Trámites</router-link> 
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navegacion',
  props: {
    msg: String

  }
}
</script>

<style scoped lang="scss">
#principal {
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #e3ebdf;
  font-family: Roboto;
  padding: 1%;
}
#text {
  font-family: Roboto;
  color: rgb(65, 102, 82); 
}
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  height: 100%;
}

nav>a {
  text-decoration: double;
  border-color: #b3b3b3;
  background-color: #c6eb95a1;
  color:#608a66;
  padding: 0.6em;
  margin-right: 5px;
  margin-left: 0.5%;
  font-family: Roboto;

&.router-link-exact-active {
  color: rgb(65, 102, 82);
}
}
#logo {
  position: absolute;
  top: 0;
  height: 80%;
  margin: 1%;
}
</style>