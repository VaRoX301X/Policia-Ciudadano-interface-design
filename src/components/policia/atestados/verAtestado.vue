<template>
  <div id="ver-atestado" v-if="atestado">
    <div class="volver">
      <i class="fas fa-arrow-circle-left" style="color: #17a2b8; font-size: 4rem;"
         v-on:click.prevent="volverAtras"></i>
    </div>
    <div class="container">
      <hr>
      <i class="fas fa-file-alt" style="font-size: 7rem; color: #17a2b8;"></i>
      <hr>
      <h3>{{ atestado.titulo }}</h3>
      <hr>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="card" style="margin-bottom: 1rem">
            <div class="card-body">
              <h5 class="card-title">{{ atestado.lugar }}</h5>
              <p class="card-text">{{ atestado.descripcion }}</p>
              <h5 class="card-title">Personas implicadas</h5>
              <p class="card-text" v-for="dni in atestado.implicados">{{dni}}</p>
              <h5 class="card-title">Vehículos involucrados</h5>
              <p class="card-text" v-for="vehiculo in atestado.vehiculos">{{vehiculo}}</p>
              <button class="btn btn-info btn-block" v-on:click.prevent="cerrarAtestado">Cerrar Atestado  <i class="far fa-times-circle"></i></button>
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
        id_atestado: null,
        atestado: null,
      }
    },
    methods: {
      volverAtras() {
        this.$router.push({name: 'atestados', params: {id_policia: this.datos}});
      },
      cerrarAtestado() {
        db.collection('atestado').doc(this.id_atestado).delete()
          .then(() => {
            this.$router.push({name: 'atestados', params: {id_policia: this.datos}});
          })
      }
    },
    created() {
      this.id_atestado = this.$route.params.id_atestado;
      this.datos = this.$route.params.id_policia;
      this.atestado = db.collection('atestado').doc(this.$route.params.id_atestado).get().then( atestado => {
        this.atestado = atestado.data();
      });
      console.log(this.atestado);
    },

  }
</script>

<style scoped>
  .volver {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    cursor: pointer;
  }
</style>
