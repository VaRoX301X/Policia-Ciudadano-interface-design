<template>
  <div id="loginCiudadano" v-if="cargado">
    <div class="container">
      <h4>¿Ya eres usuario/a?</h4>
      <h5>¡Rellena los siguientes campos de login y entra ya!</h5>
      <br>
      <font-awesome-icon icon="user" style="font-size: 6rem; color: #000;"></font-awesome-icon>
      <hr>
      <div v-if="loginFallido">
        <b-alert variant="danger" show>Login Fallido</b-alert>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="userlogin">Usuario</label><br>
              <input type="text" class="form-control" id="userlogin" placeholder="Escribe Usuario"
                     v-model.lazy="usuario">
              <small id="loginHelp" class="form-text text-muted">Usuario: {{ usuario }}</small>
            </div>
            <div class="form-group">
              <label for="pass">Contraseña</label><br>
              <input type="password" class="form-control" id="pass" placeholder="Escribe contraseña"
                     v-model.lazy="pass">
              <small id="passHelp" class="form-text text-muted">Nunca compartas tu contraseña con nadie.</small>
            </div>
            <button class="btn btn-success" v-on:click.prevent="loginCiudadano">Entrar</button>
            <br>
            <h5 class="text-danger" v-if="feedback">{{ feedback }}</h5>
          </form>
        </div>
        <div class="col"></div>
      </div>
      <hr>
      <div class="row">
        <div class="col"></div>
        <div class="col left">
          <br>
          <font-awesome-icon icon="user-plus" style="font-size: 7rem; color: #000;"></font-awesome-icon>
          <font-awesome-icon icon="arrow-right" style="font-size: 7rem; color: #000;"></font-awesome-icon>
        </div>
        <div class="col right">
          <br>
          <br>
          <h5>¿Aun no estás registrado/a?</h5>
          <button v-on:click="goRegistro" class="btn btn-info">Registrate ya</button>
        </div>
        <div class="col"></div>
      </div>

      <br>

    </div>
  </div>
</template>

<script>
  import db from '../../firebase/init';

  export default {
    name: "loginCiudadano",
    data() {
      return {
        usuario: null,
        pass: null,
        ciudadanos: [],
        loginFallido: false,
        feedback: null,
        cargado: false
      }
    },
    methods: {
      goRegistro: function () {
        this.$router.push({name: 'rCiudadano'})
      },
      loginCiudadano: function () {
        if (this.usuario) {
          if (this.pass) {
            for (let c = 0; c < this.ciudadanos.length; c++) {
              console.log(this.ciudadanos[c].usuario, this.ciudadanos[c].pass);
              if (this.usuario === this.ciudadanos[c].usuario) {
                if (this.pass === this.ciudadanos[c].pass) {
                  this.feedback = null;
                  this.loginFallido = false;
                  this.$router.push({ name: 'ciudadano', params: { id_ciudadano: this.usuario } });
                } else {
                  this.loginFallido = true;
                }
              }
            }
            this.loginFallido = true;
          } else {
            this.feedback = 'Introduce la contraseña';
          }
        } else {
          this.feedback = 'Introduce el usuario';
        }

      }
    },
    created() {
      /*this.$http.get('https://policia-ciudadano.firebaseio.com/ciudadanos.json').then(function (data) {
        console.log(data.json());
        return data.json();
      }).then(function (data) {
        var ciudadanosArray = [];
        for (let c in data) {
          ciudadanosArray.push(data[c]);
        }
        console.log(ciudadanosArray);
        this.usuarios = ciudadanosArray;
      });*/
      db.collection('ciudadano').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data(), doc.id);
            let ciudadano = doc.data();
            ciudadano.id = doc.id;
            this.ciudadanos.push(ciudadano);
          });
          this.cargado = true;
        })
    }
  }
</script>

<style scoped>
  .left {
    border-right: 1px solid lightgray;
  }

  .right {
    border-left: 1px solid lightgray;
  }

  h6 {
    text-decoration: underline;
  }
</style>
