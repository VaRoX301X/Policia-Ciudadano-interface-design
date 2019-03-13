<template>
    <div id="ciudadano">
      <h1>{{ datos }}</h1>
    </div>
</template>

<script>
    export default {
        name: "ciudadano",
      data(){
          return {
            datos: null
          }
      },
      created() {
          this.datos = this.$route.params.id_ciudadano;
      }
    }
</script>

<style scoped>

</style>
