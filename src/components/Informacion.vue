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
  <div class="gallery">
    <img src="../assets/peticion1.jpg" alt="manos de una persona computador">
    <img src="../assets/peticion2.jpg" alt="documento">
    <img src="../assets/peticion3.jpg" alt="tramites">
  </div>
</template>

<style scoped>
.gallery {
  width: 90rem;
  height: 33rem;
  margin-left: 2.7%;
  margin-top: 2%;
  position: relative;
  display: flex;
  overflow: auto;
  border-radius: 20px;
  box-shadow: 5px 8px 12px black;
}
.gallery img {
  width: 100%;
  height: 100%;
  position: sticky center;
  flex-shrink: 0;
  object-fit: cover;
  scroll-snap-aling: start;
}
.gallery::-webkit-scrollbar-button¨{

}
</style>