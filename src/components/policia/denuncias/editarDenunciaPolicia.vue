<template>
  <div class="editar-denuncia" v-if="denuncia">
    <div class="container">
      <hr>
      <i class="fas fa-file-alt" style="font-size: 7rem; color: #007bff;"></i>
      <hr>
      <form>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="titulo">Titulo: </label>
              <input type="text" id="titulo" name="titulo" v-model="denuncia.titulo"
                     placeholder="Introduce el titulo">
            </div>
            <div class="form-group">
              <label for="contenido">Contenido</label>
              <textarea class="form-control rounded-0" id="contenido" rows="3" v-model="denuncia.contenido"
                        placeholder="Introduce el contenido/descripción"></textarea>
            </div>
            <div class="form-group">
              <label for="importancia">Importancia: </label>
              <select id="importancia" name="importancia" v-model="denuncia.importancia">
                <option v-for="importancia in importancias">{{ importancia }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="tipoDenuncia">Tipo de denuncia: </label>
              <select id="tipoDenuncia" v-model="denuncia.tipo">
                <option v-for="tipo in tipos">{{ tipo }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="denunciado">Persona denunciada: </label>
              <input type="text" id="denunciado" v-model="denuncia.denunciado"
                     placeholder="DNI del denunciado">
            </div>
            <div class="form-group">
              <label for="urlImagen">Url imagen: </label>
              <input type="text" id="urlImagen" v-model="denuncia.imagenUrl"
                     placeholder="url de la imagen">
            </div>


          </div>
          <div class="col">
            <p>Aportes:</p>
            <div v-for="(ap, index) in denuncia.aportaciones" :key="index" class="relativo">
              <label for="aportacion">Aportación:</label>
              <input type="text" id="aportacion" v-model="denuncia.aportaciones[index]">
              <i class="fas fa-trash-alt delete" @click="borrarAportacion(ap)"></i>
            </div>
            <div class="">
              <label for="nuevaAportacion">Añadir aportación:</label>
              <input type="text" id="nuevaAportacion" v-on:keydown.enter.prevent="nuevaAportacion" v-model="otraA">
            </div>
          </div>
        </div>
      </form>
      <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="editarDenuncia">Editar Denuncia
      </button>
      <br>
      <p class="text-danger" v-if="feedback">{{ feedback }}</p>
    </div>
  </div>
</template>

<script>
  import db from '../../../firebase/init';

  export default {
    name: "editarDenunciaPolicia",
    data() {
      return {
        datos: null,
        datosId: null,
        denuncia: null,
        feedback: null,
        otraA: null,
        importancias: [
          'Leve',
          'Media',
          'Grave'
        ],
        tipos: [
          'Robo',
          'Hurto',
          'Apropiación indebida',
          'Estafa',
          'Violación',
          'Abuso',
          'Homicidio',
          'Allanamiento',
          'Secuestro'
        ],
      }
    },
    methods: {
      editarDenuncia() {
        if (this.denuncia.titulo) {
          if (this.denuncia.contenido) {
            if (this.denuncia.importancia) {
              if (this.denuncia.tipo) {
                //editar denuncia
                console.log(this.denuncia);
                db.collection('denuncia').doc(this.datosId).update(this.denuncia).then(() => {
                  this.feedback = null;
                  this.$router.push({name: 'vDenunciaP', params: {id_policia: this.datos, denunciaId: this.datosId}});
                }).catch(err => {
                  console.log(err);
                });
              } else {
                this.feedback = 'Introduce tipo.';
              }
            } else {
              this.feedback = 'Introduce importancia.';
            }
          } else {
            this.feedback = 'Introduce contenido.';
          }
        } else {
          this.feedback = 'Introduce titulo.';
        }
      },
      nuevaAportacion() {
        if (this.otraA) {
          this.denuncia.aportaciones.push(this.otraA);
          console.log(this.denuncia.aportaciones);
          this.otraA = null;
          this.feedback = null;
        } else {
          this.feedback = 'Debes establecer una propiedad';
        }
      },
      borrarPropiedad(ap) {
        this.denuncia.aportaciones = this.denuncia.aportaciones.filter(aportacion => {
          return aportacion !== ap;
        });
      }
    },
    created() {
      this.datos = this.$route.params.id_policia;
      this.datosId = this.$route.params.denunciaId;
      db.collection('denuncia').doc(this.$route.params.denunciaId).get().then(d => {
        this.denuncia = d.data();
      });
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
