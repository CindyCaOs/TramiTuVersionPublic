<template>
  <section class="main">
    <figure class="main__figure">
      <img src="../assets/imagenes/form1.png" class="main__img" />
      <img src="../assets/imagenes/Home6.png" class="main__img" />
      <img src="../assets/imagenes/presentacion3.png" class="main__img" />
    </figure>
    <form class="form">
      <p class="form_paragraph">
        Para generar el documento por favor diligencia los siguientes datos
      </p>
      <div class="form_container">
        <div class="form_group">
          <select
            name="Municipio"
            id="Municipio"
            placeholder=""
            class="form_input"
            v-model="municipio"
            @click="cargarMunicipios()"
          ></select>
          <label class="form_label" for="Municipio">Ciudad</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            v-model="Fecha"
            id="Fecha"
            placeholder=""
            class="form_input"
          />
          <label class="form_label" for="name">Fecha</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            v-model="Nombre"
            id="Nombre"
            placeholder=""
            class="form_input"
          />
          <label class="form_label" for="name">Nombre</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            id="Apellidos"
            v-model="apellidos"
            placeholder=""
            class="form_input"
          />
          <label class="form_label" for="name">Apellido..</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <select
            name="id-document"
            id="Tipo_documento"
            placeholder=""
            v-model="tipodocumento"
            class="form_input"
          >
            <option value="Tarjeta de Identidad" class="form_input">
              Tarjeta de Identidad
            </option>
            <option value="Cedula de Ciudadania" class="form_input">
              Cedula de Ciudadania
            </option>
            <option value="Cedula de Extranjeria" class="form_input">
              Cedula de Extranjeria
            </option>
          </select>
          <label class="form_label" for="name">Tipo de documento</label>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            id="Hechos"
            placeholder=""
            v-model="hechos"
            class="form_input"
          />
          <label class="form_label" for="name">Hechos</label>
          <textarea
            id="Sucesos"
            class="form_input"
            v-model="hechos_text"
            style="height: 60px"
          ></textarea>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            id="Peticion"
            placeholder=""
            v-model="peticiones"
            class="form_input"
          />
          <label class="form_label" for="name">Petición</label>
          <textarea
            id="Peticiones"
            class="form_input"
            v-model="peticiones_text"
            style="height: 60px"
          ></textarea>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            id="Telefono"
            placeholder=""
            v-model="telefono"
            class="form_input"
          />
          <label class="form_label" for="name">Número de Telefono</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            id="Num_tel"
            placeholder=""
            v-model="correo"
            class="form_input"
          />
          <label class="form_label" for="name">Correo electrónico</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="form_container">
        <div class="form_group">
          <input
            type="text"
            id="Email"
            placeholder=""
            v-model="dirnotificacion"
            class="form_input"
          />
          <label class="form_label" for="name">Dirección de notificación</label>
          <span class="form_line"></span>
        </div>
      </div>
      <div class="">
        <input type="button" value="Generar" v-on:click="pdfDownload" class="card_button" />
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';
import { jsPDF } from "jspdf";

