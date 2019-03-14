<template>
  <div id="registrarCiudadano" v-if="cargado">
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
              <input id="nombre" type="text" name="nombre" required v-model="rCiudadano.nombre" placeholder="Introduce nombre">
            </div>
            <div class="form-group">
              <label for="apellidos">Apellidos: </label><br>
              <input id="apellidos" type="text" name="apellidos" required v-model="rCiudadano.apellidos" placeholder="Introduce apellidos">
            </div>
            <div class="form-group">
              <label for="dni">DNI: </label><br>
              <input id="dni" type="text" name="dni" required v-model="rCiudadano.dni" placeholder="Introduce DNI">
            </div>
            <div class="form-group">
              <label for="edad">Edad: </label><br>
              <input id="edad" type="number" name="edad" required v-model="rCiudadano.edad" placeholder="Introduce edad">
            </div>
            <div class="form-group">
              <label for="genero">Genero: </label><br>
              <select id="genero" name="genero" v-model="rCiudadano.genero" placeholder="Introduce género">
                <option v-for="genero in generos">{{ genero }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="usuario">Usuario: </label><br>
              <input id="usuario" type="text" name="usuario" required v-model="rCiudadano.usuario" placeholder="Introduce nombre de usuario">
            </div>
            <div class="form-group">
              <label for="pass">Contraseña: </label><br>
              <input id="pass" type="password" name="pass" required v-model="rCiudadano.pass" placeholder="Introduce contraseña">
              <small id="passHelp2" class="form-text text-muted">Asegurate de poner la contraseña correcta.</small>
            </div>
          </form>
        </div>
        <div class="col">
          <h6>Preview del registro:</h6>
          <p><b>Nombre:</b> {{ rCiudadano.nombre }}</p>
          <p><b>Apellidos:</b> {{ rCiudadano.apellidos }}</p>
          <p><b>DNI:</b> {{ rCiudadano.dni }}</p>
          <p><b>Edad:</b> {{ rCiudadano.edad }}</p>
          <p><b>Género:</b> {{ rCiudadano.genero }}</p>
          <p><b>Usuario:</b> {{ rCiudadano.usuario }}</p>
          <button type="submit" class="btn btn-success" v-on:click.prevent="registrarCiudadano" v-if="!registroExito">
            Correcto, Registrar
          </button>
          <br>
          <h3 class="text-danger" v-if="feedback">{{ feedback }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../../firebase/init';
  export default {
    name: "registrarCiudadano",
    data() {
      return {
        rCiudadano: {
          nombre: null,
          apellidos: null,
          edad: null,
          genero: null,
          usuario: null,
          pass: null,
          dni: null,
          propiedades: []
        },
        registroExito: false,
        generos: ['Hombre', 'Mujer', 'Prefiero no decirlo'],
        feedback: null,
        nombresUsuario: [],
        cargado: false
      }
    },
    methods: {
      registrarCiudadano: function () {
        if (this.rCiudadano.nombre){
          if (this.rCiudadano.apellidos){
            if (this.rCiudadano.edad){
              if (this.rCiudadano.genero){
                if (this.rCiudadano.dni){
                  if (this.rCiudadano.usuario){
                    if (this.rCiudadano.pass){
                      if(this.nombresUsuario.indexOf(this.rCiudadano.usuario) == -1){
                        db.collection('ciudadano').add(this.rCiudadano).then(() => {
                          this.registroExito = true;
                          this.feedback = null;
                          setTimeout(() => this.$router.push({ name: 'lCiudadano' }) , 1500);
                        }).catch(err => {
                          console.log(err);
                        });
                      } else {
                        this.feedback = 'El nombre de usuario [' + this.rCiudadano.usuario + '] ya existe';
                      }

                    } else {
                      this.feedback = 'Rellena el campo contraseña';
                    }
                  } else {
                    this.feedback = 'Rellena el campo usuario';
                  }
                } else {
                  this.feedback = 'Rellena el campo dni';
                }
              } else {
                this.feedback = 'Selecciona el campo genero';
              }
            } else {
              this.feedback = 'Rellena el campo edad';
            }
          } else {
            this.feedback = 'Rellena el campo apellidos';
          }
        } else {
          this.feedback = 'Rellena el campo nombre';
        }
      },
    },
    created() {
      db.collection('ciudadano').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data(), doc.id);
            let userName = doc.data().usuario;
            this.nombresUsuario.push(userName);
          });
          this.cargado = true;
        })
    }
  }
</script>

<style scoped>

</style>
