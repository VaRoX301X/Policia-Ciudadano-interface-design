<template>
  <div id="editar-ciudadano" v-if="ciudadano">
    <div class="container">
      <h2>Actualizar ciudadano con usuario: {{ data }}</h2>
      <i class="fas fa-user-cog" style="font-size: 7rem"></i>
      <hr>
      <form>
        <div class="row">
          <div class="col">

            <div class="form-group">
              <label for="nombre">Nombre: </label><br>
              <input id="nombre" type="text" name="nombre" required v-model="ciudadano.nombre"
                     placeholder="Introduce nombre">
            </div>
            <div class="form-group">
              <label for="apellidos">Apellidos: </label><br>
              <input id="apellidos" type="text" name="apellidos" required v-model="ciudadano.apellidos"
                     placeholder="Introduce apellidos">
            </div>
            <div class="form-group">
              <label for="dni">DNI: </label><br>
              <input id="dni" type="text" name="dni" required v-model="ciudadano.dni" placeholder="Introduce DNI">
            </div>
            <div class="form-group">
              <label for="edad">Edad: </label><br>
              <input id="edad" type="number" name="edad" required v-model="ciudadano.edad" placeholder="Introduce edad">
            </div>
            <div class="form-group">
              <label for="genero">Genero: </label><br>
              <select id="genero" name="genero" v-model="ciudadano.genero" placeholder="Introduce género">
                <option v-for="genero in generos">{{ genero }}</option>
              </select>
            </div>


          </div>
          <div class="col">
            <div class="form-group">
              <label for="usuario">Usuario: </label><br>
              <input id="usuario" type="text" name="usuario" required v-model="ciudadano.usuario"
                     placeholder="Introduce nombre de usuario">
            </div>
            <div class="form-group">
              <label for="pass">Contraseña: </label><br>
              <input id="pass" type="password" name="pass" required v-model="ciudadano.pass"
                     placeholder="Introduce contraseña">
              <small id="passHelp2" class="form-text text-muted">Asegurate de poner la contraseña correcta.</small>
            </div>
          </div>
          <div class="col">
            <p>Propiedades:</p>
            <div v-for="(prop, index) in ciudadano.propiedades" :key="index" class="relativo">
              <label for="propiedad">Propiedad:</label>
              <input type="text" name="propiedad" v-model="ciudadano.propiedades[index]">
              <i class="fas fa-trash-alt delete" @click="borrarPropiedad(prop)"></i>
            </div>
            <div class="">
              <label for="addPropiedad">Añadir propiedad:</label>
              <input type="text" name="addPropiedad" v-on:keydown.enter.prevent="addPropiedad" v-model="otra">
            </div>



          </div>
        </div>
        <button type="submit" class="btn btn-success btn-block" v-on:click.prevent="editarCiudadano">
          Actualizar Ciudadano
        </button>
        <hr>
        <h4 v-if="feedback" class="text-danger">{{ feedback }}</h4>
      </form>
      <small>POR FAVOR, A LA HORA DE AÑADIR PROPIEDADES DEFINE QUE TIPO ES ANTES (ej: 'Vehiculo: 2354 AAA' o 'Establecimiento: C/x, 2').</small>
      <br>
      <small>Para añadir una propiedad es tan facil como escribir la propiedad y pulsar la tecla 'enter'.</small>
    </div>
  </div>
</template>

<script>
  import db from '../../firebase/init';

  export default {
    name: "editarCiudadano",
    data() {
      return {
        data: null,
        ciudadano: null,
        feedback: null,
        generos: ['Hombre', 'Mujer', 'Prefiero no decirlo'],
        otra: null
      }
    },
    methods: {
      editarCiudadano() {
        if (this.ciudadano.nombre) {
          if (this.ciudadano.apellidos) {
            if (this.ciudadano.edad) {
              if (this.ciudadano.genero) {
                if (this.ciudadano.dni) {
                  if (this.ciudadano.usuario) {
                    if (this.ciudadano.pass) {
                      db.collection('ciudadano').doc(this.ciudadano.id).update(this.ciudadano).then(() => {
                        this.feedback = null;
                        this.$router.push({name: 'ciudadano', params: {id_ciudadano: this.ciudadano.usuario}});
                      }).catch(err => {
                        console.log(err);
                      });
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
      addPropiedad() {
        if (this.otra) {
          this.ciudadano.propiedades.push(this.otra);
          console.log(this.ciudadano.propiedades);
          this.otra = null;
          this.feedback = null;
        } else {
          this.feedback = 'Debes establecer una propiedad';
        }
      },
      borrarPropiedad(prop) {
        this.ciudadano.propiedades = this.ciudadano.propiedades.filter(propiedad => {
          return propiedad !== prop;
        });
      }
    }
    ,
    created() {
      this.data = this.$route.params.id_ciudadano;
      let ref = db.collection('ciudadano').where('usuario', '==', this.$route.params.id_ciudadano);
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.ciudadano = doc.data();
          this.ciudadano.id = doc.id;
          console.log(this.ciudadano);
        })
      })

    }
  }
</script>

<style scoped>
  .relativo {
    margin: 1.5rem auto;
    position: relative;
  }

  .delete {
    position: absolute;
    right: 0;
    bottom: 1rem;
    color: #aaa;
    font-size: 1.4rem;
    cursor: pointer;
  }
</style>
