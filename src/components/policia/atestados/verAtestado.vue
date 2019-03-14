<template>
  <div id="ver-atestado">
    <div class="volver">
      <i class="fas fa-arrow-circle-left" style="color: cadetblue; font-size: 4rem;"
         v-on:click.prevent="volverAtras"></i>
    </div>
    <div class="container">
      <hr>
      <i class="fas fa-file-alt" style="font-size: 7rem; color: #000;"></i>
      <hr>
      <h3>{{ atestado.titulo }}</h3>
      <hr>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ atestado.lugar }}</h5>
              <p class="card-text">{{ atestado.descripcion }}</p>
              <h5 class="card-title">Personas involucradas</h5>
              <p class="card-text" v-for="dni in atestado.contactos">{{dni}}</p>
              <h5 class="card-title">Vehículos involucrados</h5>
              <p class="card-text" v-for="vehiculo in atestado.vehiculos">{{vehiculo}}</p>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../../../firebase/init';

  export default {
    name: "verAtestado",
    data() {
      return {
        datos: null,
        slug: null,
        atestado: null,
      }
    },
    methods: {
      volverAtras() {
        this.$router.push({name: 'atestados', params: {id_policia: this.datos}});
      }
    },
    created() {
      this.slug = this.$route.params.slug;
      this.datos = this.$route.params.id_policia;
      let ref = db.collection('atestado').where('slug', '==', this.slug);
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.atestado = doc.data();
          this.atestado.id = doc.id;
          console.log(this.atestado);
        })
      })
    }
  }
</script>

<style scoped>
  .volver {
    position: absolute;
    bottom: 3rem;
    left: 3rem;
    cursor: pointer;
  }
</style>
