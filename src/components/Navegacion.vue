<template>
  <header id="principal" class="box-shadow">
    <div class="img">
      <img alt="TramiTu logo" id="logo" src="../assets/imagenes/tramitú.png">
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

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
  font-family: 'Inconsolata', monospace;
}
#principal {
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color:#eeeeee80;
  padding: 4%;
}
#text {
  font-family: 'Inconsolata', monospace;
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
  color: azure;
}

nav>a {
  color:rgba(66, 138, 58, 0.863);
  padding: 20px;
  margin-right: 2%;
  margin-left: 0%;
  text-decoration: none;
  font-weight: 900;
  font-family: 'Inconsolata', monospace;
 
&.router-link-exact-active {
  color: rgb(119, 223, 133);
  font-weight: 700;
}
}
#logo {
  position: absolute;
  top: 0%;
  height: 90%;
  margin: .3%;
  margin-left: 3%;
}
@media screen and (max-widt) {
  .nav{
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .nav>a{
    height: auto;
    text-align:center;
  }
  #logo{
    padding: 15px 0;
    text-align: center;
  }
}
</style>