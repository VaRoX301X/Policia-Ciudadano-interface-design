<template>
  <div id="policia" v-if="policia">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Bienvenido/a {{ policia.nombre }} {{ policia.apellidos }}</h1>
        <p class="lead">Debajo podrás encontrar las diferentes opciones relacionadas con tu cuenta.</p>
        <hr class="my-4">
        <div class="row">
          <div class="col-2 aligner">
            <div>
              <i class="fas fa-user-shield" style="font-size: 8rem; color: #000;"></i>
            </div>
          </div>
          <div class="col-3 align-left aligner">
            <div>
              <p><b>Nombre:</b> {{ policia.apellidos }}, {{ policia.nombre }}</p>
              <p><b>Nº de placa:</b> {{ policia.numeroPlaca }}</p>
            </div>
          </div>
          <div class="col-7 align-left">
            <button type="button" class="btn btn-secondary btn-block btn-lg" v-on:click.prevent="editarPerfil">Editar perfil <i
              class="fas fa-user-cog"></i></button>
            <button type="button" class="btn btn-primary btn-block btn-lg" v-on:click.prevent="verDenuncias">Ver denuncias  <i class="far fa-file-excel"></i></button>
            <button type="button" class="btn btn-danger btn-block btn-lg" v-on:click.prevent="generarDenuncia">Generar denuncia  <i class="far fa-newspaper"></i></button>
            <button type="button" class="btn btn-info btn-block btn-lg" v-on:click.prevent="verAtestados">Ver atestados  <i class="fas fa-file-alt"></i></button>
          </div>
        </div>
      </div>
    </div>
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
    methods:{
      generarDenuncia() {
        this.$router.push({name:'gDenunciaP', params: {id_policia: this.datos}});
      },
      verAtestados() {
        this.$router.push({name:'atestados', params: {id_policia: this.datos}});
      },
      verDenuncias() {
        this.$router.push({name:'vDenunciasP', params: {id_policia: this.datos}});
      },
      editarPerfil(){
        this.$router.push({ name: 'ePolicia', params: { id_policia: this.datos }});
      }

    },
    created() {
      this.datos = this.$route.params.id_policia;
      let ref = db.collection('policia').where('numeroPlaca', '==', this.datos);
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
