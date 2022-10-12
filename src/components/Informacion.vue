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
    <div class="container__cards">
        <div class="card">
            <div class="cover">
                <img src="../assets/imagenes/normativdad1.png" alt="">
                <div class="img__back"></div>
            </div>
            <div class="description">
                <h2>Derecho de Peticiòn</h2>
                <p>LEY 1755 DE 2015 (Junio 30) <br>
                   “Por medio de la cual se regula el Derecho Fundamental de Petición
                   y se sustituye un título del Código de Procedimiento Administrativo 
                   y de lo Contencioso Administrativo”</p>
                   <a href='https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334' target="_bank"><input type='button' value='Leer Más'></a>
            </div>
        </div>
        <div class="card">
            <div class="cover">
                <img src="../assets/imagenes/Normatividad.png" alt="">
                <div class="img__back"></div>
            </div>
            <div class="description">
                <h2>Devoluciones</h2>
                <p>Ordenanza 816 del 2017 Art. 302 Devolución de saldos a favor<br>  
                Los contribuyentes que liquiden saldos a favor en sus declaraciones, 
                podrán solicitar devolución. La solicitud deberá presentarse a más 
                tardar dos (2) años después de la fecha para declarar.</p>
                <a href='https://www.ilc.com.co/storage/files/LFURUJEAWN_20190409220458.pdf' target='_bank'><input type='button' value='Leer Más'></a> 
            </div>
        </div>

        <div class="card">
            <div class="cover">
                <img src="../assets/imagenes/formulario3.png" alt="">
                <div class="img__back"></div>
            </div>
            <div class="description">
                <h2>Prescripción</h2>
                <p>Art. 817. Termino de la prescripción (Estatuto Tributario Nacional) <br> La acción de cobro de las obligaciones 
                fiscales prescribe en el término de cinco (5) años, contados a partir de la fecha en 
                que se hicieron legalmente exigibles.</p>
                <a href='https://estatuto.co/817' target='_bank'><input type='button' value='Leer Más'></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}  

template{
    background: #F1FAFF;
    font-family: 'Inconsolata', monospace;
}

.container__cards{
    max-width: 1200px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position:relative;
    
}

.card{
    width: 300px;
    margin: 10px;
    transition: all 300ms;
    border-radius: #244840 solid;
}

.card:hover{
    width: 350px;
}

.card .cover{
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
}

.card .cover img{
    width: 250px;
    display: block;
    margin: auto;
    position: relative;
    top: 60px;
    z-index: 1;
    filter: drop-shadow(5px 5px 4px rgba(0,0,0,0.5));
    transition: all 400ms;
}

.card:hover .cover img{
    top: 0px;
    filter: none;
}

.card .img__back{
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: -80px;
    left: 0;
    background-size: cover;
    border-radius: 20px;
    transition: all 300ms;
}

.card:nth-of-type(1) .img__back{
    background-image: url(../assets/imagenes/fondo.png);
}

.card:nth-of-type(2) .img__back{
    background-image: url(../assets/imagenes/fondo.png);
}

.card:nth-of-type(3) .img__back{
    background-image: url(../assets/imagenes/fondo.png);
}

.card:hover .img__back{
    bottom: -40px;
}

.card .description{
    background: white;
    margin-top: -10px;
    padding: 20px;
    border-radius: 0px 0px 20px 20px;
    transition: all 300ms;
}

.card:hover .description{
    padding: 40px;
}

.card .description h2{
    margin-top: 10px;
}

.card .description p{
    margin-top: 10px;
}

.card .description input{
    padding: 10px 40px;
    margin-top: 20px;
    border: none;
    background: linear-gradient(180deg, #244840 0%, #3d804a 100%);
    color: white;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 300ms;
}

.card .description input:hover{
    background: #51d0bb;
}
h2{
    font-size: 30px;
    color: #3d804a;   
}
p{
  color:#244840;  
}

</style>