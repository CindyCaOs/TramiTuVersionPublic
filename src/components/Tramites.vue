<template>
<div class="title">
  <h1>Escoge el tipo de trámite que deseas realizar</h1>
</div> 
<section id="container">
  <div class="w3-card-4">
    <a href="/Formulario" target="_blank"><img class="Box_tramite" src="../assets/imagenes/derechodepeticion.png" alt="PQR'S"></a>
  </div> 
  <div class="w3-container w3-center">
    <a href="/Formulario" target="_blank"><img class="Box_tramite" src="../assets/imagenes/devoluciones.png" alt="PQR'S"></a>
  </div>    
  <div class="w3-container w3-center">
    <a href="/Formulario" target="_blank"><img class="Box_tramite" src="../assets/imagenes/prescripcion.png" alt="PQR'S"></a>
  </div>  
</section>
 
</template>

<script>
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
#container{
  align-items: flex-start;
  display: flex;
  flex-direction: row; 
}
.Box_tramite{
  width: 65%;
  margin-top: 8%;
  margin: 10%;
}
.title{
  font-size: 150%;
  text-align: center;
  color: rgba(66, 138, 58, 0.863);
  font-family: Roboto;
  margin-top: 4%;
}
</style>