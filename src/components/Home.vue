<template>
  <div class="Home">
   <div><img class="img_gobernacion" alt="Gobernación de Caldas" src="../assets/gobernacion.png"></div>
   <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
   <div class="subtitle" > <h2> En Colombia todos tenemos la facultad para presentar solicitudes 
    respetuosas ante las entidades Gubernamentales, ya sea por motivos de interés 
    general o particular. </h2>
   </div>
   <div class="subtitle" ><h2>En TramiTú podras generar Derechos de peticion, Devoluciones y Prescripciones para
    presentar a la Gobernación de Caldas, tambien encontraras la Normatividad y la Documentación que debes anexar 
    a cada solicitud.</h2>
   </div>
   <!-- Load font awesome icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- The social media icon bar -->
<div class="icon-bar">
  <a href="https://es-la.facebook.com/GobernaciondeCaldas/" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="http://ventanillaunica.caldas.gov.co/peticiones-quejas-y-reclamos/#/login" target="_blank" class="google"><i class="fa fa-google"></i></a>
  <a href="https://www.youtube.com/watch?v=E-SOGVZlEQo" target="_blank" class="youtube"><i class="fa fa-youtube"></i></a>
</div>   
  </div>
</template>

<script>
import Navegacion from '@/components/Navegacion.vue';
import { defineComponent } from 'vue'

export default  defineComponent ({
  name: 'Navegacion',
  components: {
    Navegacion
}
})
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.Hello {
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: row; 
  align-items:inherit;
}
.img_gobernacion{
  object-fit: cover;
  margin: 3%;
  margin-top: 0%;
  width: 35%;
  height: 40%;
  opacity: 0.6;
  display:flow-root;
  float: left;
  column-width: 5%;
  align-self: center;
}
.subtitle {
  width: 45%;
  justify-content: right;
  margin-top: 2%;
  margin-left: 40%;
  color: rgba(123, 158, 102, 0.863);
  font-stretch: wider;
  font-size: 20px;
  align-self: auto;
}
/* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

/* Style the icon bar links */
.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

/* Style the social media icons with color, if you want */
.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3B5998;
  color: white;
}

.google {
  background: #367042;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}
</style>