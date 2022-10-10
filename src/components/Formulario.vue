<template>
    <formkit>
        type= "form"
        submit-label= "Enviar"
        @submit="save"
        v-model="formData"
    <Formkit 
        type="text"
        label="Tu Nombre"
        name="your_name"
        placeholder="Tù nombre aquì"
        validation="required|length:4"
    />
    <Formkit 
        type="select"
        label="Tu Apellido"
        name="last_name"
        placeholder="Tù apellido aquì"
        validation="required|length:4"
    />
    </formkit>
    <formkit
        type= "form"
        submit-label= "Enviar"
        @submit="save"
        v-model="formData"
  />
    <Formkit 
        type="word"
        label="Tu Nombre"
        name="your_name"
        placeholder="Tù nombre aquì"
        validation="required|length:4"
    />
    <Formkit 
        type="select"
        label="Tipo de documento"
        name="id-document"
        :options="['T.I','C.C', 'C.E']"
        placeholder="Nùmero de documento"
        validation="required|length:3"
        />
</template>

<script>
import { ref } from 'vue';

const formData = ref(null)

const save = (data) => {
    console.log(data)
    alert('Generado!')
}
</script>
