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
        <img class="img1" src="../assets/imagenes/Home6.png" alt="persona con hoja">
        <h1>El derecho de petición es un derecho fundamental
        establecido en el artículo 23 de la Constitución
        Política de Colombia. <br>
        Es la facultad que tiene toda persona para presentar solicitudes respetuosas 
        ante las autoridades o entidades, ya sea por motivos de interés general o particular.  
        </h1>
      </li>
      <li id="slide2">
        <img class="img2" src="../assets/imagenes/informacion2.png" alt="documento">
        <!--h1>Devolución: Derecho que tiene el contribuyente a solicitar el reintegro de una parte o el total del dinero 
          pagado a la administración, a causa de un pago mayor al debido , pago de lo no debido o pago en exceso</h1-->
      </li>
      <li id="slide3">
        <img class="img3" src="../assets/imagenes/tramites.png" alt="tramites">
        <!--h1>Prescripción: es el fenómeno mediante el cual el ejercicio de un derecho se adquiere 
        o se extingue con el solo transcurso del tiempo. Esto es de acuerdo a las condiciones 
        descritas en las normas para cada situación</h1-->
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
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}  
body{
  background-color: lightgrey;
  font-family: sans-serif;
}
.container{
  margin: 0%;
  background-color: white;
  width: 65%;
  padding: 0.9%;
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
  left: 0%;
  top: 0%;
  opacity: 0;
  width: inherit;
  height: inherit;
  transition: opacity .5s;
  background:#fff;
}
ul.slider li img{
  width: 70%;
  height: 190%;
  margin: 2%;
  /*opacity: 0.7;*/
}
.img1 {
  width: 100%;
  height: 50%;
  margin: 5%;
}
.img2 {
  width: 100%;
  height: 50%;
  margin: 5%;
}
ul.slider li:first-child {
  opacity: 1; /*Mostramos el primer <li>*/
}
ul.slider li:target {
  opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}
.menu{
  margin-bottom: left;
  margin: 20%;
  margin-top: 26%;
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
  padding: 2px;
  width: 30px;
  height: 28px;
  font-size: 20px;
  border-radius: 100%;
}

h1{
  font-family: Roboto;
  color: rgba(66, 138, 58, 0.863);
  position: absolute;
  font-size: 125%;  
  top: 94;
  left: 0%; 
 
}
</style>