<template>
  <div id="ciudadano" v-if="ciudadano">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Bienvenido/a {{ ciudadano.nombre }} {{ ciudadano.apellidos }}</h1>
        <p class="lead">Debajo podrás encontrar las diferentes opciones relacionadas con tu cuenta.</p>
        <hr class="my-4">
        <div class="row">
          <div class="col-2 aligner">
            <div>
            <font-awesome-icon icon="user-circle" style="font-size: 8rem; color: #000;"></font-awesome-icon>
            </div>
          </div>
          <div class="col-3 align-left aligner">
            <div>
              <p><b>Nombre:</b> {{ ciudadano.apellidos }}, {{ ciudadano.nombre }}</p>
              <p><b>DNI:</b> {{ ciudadano.dni }}</p>
              <p><b>Genero:</b> {{ ciudadano.genero }}</p>
              <p><b>Edad:</b> {{ ciudadano.edad }}</p>
            </div>
          </div>
          <div class="col-7 align-left">
            <button type="button" class="btn btn-secondary btn-block btn-lg" v-on:click.prevent="editarPerfil">Editar perfil  <i class="fas fa-user-cog"></i></button>
            <button type="button" class="btn btn-primary btn-block btn-lg" v-on:click.prevent="verDenuncias">Ver denuncias  <i class="far fa-file-excel"></i></i></button>
            <button type="button" class="btn btn-danger btn-block btn-lg" v-on:click.prevent="generarDenuncia">Generar pre-denuncia  <i class="far fa-newspaper"></i></button>
            <button type="button" class="btn btn-warning btn-block btn-lg" v-on:click.prevent="enviarAlerta">Enviar alerta  <i class="fas fa-exclamation-triangle"></i></button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import db from '../../firebase/init';

  export default {
    name: "ciudadano",
    data() {
      return {
        datos: null,
        ciudadano: null
      }
    },
    methods: {
      editarPerfil() {
        this.$router.push({ name: 'eCiudadano', params: {id_ciudadano: this.datos}});
      },
      enviarAlerta() {
        this.$router.push({ name: 'alerta' });
      },
      generarDenuncia() {
        this.$router.push({ name: 'gDenunciaC', params: {id_ciudadano: this.datos}});
      },
      verDenuncias() {
        this.$router.push({ name: 'vDenunciasC', params: {id_ciudadano: this.datos}});
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
  .align-left {
    text-align: left;
  }

  .jumbotron {
    margin-top: 10%;
  }

  .aligner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right-align {
    text-align: right;
  }
</style>
