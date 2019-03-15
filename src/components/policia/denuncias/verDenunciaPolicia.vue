<template>
  <div class="ver-denuncia" v-if="denuncia">
    <div class="container">
      <hr>
      <i class="fas fa-file-alt" style="font-size: 7rem; color: #007bff;"></i>
      <hr>
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
              <a class="btn btn-success pointer btn-block" v-on:click.prevent="aprobar" v-if="!denuncia.aceptada">Aceptar denuncia</a>
            </div>
          </div>
          <br>
          <br>
          <h3>Aportaciones al caso:</h3>
          <hr>
          <ul>
            <li v-for="(aportacion, idx) in denuncia.aportaciones" :key="idx">{{idx}}. {{ aportacion }}</li>
            <br>
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
    name: "verDenunciaPolicia",
    data() {
      return {
        datos: null,
        datosId: null,
        denuncia: null

      }
    },
    methods: {
      volverAtras() {
        this.$router.push({name: 'vDenunciasP', params: {id_policia: this.datos}});
      },
      editar() {
        this.$router.push({name: 'eDenunciaP', params: {id_policia: this.datos, denunciaId: this.datosId}});
      },
      aprobar(){
        db.collection('denuncia').doc(this.datosId).update({
          aceptada: true,
        }).then(() => {
          this.$router.push({name: 'vDenunciasP', params: {id_ciudadano: this.datos}});
        }).catch(err => {
          console.log(err);
        });
      }

    },
    created() {
      this.datos = this.$route.params.id_policia;
      this.datosId = this.$route.params.denunciaId;
      db.collection('denuncia').doc(this.$route.params.denunciaId).get().then(d => {
        this.denuncia = d.data();
      });
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
  .ver-denuncia {
    margin-bottom: 3rem;
  }
  .pointer {
    cursor: pointer;
  }
</style>