export default {
data() {
  return {
    datos: [],
    auxiliarDatos: [],
    Nombre:'',
    apellidos:'',
    tipodocumento:'',
    numberdocumento:'',
    telefono:'',
    municipio:'',
    direccion:'',
    hechos:'',
    hechos_text:'',
    peticiones:'',
    peticiones_text:'',
    correo:'',
    dirnotificacion:'',
    resultado: '',
    doc: '',
  }
},  
methods: {
  nombre() {
   this.resultado='Yo '+ this.Nombre + this.apellidos + 'identificada con' + this.tipodocumento + 'número' + this.numberdocumento +
   'y domiciliado en la calle' + this.direccion + 'en ejercicio del derecho de petición que consagra el artículo 23 de la Constitución Política de Colombia, Ley 1755 del 30 de junio de 2015 y demás normas concordantes, por medio del presente me permito solicitar se atienda la petición que más adelante formulare, de conformidad a los siguientes' +
   this.hechos + 'Por lo tanto con base en lo esbozado en el acápite anterior, solicito la siguiente' + 
   this.peticiones + 'Para los efectos pertinentes, anexo los siguientes soportes y documentos:'     
  },
  retrieveData() {
    axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json')
      .then(response => {
        console.log(response.data)
        this.datos = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  filtrarDatos() {
    for (let index = 278; index <= 303; index++) {
      this.auxiliarDatos.push(this.datos[index]);
    }
    this.datos = this.auxiliarDatos;
    console.log(this.datos);
    this.flag = true;
  },
  cargarMunicipios() {
    var select = document.getElementById("Municipio"); 
    this.datos.forEach(element => {
      var option = document.createElement("option"); 
      console.log(option);
      option.innerHTML = element.municipio;
      select.appendChild(option); 
    });
  },
  prueba(){
    this.datos.forEach(element => {
      console.log(element.municipio);
    });
  },
pdfDownload: function () {
      this.Nombre = document.getElementById('Nombre').value
      console.log("Entre a la funcion");
      const doc = new jsPDF();
      
        doc.text ('Yo '+ this.Nombre + this.apellidos + 'identificada con' + this.tipodocumento + 'número' + this.numberdocumento +
        'y domiciliado en la calle' + this.direccion + 'en ejercicio del derecho de petición que consagra el artículo 23 de la Constitución Política de Colombia, Ley 1755 del 30 de junio de 2015 y demás normas concordantes, por medio del presente me permito solicitar se atienda la petición que más adelante formulare, de conformidad a los siguientes' +
        this.hechos + 'Por lo tanto con base en lo esbozado en el acápite anterior, solicito la siguiente' + 
        this.peticiones + 'Para los efectos pertinentes, anexo los siguientes soportes y documentos:', 30, 30, {
        align: 'center',
        with: '80',
        display: 'flex',
        width: '980px',
        margin: '0 auto',
   
    
      });
      doc.save("peticion.pdf")
    },
},
mounted(){
this.retrieveData();
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

template {
  font-family: "Inconsolata", monospace;
  min-height: 600px;
  padding: 80px 0;
  background-image: linear-gradient(to top, #a3edc9 0%, #14322e 100%);
  background-color: #46762a;
  background-repeat: no-repeat;
  display: flex;
}

.main {
  margin: auto;
  width: 90%;
  max-width: 1000px;
  background-image: linear-gradient(to left, #f0f5ec, #e8f5cc);
  overflow: hidden;
  padding: 0.7em;
  border-radius: 1em;
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 0.6em;
  animation: mostrar 1s ease-in-out;
}

/* @keyframes mostrar { */
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}

.main__figure {
  overflow: hidden;
  position: align-self start;
  border-radius: 3em;
  justify-content: space-evenly;
  background-color: #e8f5cc;
  display: inline-table;
}

.main__img {
  margin-top: 10px;
  width: 100%;
  max-width: 60vw;
}
body {
  font-family: "Inconsolata", monospace;
  background-color: antiquewhite;
  background-image: radial-gradient(#e8f5cc 0.5px, transparent 0.5px),
    radial-gradient(#e8f5cc 0.5px, transparent 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  display: flex;
  min-height: 100vh;
}
.form {
  background-color: rgb(232, 243, 225);
  margin: auto;
  width: 90%;
  max-width: 400px;
  padding: 4sem 3em;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
  text-align: center;
}
.form_paragraph {
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  color: #46762a;
}
.form_container {
  margin-top: 3em;
  display: grid;
  gap: 2.5sem;
}
.form_group {
  position: relative;
  color: #438a1f;
}
.form_input {
  width: 100%;
  background: none;
  color: #93373780;
  font-size: 1rem;
  padding: 0.6em 0.3em;
  border: none;
  outline: none;
  border-bottom: 0.8px solid #dbe5d5;
  font-family: "Inconsolata", monospace;
}
.form_label {
  color: #e79e0a;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 5px;
  font-size: 18px;
  font-weight: bold;
  transform: translateY(10px);
  transition: transform 0.5s color 0.3s;
}
.form_input:focus + .form_label,
.form_input:not(:placeholder-shown) + .form_label {
  transform: translateY(-12px) scale(0.6);
  transform-origin: left top;
  color: #153434;
}
.card_button {
  margin-top: 5%;
  display: block;
  background: linear-gradient(180deg, #41a566 0%, #5f9273 100%);
  border-radius: 35px;
  text-decoration: none;
  width: 100%;
  color: #89ff4f;
  font-weight: 800;
  text-align: center;
  padding: 12px 0;
}
</style>