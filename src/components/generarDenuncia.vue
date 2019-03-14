<template>
    <div id="generarDenuncia">
      <b-container>
        <h2>Generar denuncia</h2>
        <div v-if="generada">
          <b-alert variant="success" show>Denuncia Generada Correctamente</b-alert>
        </div>
        <form v-if="!generada">
          <div class="form-group">
            <label for="titulo">Titulo: </label>
            <input type="text" id="titulo" name="titulo" required v-model="denuncia.titulo" placeholder="Introduce el titulo">
          </div>
          <div class="form-group">
            <label for="contenido">Contenido</label>
            <textarea class="form-control rounded-0" id="contenido" rows="3" v-model="denuncia.contenido" placeholder="Introduce el contenido/descripción"></textarea>
          </div>
          <div class="form-group">
            <label for="importancia">Importancia: </label>
            <select id="importancia" name="importancia" v-model="denuncia.importancia">
              <option v-for="importancia in importancias">{{ importancia }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="usuario">Usuario denunciante: </label>
            <select id="usuario" name="usuario" v-model="denuncia.usuarioDenunciante">
              <option v-for="user in usuarios">{{ user }}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-danger" v-on:click.prevent="generarDenuncia">Generar Denuncia</button>
        </form>
        <hr>
        <div id="preview">
          <h6>Preview de la denuncia:</h6>
          <p><b>Titulo:</b> {{ denuncia.titulo }}</p>
          <p><b>Contenido:</b> </p>
          <p>{{ denuncia.contenido }}</p>
          <p><b>Importancia:</b> {{ denuncia.importancia }}</p>
          <p><b>Usuario denunciante:</b> {{ denuncia.usuarioDenunciante }}</p>
        </div>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "generarDenuncia",
      data(){
          return {
            usuarios: [],
            denuncia: {
              usuarioDenunciante: '',
              titulo: '',
              contenido: '',
              importancia: '',
              fecha: ''
            },
            importancias: [
              'Leve',
              'Media',
              'Grave'
            ],
            generada: false
          }
      },
      created() {

        /*this.$http.get('https://policia-ciudadano.firebaseio.com/ciudadanos.json').then(function (data) {
          console.log(data.json());
          return data.json();
        }).then(function (data) {
          for (let c in data) {
            this.usuarios.push(data[c].usuario);
          }
          console.log(this.usuarios);
        });*/
      },
      methods: {
        generarDenuncia: function() {
          this.denuncia.fecha = new Date().toJSON().slice(0,10).replace(/-/g,'/');
          /*this.$http.post('https://policia-ciudadano.firebaseio.com/denuncias.json', this.denuncia).then(function (data) {
            console.log(data);
            this.generada = true;
          })*/
        }
      }
    }
</script>

<style scoped>

</style>
