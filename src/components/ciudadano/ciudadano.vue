<template>
    <div id="ciudadano" v-if="ciudadano">
      <h3>Nombre: {{ ciudadano.nombre }}</h3>
      <h3>Apellidos: {{ ciudadano.apellidos }}</h3>
      <h3>DNI: {{ ciudadano.dni }}</h3>
      <h3>Genero: {{ ciudadano.genero }}</h3>
      <h3>Edad: {{ ciudadano.edad }}</h3>
    </div>
</template>

<script>
  import db from '../../firebase/init';
    export default {
        name: "ciudadano",
      data(){
          return {
            datos: null,
            ciudadano: null
          }
      },
      created() {
          this.datos = this.$route.params.id_ciudadano
        let ref = db.collection('ciudadano').where('usuario', '==', this.$route.params.id_ciudadano);
        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.ciudadano = doc.data();
            this.ciudadano.id = doc.id;
            console.log(this.ciudadano);
          })
        });
      }
    }
</script>

<style scoped>

</style>
