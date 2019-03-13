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
            <input type="text" name="nombre" required v-model="policia.nombre">
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos: </label>
            <input type="text" name="apellidos" required v-model="policia.apellidos">
          </div>
          <div class="form-group">
            <label for="placa">Numero de placa: </label>
            <input type="text" name="placa" required v-model="policia.numeroPlaca">
          </div>
          <div class="form-group">
            <label for="pass">Contraseña: </label>
            <input type="password" name="pass" required v-model="policia.pass">
          </div>
          <button type="submit" class="btn btn-primary" v-on:click.prevent="regPolicia">Registrar policia</button>
          <br>
          <h3 class="text-danger" v-if="feedback">{{ feedback }}</h3>
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
  import db from '../../firebase/init';
    export default {
        name: "registrarPolicia",
      data() {
        return {
          added: false,
          feedback: null,
          policia: {
            nombre: null,
            apellidos: null,
            numeroPlaca: null,
            pass: null
          }
        }
      },
      methods: {
          regPolicia: function(){
            /*this.$http.post('https://policia-ciudadano.firebaseio.com/policias.json', this.policia).then(function(data){
              console.log(data);
              this.added = true;
            });*/
            if (this.policia.nombre){
              if (this.policia.apellidos){
                if (this.policia.numeroPlaca){
                  if (this.policia.pass){
                    db.collection('policia').add(this.policia).then(() => {
                      this.added = true;
                      this.feedback = null;
                      setTimeout(() => this.$router.push({ name: 'lPolicia' }) , 1500);
                    }).catch(err => {
                      console.log(err);
                    });
                  } else {
                    this.feedback = 'Introduce contraseña'
                  }
                } else {
                  this.feedback = 'Introduce numero de placa'
                }
              } else {
                this.feedback = 'Introduce apellidos'
              }
            }  else {
              this.feedback = 'Introduce nombre'
            }
          }
      }
    }

</script>

<style scoped>

</style>
