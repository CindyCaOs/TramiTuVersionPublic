<template>
<div class="title">
  <h1>Escoge el tipo de trámite que deseas realizar</h1>
</div> 
<section id="container">
  <div class="w3-card-4">
    <a href="/Formulario" target="_blank"><img class="Box_tramite" src="../assets/derechodepeticion.png" alt="PQR'S"></a>
  </div> 
  <div class="w3-container w3-center">
    <a href="/Formulario" target="_blank"><img class="Box_tramite" src="../assets/derechodepeticion.png" alt="PQR'S"></a>
  </div>    
  <div class="w3-container w3-center">
    <a href="/Formulario" target="_blank"><img class="Box_tramite" src="../assets/derechodepeticion.png" alt="PQR'S"></a>
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
  width: 50%;
  margin-top: 8%;
  margin: 20%;
}
.title{
  font-size: 150%;
  text-align: center;
  color: rgba(66, 138, 58, 0.863);
  /*color:rgb(96, 134, 111);*/
  font-family: Roboto;
  margin-top: 8%;
}
</style>