<template>
<div class="container">
  <h4>Para generar el documento por favor diligencia los siguientes datos</h4>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col-25">
         <label for="fname">Nombres</label>
        </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" v-model="Nombre" placeholder="Nombres..">
      </div>
  </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Apellidos</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" v-model="apellidos" placeholder="Apellidos..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="id-select">Tipo de documento</label> <br>
          <select name="id-document" id="id-select" v-model="tipodocumento">
            <option value="">Selecciona tipo de documento</option>
            <option value="T.I">T.I</option>
            <option value="CC">C.C</option>
            <option value="CE">C.E</option>
          </select> 
          <br> <!--agregar un espacio en esta parte-->
        <input type="text" id="lname" name="lastname" placeholder="Número de documento.." v-model="numerodocumento">
      </div>  
    </div>
    <div class="row">
      <div class="col-25">
        <label for="provincias">Municipio</label>
        <select name="provincias" id="provincias" v-model="municipio" @click="cargarMunicipios()"></select>
        <label for="country">Dirección</label>
        <input type="text" id="lname" name="lastname" placeholder="Dirección.." v-model="direccion">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Hechos</label>
        <input type="text" id="lname" name="lastname" placeholder="Sucesos" v-model="hechos">
        <textarea id="subject" name="subject" style="height:200px"></textarea>
      </div>
      <div class="col-25">
        <label for="subject">Peticiones</label>
        <input type="text" id="lname" name="lastname" placeholder="Peticiòn" v-model="peticiones">
        <textarea id="subject" name="subject" style="height:200px"></textarea>
      </div>
      <div class="col-25">
        <label for="country">Datos de contacto</label><br>
        <label for="country">Telefono</label>
        <input type="text" id="lname" name="lastname" placeholder="Número de teléfono" v-model="telefono">
        <label for="country">Correo electrónico</label>
        <input type="text" id="lname" name="lastname" placeholder="Email" v-model="correo">
        <label for="country">Dirección de notificación</label>
        <input type="text" id="lname" name="lastname" placeholder="Dirección  de notificación" v-model="dirnotificacion">
      </div>
    </div>
    <div class="row">   
      <input type="buttonTest" value="Generar" @click="generarpdf()">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js">
    </div>
    </form>
   <!-- <p class="peticion">{{resultado}}</p> -->
  </div>
</div>  
</template>
  
<script>
  import axios from 'axios';
  export default {
  data() {
    return {
      datos: [],
      auxiliarDatos: [],
      Nombre:'',
      apellidos:'',
      tipodocumento:'',
      numerodocumento:'',
      telefono:'',
      municipio:'',
      direccion:'',
      hechos:'',
      peticiones:'',
      correo:'',
      dirnotificacion:'',
      resultado: '',
      doc: '',
    }
  },  
  methods: {
    nombre() {
     this.resultado='Yo '+this.Nombre + this.apellidos +'con'+this.tipodocumento + 'número' + 
     'y domiciliado en la calle' + this.direccion + 'en ejercicio del derecho de petición que consagra el artículo 23 de la Constitución Política de Colombia, Ley 1755 del 30 de junio de 2015 y demás normas concordantes, por medio del presente me permito solicitar se atienda la petición que más adelante formulare, de conformidad a los siguientes' +
     this.hechos + 'Por lo tanto con base en lo esbozado en el acápite anterior, solicito la siguiente' + 
     this.peticiones + 'Para los efectos pertinentes, anexo los siguientes soportes y documentos:'     
    },
   generarpdf() {
      doc.fromHTML($('#abc').html(), 15, 15, {'width': 170,
      'elementHandlers': specialElementHandlers });
      doc.save('SurveyReport.pdf');
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
      var select = document.getElementById("provincias"); //Seleccionamos el select
      this.datos.forEach(element => {
        var option = document.createElement("option"); //Creamos la opcion
        console.log(option);
        option.innerHTML = element.municipio; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
      });
    },
    prueba(){
      this.datos.forEach(element => {
        console.log(element.municipio);
      });
    },
  },
mounted(){
  this.retrieveData();
}
}

</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.peticion{
  color: red;
}
input[type=text], select, textarea{
  width: 100%;
  padding: 0.5%;
  border: 1px solid white;
  border-radius: 4px;
  box-sizing: border-box;
  resize: horizontal;
}

/* Style the label to display next to the inputs */
label {
  padding: 2.5% 2.5% 1% 0;
  display: inline-block;
}

/* Style the submit button */
input[type=buttonTest] {
  background-color: rgba(66, 138, 58, 0.863);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  text-align: center;
}
/* Style the container */
.container {
  background-color: #f2f2f2;
  padding: 20px;
}
/* Floating column for labels: 25% width */
.col-25 {
  float: auto;
  width: 30%;
  margin-top: 6px;
  margin-left: 30%;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 15%;
  margin-left: 30%;
  margin-top: 6px;
}
h4{
  color: rgba(66, 138, 58, 0.863);
  font-size: 125%;
  margin-top:0.5%;
  font-family: Roboto;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
.col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 20%;
  }
}
</style>


