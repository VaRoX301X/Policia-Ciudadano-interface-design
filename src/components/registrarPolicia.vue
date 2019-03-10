<template>
    <div id="registrarPolicia">
      <b-container>
        <h2>Añadir nuevo policia</h2>
        <div v-if="added">
          <b-alert variant="success" show>Añadido Correctamente</b-alert>
        </div>
        <form v-if="!added">
          <div class="form-group">
            <label for="nombre">Nombre: </label>
            <input type="text" name="nombre" required v-model="policia.nombre" pattern="[A-Za-z]+">
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos: </label>
            <input type="text" name="apellidos" required v-model="policia.apellidos" pattern="[A-Za-z]+">
          </div>
          <div class="form-group">
            <label for="placa">Numero de placa: </label>
            <input type="text" name="placa" required v-model="policia.numeroPlaca" pattern="[A-Z]{1}+\-[0-9]{4}">
          </div>
          <div class="form-group">
            <label for="pass">Contraseña: </label>
            <input type="password" name="pass" required v-model="policia.pass">
          </div>
          <button type="submit" class="btn btn-primary" v-on:click.prevent="post">Submit</button>
        </form>
        <div id="preview">
          <h3>Preview policia</h3>
          <p>Nombre: {{policia.nombre}}</p>
          <p>Apellidos: {{policia.apellidos}}</p>
          <p>Numero de placa: {{policia.numeroPlaca}}</p>
          <p>Contraseña: {{ policia.pass }}</p>
        </div>
      </b-container>

    </div>
</template>

<script>
    export default {
        name: "registrarPolicia",
      data() {
        return {
          added: false,
          policia: {
            nombre: '',
            apellidos: '',
            numeroPlaca: '',
            pass: ''
          }
        }
      },
      methods: {
          post: function(){
            this.$http.post('https://policia-ciudadano.firebaseio.com/policias.json', this.policia).then(function(data){
              console.log(data);
              this.added = true;
            });
          }
      }
    }

</script>

<style scoped>

</style>
