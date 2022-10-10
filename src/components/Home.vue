<template>
  <div class="contenedor">
    <div class="slider-contenedor">
      <div class="contenido-slider">
        <section id="conten_inicial">
          <div>
            <h2 class="subtitle1"> En TramiTú podras generar Derechos de peticion, Devoluciones y Prescripciones para
              presentar a la Gobernación de Caldas, tambien encontraras la Normatividad y la Documentación que debes anexar 
              a cada solicitud.
            </h2>
            <a href="Home1"></a>
          </div>
            <img class="img_1" src="../assets/Home2.png" alt="mujer creando peticion">         
        </section>
      </div>    
    </div>
  </div>
      <div>
        <section id="conten_inicial">
          <img class="img_2" src="../assets/home.png" alt="mujer creando peticion">
          <div>
            <h1>Sabias que!!</h1>
            <h2 class="subtitle2">gracias a la Constitución Política y a la Ley 1755 de 2015, tienes derecho 
              a hacer peticiones y a recibir una respuesta rápida y completa.
              Puedes dirigir tú petición a cualquier entidad pública, empresa privada, asociaciones
              u organizaciones. También puedes dirigir tú petición a una persona natural si dicha 
              persona tiene una posición dominante frente a tí.
            </h2>
            <a href="Home1"></a>
          </div>
        </section>
      </div>    
      <div>
        <section id="conten_inicial">
          <div>
            <h2 class="subtitle3">Para presentar su Petición ante cualquier autoridad o entidad, tenga en cuenta 
              qué es lo que realmente necesita. La entidad o persona a quien va dirigida la petición. <br><br>
              1. Su nombre o el de la persona que presenta la petición.<br>
              2. Su número de cédula, tarjeta de identidad o pasaporte, según corresponda.<br>
              3. La explicación clara de lo que pide, solicita o necesita.<br>
              4. Los motivos o razones por las cuales realiza la petición.<br>
              5. Una dirección física o un correo electrónico en donde desea recibir la respuesta. </h2><br>
            <a href="Home1"></a>
          </div>
            <img class="Img_3" src="../assets/Home1.png" alt="mujer creando peticion">
        </section>
        <section id="conten_inicial">
         <img class="Img_4" src="../assets/home3.png" alt="hhh">
         <div>
            <h2 class="subtitle4">En cuanto a la respuesta de las entidades <br>
              Todas están obligadas a recibir, informar o responder su petición en los siguientes tiempos o plazos:<br><br>
              5 días hábiles <br>
              Si lo que usted solicita no es competencia o función de la entidad, en este plazo se
              le informará el traslado de la petición a la entidad que corresponda.<br>
              10días hábiles <br>
              Si solicita información pública, documentos o copias de documentos<br>
              15 días hábiles<br>
              Es el plazo máximo para responder las solicitudes de interés general, quejas, reclamos o sugerencias.<br>
              30días hábiles<br> 
              Es el plazo específco para responder consultas, conceptos jurídicos o técnicos relacionados con 
              tareas y acciones a cargo de la entidad.
            </h2>
          <a href="Home1"></a>
          </div>
        </section>
      </div>    
   <!-- Load font awesome icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!-- The social media icon bar -->
<div class="icon-bar">
  <a href="http://ventanillaunica.caldas.gov.co/peticiones-quejas-y-reclamos/#/login" target="_blank"><i class="fa fa-stack-exchange"></i></a>
  <a href="https://es-la.facebook.com/GobernaciondeCaldas/" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="http://ventanillaunica.caldas.gov.co/peticiones-quejas-y-reclamos/#/login" target="_blank" class="google"><i class="fa fa-google"></i></a>
  <a href="https://www.youtube.com/watch?v=E-SOGVZlEQo" target="_blank" class="youtube"><i class="fa fa-youtube"></i></a>
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
body{
 font-family: Roboto;
}
.contenedor{
  width: 100%;
}
#conten_inicial{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.contenido-slider{
  width: 100%;
  height: 50%;
  display: flexbox;
}
.img_1{
  width: 25%;
  height: 20%;
  margin-right: 20%;
}
.subtitle1{
  width: 45%;
  text-align: center;
  justify-content: flex-start;
  display: inline-block;
  margin-top: 10%;
  margin-right: 60%;
  margin-left: 35%;
  color: rgba(66, 138, 58, 0.863);
  align-items: center;
  font-size: 125%;  
}
.img_2 {
  width: 25%;
  height: 20%;
  margin-left: 15%;
}
.subtitle2 {
  width: 45%;
  justify-content: center;
  text-align: center;
  display: inline-block;
  margin-top: 0%;
  margin-right: 0%;
  margin-left: 20%;
  color: rgba(66, 138, 58, 0.863);
  align-items: center;
  font-size: 125%;  
}
h3{
  width: 65%;
  justify-content: center;
  text-align: justify;
  display: inline-block;
  margin-top: 0%;
  margin-right: 0%;
  margin-left: 20%;
  color: rgba(66, 138, 58, 0.863);
  align-items: center;
  font-size: 110%;  
}
.Img_3 {
  width: 30%;
  height: 30%;
  margin-right: 12%;
}
h1{
  width: 45%;
  justify-content: center;
  text-align: center;
  display: inline-block;
  margin-top: 0%;
  margin-right: 0%;
  margin-left: 20%;
  color: rgba(66, 138, 58, 0.863);
  align-items: center;
  font-size: 125%; 
}
.subtitle3 {
  width: 45%;
  justify-content: left;
  text-align: justify;
  margin-right: 6%;
  margin-left: 37%;
  color: rgba(66, 138, 58, 0.863);
  font-size: 125%;  
}
.Img_4{
  width: 25%;
  height: 20%;
  margin-left: 15%;

}
.subtitle4{
  width: 45%;
  justify-content: center;
  text-align: justify;
  display: inline-block;
  margin-top: 0%;
  margin-right: 0%;
  margin-left: 20%;
  color: rgba(66, 138, 58, 0.863);
  align-items: center;
  font-size: 125%;  
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
.material-symbols-outlined {
  color: #367042;
}
</style>