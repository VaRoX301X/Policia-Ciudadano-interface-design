<template>
    <div id="policia">
      <h1>Numero placa: {{ datos }}</h1>
    </div>
</template>

<script>
    export default {
        name: "policia",
      data() {
          return {
            datos: null
          }
      },
      created() {
          this.datos = this.$route.params.id_policia;
      }
    }
</script>

<style scoped>

</style>
