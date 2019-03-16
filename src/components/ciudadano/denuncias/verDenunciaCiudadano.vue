<template>
    <div class="verDenunciaCiudadano" v-if="cargado">
      <div class="container">
        <hr>
        <i class="fas fa-file-alt" style="font-size: 7rem; color: #007bff;"></i>
        <hr>
        <h3 class="text-danger" v-if="!denuncia.aceptada">Esta denuncia se encuentra en estado de revisión.</h3>
        <h3>{{ denuncia.titulo }}</h3>
        <h5>{{ denuncia.fecha }}</h5>
        <hr>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <div class="card" style="width: 100%;">
              <img v-bind:src="denuncia.imagenUrl" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ denuncia.tipo }} - {{ denuncia.importancia }}</h5>
                <p class="card-text">{{ denuncia.contenido }}</p>
                <h5 class="card-title">Denunciante: {{ denuncia.usuarioDenunciante }}</h5>
                <h5 class="card-title">Denunciado/a: {{ denuncia.denunciado }}</h5>
                <a class="btn btn-primary pointer" v-on:click="editar">Editar <i class="fas fa-edit"></i></a>
                </div>
            </div>
            <br>
            <br>
            <h3>Aportaciones al caso:</h3>
            <hr>
            <ul>
              <li v-for="(aportacion, idx) in denuncia.aportaciones" :key="idx">{{idx}}. {{ aportacion }}</li>
            </ul>
            </div>
          <div class="col-3"></div>
        </div>

      </div>
      <div class="volver">
        <i class="fas fa-arrow-circle-left" style="color: #007bff; font-size: 4rem;" v-on:click.prevent="volverAtras"></i>
      </div>
      <div class="editar">
        <i class="fas fa-edit" style="color: #007bff; font-size: 4rem;" v-on:click.prevent="editar"></i>
      </div>
    </div>
</template>

<script>
  import db from '../../../firebase/init';
    export default {
        name: "verDenunciaCiudadano",
      data() {
        return {
          datos: null,
          datosId: null,
          denuncia: null,
          cargado: false

        }
      },
      methods: {
        volverAtras() {
          this.$router.push({name: 'vDenunciasC', params: {id_ciudadano: this.datos}});
        },
        editar() {
          this.$router.push({name: 'eDenunciaC', params: {id_ciudadano: this.datos, denunciaId: this.datosId}});
        },
      },
      created() {
        this.datos = this.$route.params.id_ciudadano;
        this.datosId = this.$route.params.denunciaId;
        db.collection('denuncia').doc(this.$route.params.denunciaId).get().then(d => {
          this.denuncia = d.data();
        });
        this.cargado = true;
      }
    }
</script>

<style scoped>
  .volver {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    cursor: pointer;
  }
  .editar {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
  }
  .verDenunciaCiudadano {
    margin-bottom: 3rem;
  }
</style>
