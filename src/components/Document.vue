<template>
  <section id="main-container">
  <link href='https://fonts.googleapis.com/css?family=DynaPuff' rel='stylesheet'/> 
    <div class="block">
      <BoxFormulario title="Derechos de Peticiòn"/> 
    </div>
    <div class="block">
      <BoxFormulario title="Devoluciòn"/>
    </div>
    <div class="block">
      <BoxFormulario title="Prescripciòn"/>
    </div>
  </section>
</template>

<script>
  export default {
  name: 'Document',
   defineProps: {
      title,
      subtitle,
      description,
  }
}
</script>

<style scoped lang="scss">
</style>