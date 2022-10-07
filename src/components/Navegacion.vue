<template>
  <header id="principal" class="box-shadow">
    <div class="img">
      <img alt="TramiTu logo" id="logo" src="../assets/tramitú.png">
    </div>
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
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
 font-family: Roboto;
}
#principal {
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #e4ffe4eb;
  font-family: Roboto;
  padding: 4%;
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
  border-color: #244e0a;
  background-color: #8aaf59a1;
  color:rgba(66, 138, 58, 0.863);
  padding: 1em;
  margin-right: 2%;
  margin-left: 0%;
  font-family: Roboto;
  border-radius: #39402f;
  position: sticky center;
  flex-shrink: 0;
  object-fit: cover;

&.router-link-exact-active {
  color: rgb(72, 78, 70);
}
}
#logo {
  position: absolute;
  top: 0;
  height: 90%;
  margin: .3%;
  margin-left: 3%;
}
</style>