<template>
    <div id="editar-ciudadano">
      <h1>editar {{ data }}</h1>
    </div>
</template>

<script>
    export default {
        name: "editarCiudadano",
      data() {
          return {
            data: null,
          }
      },
      created() {
          this.data = this.$route.params.id_ciudadano;
      }
    }
</script>

<style scoped>

</style>
