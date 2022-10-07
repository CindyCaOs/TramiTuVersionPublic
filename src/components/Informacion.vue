<script>
  import { defineComponent } from 'vue';
  import Navegacion from '@/components/Navegacion.vue';
  
  export default defineComponent ({
    name: 'Navegacion', 
     components: {
      Navegacion,   
   }
  })
 </script>

<template>
  <div class="container">
    <ul class="slider">
      <li id="slide1">
        <img src="../assets/informacion.png" alt="personador">
        <h3>Soy el texto de la primera imagen</h3>
      </li>
      <li id="slide2">
        <img src="../assets/informacion2.png" alt="documento">
      </li>
      <li id="slide3">
        <img src="../assets/tramites.png" alt="tramites">
      </li>
    </ul>
  <ul class="menu">
    <li>
      <a href="#slide1">1</a>
    </li>
    <li>
      <a href="#slide2">2</a>
    </li>
     <li>
      <a href="#slide3">3</a>
    </li>
  </ul>
</div>
</template>

<style scoped>
/*.gallery {
  width: 100rem;
  height: 40rem;
  margin-left: 2.7%;
  margin-top: 2%;
  position: relative;
  display: flex;
  overflow: auto;
  border-radius: 20px;
  box-shadow: 5px 8px 12px black;
}
ul, li {
  margin:0;
  padding: 0;
  list-style: none;
}
ul.gallery{
  position: relative;
  width: 90rem;
  height: 33rem;
}
ul.gallery li{
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: inherit;
  height: inherit;
  background-color: white;
  transition: opacity .5s;

}
ul.gallery li img {
  width: 60rem;
  height: 40rem;
  margin-top: 4%;
  position: center;
  flex-shrink: 0;
  object-fit: cover;
}
.gallery:-first-child {
  opacity: 1;
  
}*/
body{
  background-color: lightgrey;
  font-family: sans-serif;
}
.container{
  margin: auto;
  background-color: white;
  width: 80%;
  padding: 1%;
  margin-left: 35%;
}
ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
}
ul.slider{
  position: relative;
  width: 80%;
  height: auto;
}
ul.slider li {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  width: inherit;
  height: inherit;
  transition: opacity .5s;
  background:#fff;
}
ul.slider li img{
  width: 70%;
  height: 190%;
  object-fit: cover;
  opacity: 0.7;
}
ul.slider li:first-child {
  opacity: 1; /*Mostramos el primer <li>*/
}
ul.slider li:target {
  opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}
.menu{
  margin-bottom: left;
  margin: 10%;
  margin-top: 7%;
}
.menu li{
  display: inline-block;
  text-align: center;
  margin-top: 43%;
}
.menu li a{
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: rgb(121, 151, 101);
  padding: 5px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  border-radius: 100%;
}
h3{
  font-family: Roboto;
  color: rgba(66, 138, 58, 0.863);
  position: absolute;
  font-size: 125%;  
  top: 25%;
  left: 30%;
}
</style>