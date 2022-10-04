<template>
<div class="container">
  <form action="action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">Nombres</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Tú nombre..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Apellidos</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Tus Apellidos..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Telefono</label>
        <input type="text" id="lname" name="lastname" placeholder="Tu número de telefono..">
      </div>
      <div class="col-25">
        <label for="country">Dirección</label>
        <input type="text" id="lname" name="lastname" placeholder="Tu dirección..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Hechos 1</label>
        <input type="text" id="lname" name="lastname" placeholder="Escribe lo que sucedio">
        <textarea id="subject" name="subject" style="height:200px"></textarea>
      </div>
      <div class="col-25">
        <label for="subject">Hechos 2</label>
        <input type="text" id="lname" name="lastname" placeholder="Escribe lo que sucedio">
        <textarea id="subject" name="subject" style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="buttonTest" value="Enviar" @click="retrieveData()">
      <h1 v-if="this.flag">{{this.datos}}</h1>
      <h1 v-else>Not information</h1>
    </div>
  </form>
</div>
</template>
  
<script>
  import axios from 'axios';
  export default {
  data() {
    return {
      datos: null,
      flag: false
    }
  },  
  methods: {
    retrieveData() {
      axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json')
        .then(response => {
          console.log(response)
          this.datos = response.data
        })
        .catch(error => {
          console.log(error)
        })  
      this.flag = true  
  }
  }
}

</script>

<style>
/* Style inputs, select elements and textareas */
input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
input[type=buttonTest] {
  background-color: #04AA6D;
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
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 35%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
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
    margin-top: 0;
  }
}
</style>
