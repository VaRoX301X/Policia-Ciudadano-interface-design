<template>
    <div v-if="cargado">
      <hr>
      <h1>Denuncias</h1>
      <hr>
      <div class="verDenunciasCiudadano">
        <div class="card" style="width: 18rem;" v-for="(denuncia, index) in denuncias" :key="index">
          <img v-bind:src="denuncia.imagenUrl" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ denuncia.titulo }}</h5>
            <p class="card-text">{{denuncia.contenido | shortener }}</p>
            <small>{{ denuncia.usuarioDenunciante }}</small>
            <br>
            <button type="button" class="btn btn-primary" v-on:click.prevent="verDenuncia(denuncia.id)">Ver denuncia</button>
          </div>
        </div>
      </div>

      <div class="volver">
        <i class="fas fa-arrow-circle-left" style="color: #007bff; font-size: 4rem;" v-on:click.prevent="volverAtras"></i>
      </div>
    </div>
</template>

<script>
  import db from '../../../firebase/init';
    export default {
        name: "verDenunciasCiudadano",
      data() {
        return {
          denuncias: [],
          cargado: false,
          datos: null,
        }
      },
      methods: {
        volverAtras() {
          this.$router.push({name: 'ciudadano', params: {id_ciudadano: this.datos}})
        },
        verDenuncia(id) {
          console.log(id);
          this.$router.push({name: 'vDenunciaC', params: {id_ciudadano: this.datos, denunciaId: id}});
        }
      },
      created() {
        this.datos = this.$route.params.id_ciudadano;
        let ref =db.collection('denuncia').where('usuarioDenunciante', '==', this.datos);
          ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.data(), doc.id);
              let denuncia = doc.data();
              denuncia.id = doc.id;
              this.denuncias.push(denuncia);
            });
            this.cargado = true;
          })
      }
    }
</script>

<style scoped>
  .verDenunciasCiudadano {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin: 4rem 2rem 6rem 2rem;
    text-align: center;
  }

  .volver {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    cursor: pointer;
  }
</style>
