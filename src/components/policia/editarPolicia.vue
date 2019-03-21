<template>
  <div id="editar-policia" v-if="policia">
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
        <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="editarPolicia">Editar perfil</button>
        <br>
        <h3 class="text-danger" v-if="feedback">{{ feedback }}</h3>
      </form>
      <div id="preview">
        <h3>Vista previa policia</h3>
        <p>Nombre: {{policia.nombre}}</p>
        <p>Apellidos: {{policia.apellidos}}</p>
        <p>Numero de placa: {{policia.numeroPlaca}}</p>
        <p>Contraseña: {{ policia.pass }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
  import db from '../../firebase/init'

  export default {
    name: "editarPolicia",
    data() {
      return {
        datos: null,
        policia: null,
        feedback: null
      }
    },
    methods: {
      editarPolicia() {
        if (this.policia.nombre) {
          if (this.policia.apellidos) {
            if (this.policia.numeroPlaca) {
              if (this.policia.pass) {
                db.collection('policia').doc(this.policia.id).update(this.policia).then(() => {
                  this.feedback = null;
                  this.$router.push({name: 'policia', params: {id_policia: this.policia.numeroPlaca}});
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
        } else {
          this.feedback = 'Introduce nombre'
        }
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

</style>
