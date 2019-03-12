<template>
  <div id="registrarCiudadano">
    <div class="container">
      <h4>Registro Usuario</h4>
      <br>
      <font-awesome-icon icon="user-plus" style="font-size: 7rem; color: #000;"></font-awesome-icon>
      <hr>
      <div v-if="registroExito">
        <b-alert variant="success" show>Añadido Correctamente</b-alert>
      </div>
      <div class="row">
        <div class="col">
          <form v-if="!registroExito">
            <div class="form-group">
              <label for="nombre">Nombre: </label><br>
              <input id="nombre" type="text" name="nombre" required v-model="registerCiudadano.nombre" placeholder="Introduce nombre">
            </div>
            <div class="form-group">
              <label for="apellidos">Apellidos: </label><br>
              <input id="apellidos" type="text" name="apellidos" required v-model="registerCiudadano.apellidos" placeholder="Introduce apellidos">
            </div>
            <div class="form-group">
              <label for="dni">DNI: </label><br>
              <input id="dni" type="text" name="dni" required v-model="registerCiudadano.dni" placeholder="Introduce DNI">
            </div>
            <div class="form-group">
              <label for="edad">Edad: </label><br>
              <input id="edad" type="number" name="edad" required v-model="registerCiudadano.edad" placeholder="Introduce edad">
            </div>
            <div class="form-group">
              <label for="genero">Genero: </label><br>
              <select id="genero" name="genero" v-model="registerCiudadano.genero" placeholder="Introduce género">
                <option v-for="genero in generos">{{ genero }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="usuario">Usuario: </label><br>
              <input id="usuario" type="text" name="usuario" required v-model="registerCiudadano.usuario" placeholder="Introduce nombre de usuario">
            </div>
            <div class="form-group">
              <label for="pass">Contraseña: </label><br>
              <input id="pass" type="password" name="pass" required v-model="registerCiudadano.pass" placeholder="Introduce contraseña">
              <small id="passHelp2" class="form-text text-muted">Asegurate de poner la contraseña correcta.</small>
            </div>
          </form>
        </div>
        <div class="col">
          <h6>Preview del registro:</h6>
          <p><b>Nombre:</b> {{ registerCiudadano.nombre }}</p>
          <p><b>Apellidos:</b> {{ registerCiudadano.apellidos }}</p>
          <p><b>DNI:</b> {{ registerCiudadano.dni }}</p>
          <p><b>Edad:</b> {{ registerCiudadano.edad }}</p>
          <p><b>Género:</b> {{ registerCiudadano.genero }}</p>
          <p><b>Usuario:</b> {{ registerCiudadano.usuario }}</p>
          <button type="submit" class="btn btn-success" v-on:click.prevent="registrarCiudadano" v-if="!registroExito">
            Correcto, Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "registrarCiudadano",
    data() {
      return {
        registerCiudadano: {
          nombre: '',
          apellidos: '',
          edad: '',
          genero: '',
          usuario: '',
          pass: '',
          dni: '',
          propiedades: {
            vehiculos: [],
            establecimientos: []
          }
        },
        registroExito: false,
        generos: ['Hombre', 'Mujer', 'Prefiero no decirlo']
      }
    },
    methods: {
      registrarCiudadano: function () {
        this.$http.post('https://policia-ciudadano.firebaseio.com/ciudadanos.json', this.registerCiudadano).then(function (data) {
          console.log(data);
          this.registroExito = true;
        })
      },
    }
  }
</script>

<style scoped>

</style>
