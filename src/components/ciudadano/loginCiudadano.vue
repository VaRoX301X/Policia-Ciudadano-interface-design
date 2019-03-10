<template>
  <div id="loginCiudadano">
    <div class="container">
      <div class="row">
        <div class="col-sm izq">
          <h4>¿Ya eres usuario/a?</h4>
          <h5>¡Rellena los siguientes campos de login y entra ya!</h5>
          <br>
          <font-awesome-icon icon="user" style="font-size: 5rem;"></font-awesome-icon>
          <hr>
          <form>
            <div class="form-group">
              <label for="userlogin">User</label><br>
              <input type="text" class="form-control" id="userlogin" placeholder="Escribe Usuario"
                     v-model.lazy="logged.usuario">
              <small id="loginHelp" class="form-text text-muted">Usuario: {{ logged.usuario }}</small>
            </div>
            <div class="form-group">
              <label for="pass">Contraseña</label><br>
              <input type="password" class="form-control" id="pass" placeholder="Password"
                     v-model.lazy="logged.password">
              <small id="passHelp" class="form-text text-muted">Nunca compartas tu contraseña con nadie.</small>
            </div>
            <button type="submit" class="btn btn-success">Entrar</button>
          </form>
        </div>
        <div class="col-sm dch">
          <h4>¿Aun no estás registrado/a?</h4>
          <h5>¡Rellena estos campos en 2 minutos y registrate ya!</h5>
          <br>
          <font-awesome-icon icon="user-plus" style="font-size: 5rem;"></font-awesome-icon>
          <hr>
          <div v-if="registroExito">
            <b-alert variant="success" show>Añadido Correctamente</b-alert>
          </div>
          <form v-if="!registroExito">
            <div class="form-group">
              <label for="nombre">Nombre: </label><br>
              <input type="text" name="nombre" required v-model="registerCiudadano.nombre">
            </div>
            <div class="form-group">
              <label for="apellidos">Apellidos: </label><br>
              <input type="text" name="apellidos" required v-model="registerCiudadano.apellidos">
            </div>
            <div class="form-group">
              <label for="edad">Edad: </label><br>
              <input type="number" name="edad" required v-model="registerCiudadano.edad">
            </div>
            <div class="form-group">
              <label for="genero">Genero: </label><br>
              <select name="genero" v-model="registerCiudadano.genero">
                <option v-for="genero in generos">{{ genero }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="usuario">Usuario: </label><br>
              <input type="text" name="usuario" required v-model="registerCiudadano.usuario">
            </div>
            <div class="form-group">
              <label for="pass">Contraseña: </label><br>
              <input type="password" name="pass" required v-model="registerCiudadano.pass">
              <small id="passHelp2" class="form-text text-muted">Asegurate de poner la contraseña correcta.</small>
            </div>

          </form>

          <h6>Preview del registro:</h6>
          <p><b>Nombre:</b> {{ registerCiudadano.nombre }}</p>
          <p><b>Apellidos:</b> {{ registerCiudadano.apellidos }}</p>
          <p><b>Edad:</b> {{ registerCiudadano.edad }}</p>
          <p><b>Género:</b> {{ registerCiudadano.genero }}</p>
          <p><b>Usuario:</b> {{ registerCiudadano.usuario }}</p>
          <button type="submit" class="btn btn-success" v-on:click.prevent="registrarCiudadano" v-if="!registroExito">Correcto, Registrar
          </button>
          <br><br>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginCiudadano",
    data() {
      return {
        logged: {
          usuario: '',
          pass: ''
        },
        registerCiudadano: {
          nombre: '',
          apellidos: '',
          edad: '',
          genero: '',
          usuario: '',
          pass: '',
          denuncias: []
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
      }
    }
  }
</script>

<style scoped>
  .izq {
    border-right: 1px solid black;
  }

  .dch {
    border-left: 1px solid black;
  }
  h6 {
    text-decoration: underline;
  }
</style>
