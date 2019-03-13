<template>
    <div id="policia" v-if="policia">
      <h1>{{ policia.nombre }} {{ policia.apellidos }}</h1>
      <h3>Nombre del policia: {{ policia.nombre }}</h3>
      <h3>Apellidos del policia: {{ policia.apellidos }}</h3>
      <h3>Placa del policia: {{ policia.numeroPlaca }}</h3>
    </div>
</template>

<script>
  import db from '../../firebase/init';
    export default {
        name: "policia",
      data() {
          return {
            datos: null,
            policia: null
          }
      },
      created() {
          this.datos = this.$route.params.id_policia;
        let ref = db.collection('policia').where('numeroPlaca', '==', this.$route.params.id_policia);
        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.policia = doc.data();
            this.policia.id = doc.id;
            console.log(this.policia);
          })
        })
      }
    }
</script>

<style scoped>

</style>
