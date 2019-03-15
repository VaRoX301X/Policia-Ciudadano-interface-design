<template>
  <div id="generarDenunciaPolicia" v-if="usuarios">
    <div class="container">
      <br>
      <h2>Generar denuncia: {{ datos }}</h2>
      <i class="fas fa-file-alt" style="color: #dc3545; font-size: 7rem;"></i>
      <hr>
      <form>
        <div class="form-group">
          <label for="titulo">Titulo: </label>
          <input type="text" id="titulo" name="titulo" v-model="denuncia.titulo"
                 placeholder="Introduce el titulo">
        </div>
        <div class="form-group">
          <label for="contenido">Contenido</label>
          <textarea class="form-control rounded-0" id="contenido" rows="3" v-model="denuncia.contenido"
                    placeholder="Introduce el contenido/descripción"></textarea>
        </div>
        <div class="form-group">
          <label for="importancia">Importancia: </label>
          <select id="importancia" name="importancia" v-model="denuncia.importancia">
            <option v-for="importancia in importancias">{{ importancia }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="tipoDenuncia">Tipo de denuncia: </label>
          <select id="tipoDenuncia" v-model="denuncia.tipo">
            <option v-for="tipo in tipos">{{ tipo }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="denunciado">Persona denunciada: </label>
          <input type="text" id="denunciado" v-model="denuncia.denunciado"
                 placeholder="DNI del denunciado">
        </div>
        <button type="submit" class="btn btn-danger" v-on:click.prevent="generarDenuncia">Generar Denuncia</button>
        <br>
        <p v-if="feedback">{{ feedback }}</p>
      </form>
    </div>
  </div>
</template>

<script>
  import db from '../../../firebase/init';

  export default {
    name: "generarDenunciaPolicia",
    data() {
      return {
        usuarios: [],
        denuncia: {
          usuarioDenunciante: 'Policia',
          denunciado: null,
          titulo: null,
          contenido: null,
          importancia: null,
          fecha: null,
          imagenUrl: 'https://unsplash.com/a/img/empty-states/photos.png',
          tipo: null,
          aceptada: true
        },
        importancias: [
          'Leve',
          'Media',
          'Grave'
        ],
        tipos: [
          'Robo',
          'Hurto',
          'Apropiación indebida',
          'Estafa',
          'Violación',
          'Abuso',
          'Homicidio',
          'Allanamiento',
          'Secuestro'
        ],
        datos: null,
        feedback: null
      }
    },
    created() {
      this.datos = this.$route.params.id_policia;
    },
    methods: {
      generarDenuncia: function () {
        this.denuncia.fecha = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

        db.collection('denuncia').add(this.denuncia).then(() => {
          this.feedback = null;
          this.$router.push({name: 'policia', params: {id_policia: this.datos}});
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped>

</style>
