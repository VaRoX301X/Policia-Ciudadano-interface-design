<template>
  <div id="loginPolicia" v-if="cargado">
    <div class="container">
      <hr>
      <h2>LOGIN POLICIA</h2>
      <hr>
      <font-awesome-icon icon="landmark" style="font-size: 7rem; color: #000;"></font-awesome-icon>
      <hr>
      <div v-if="loginFallido">
        <b-alert variant="danger" show>Login Fallido</b-alert>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="placaPolicia">Numero de placa:</label><br>
              <input type="text" class="form-control" id="placaPolicia" placeholder="Introduce tu placa de policia."
                     v-model.lazy="numeroPlaca" aria-describedby="placaHelp">
              <small id="placaHelp" class="form-text text-muted">Tu manera de logearte es con tu placa de policia.
              </small>
            </div>
            <div class="form-group">
              <label for="pass">Contraseña:</label><br>
              <input type="password" class="form-control" id="pass" placeholder="Introduce tu contraseña."
                     v-model.lazy="pass">
              <small id="passHelp" class="form-text text-muted">Nunca compartas tu contraseña con nadie.</small>
            </div>
            <button class="btn btn-success" v-on:click.prevent="loginPolicia">Entrar</button>
            <h5 class="text-danger" v-if="feedback">{{ feedback }}</h5>
          </form>
        </div>
        <div class="col"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import db from '../../firebase/init';

  export default {
    name: "loginPolicia",
    data() {
      return {
        numeroPlaca: null,
        pass: null,
        policias: [],
        cargado: false,
        loginFallido: false,
        feedback: null
      }
    },
    methods: {
      loginPolicia() {
        if (this.numeroPlaca) {
          if (this.pass) {
            for (let c = 0; c < this.policias.length; c++) {
              console.log(this.policias[c].numeroPlaca, this.policias[c].pass);
              if (this.numeroPlaca === this.policias[c].numeroPlaca) {
                if (this.pass === this.policias[c].pass) {
                  this.feedback = null;
                  this.loginFallido = false;
                  this.$router.push({ name: 'policia', params: { id_policia: this.numeroPlaca } });
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
          this.feedback = 'Introduce el numero de placa';
        }
      }
    },
    created() {
      db.collection('policia').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data(), doc.id);
            let policia = doc.data();
            policia.id = doc.id;
            this.policias.push(policia);
          });
          this.cargado = true;
        })
    }
  }
</script>

<style scoped>

</style>
