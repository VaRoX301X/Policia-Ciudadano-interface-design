<template>
  <div id="nuevo-atestado">
    <div class="container">
      <hr>
      <i class="fas fa-file-medical" style="font-size: 7em; color: #17a2b8;"></i>
      <hr>
      <form>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="titulo">Titulo del atestado: </label><br>
              <input type="text" id="titulo" required v-model="atestado.titulo" placeholder="Introduce titulo.">
            </div>
            <div class="form-group">
              <label for="lugar">Lugar del atestado: </label><br>
              <input type="text" id="lugar" required v-model="atestado.lugar" placeholder="Introduce lugar.">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="descripcion">Descripción del atestado: </label><br>
              <textarea class="form-control" id="descripcion" rows="3" v-model="atestado.descripcion"
                        placeholder="Introduce descripción."></textarea>
            </div>
            <div class="form-group">
              <label for="descripcionB">Descripción Breve: </label><br>
              <textarea class="form-control" id="descripcionB" rows="3" v-model="atestado.descripcionBreve"
                        placeholder="Introduce descripción breve."></textarea>
            </div>
          </div>
          <div class="col">

            <p>Personas implicadas:</p>
            <div v-for="(pers, index) in atestado.implicados" :key="index" class="relativo">
              <label for="persona">DNI: </label>
              <input type="text" id="persona" v-model="atestado.implicados[index]">
              <i class="fas fa-trash-alt delete" @click="borrarPersona(pers)"></i>
            </div>
            <div class="">
              <label for="nuevaPersona">Añadir persona:</label>
              <input type="text" id="nuevaPersona" v-on:keydown.enter.prevent="nuevaPersona" v-model="otraP">
            </div>



          </div>
          <div class="col">
            <p>Vehículos implicados:</p>
            <div v-for="(veh, index) in atestado.vehiculos" :key="index" class="relativo">
              <label for="vehiculo">Vehículo: </label>
              <input type="text" id="vehiculo" v-model="atestado.vehiculos[index]">
              <i class="fas fa-trash-alt delete" @click="borrarVehiculo(veh)"></i>
            </div>
            <div class="">
              <label for="nuevoVehiculo">Añadir vehículo:</label>
              <input type="text" id="nuevoVehiculo" v-on:keydown.enter.prevent="nuevoVehiculo" v-model="otroV">
            </div>
          </div>
        </div>

        <br>
        <button type="submit" class="btn btn-info btn-block" v-on:click.prevent="nuevoAtestado">Nuevo Atestado</button>
        <br>
        <h3 class="text-danger" v-if="feedback">{{ feedback }}</h3>
      </form>

    </div>
  </div>
</template>

<script>
  import db from '../../../firebase/init';

  export default {
    name: "nuevoAtestado",
    data() {
      return {
        datos: null,
        atestado: {
          implicados: [],
          vehiculos: [],
          descripcion: null,
          descripcionBreve: null,
          lugar: null,
          titulo: null
        },
        feedback: null,
        otraP: null,
        otroV: null
      }
    },
    methods: {
      nuevoAtestado() {
        if (this.atestado.titulo) {
          if (this.atestado.lugar) {
            if (this.atestado.descripcion) {
              if (this.atestado.descripcionBreve) {
                if (this.atestado.implicados) {
                  if (this.atestado.vehiculos){
                    db.collection('atestado').add(this.atestado).then(() => {
                      this.feedback = null;
                      this.$router.push({ name: 'atestados', params: {id_policia: this.datos} });
                    }).catch(err => {
                      console.log(err);
                    });
                  } else {
                    this.feedback = 'Introduce vehiculos implicados';
                  }
                } else {
                  this.feedback = 'Introduce personas implicadas';
                }
              } else {
                this.feedback = 'Introduce una descripción breve';
              }
            } else {
              this.feedback = 'Introduce una descripción';
            }
          } else {
            this.feedback = 'Introduce un lugar';
          }
        } else {
          this.feedback = 'Introduce un titulo';
        }
      },
      nuevaPersona() {
        if (this.otraP) {
          this.atestado.implicados.push(this.otraP);
          console.log(this.atestado.implicados);
          this.otraP = null;
          this.feedback = null;
        } else {
          this.feedback = 'Debes establecer un DNI.';
        }
      },
      nuevoVehiculo(){
        if (this.otroV) {
          this.atestado.vehiculos.push(this.otroV);
          console.log(this.atestado.vehiculos);
          this.otroV = null;
          this.feedback = null;
        } else {
          this.feedback = 'Debes establecer un Vehiculo.';
        }
      },
      borrarPersona(pers) {
        this.atestado.contactos = this.atestado.contactos.filter(persona => {
          return persona !== pers;
        });
      },
      borrarVehiculo(veh) {
        this.atestado.vehiculos = this.atestado.vehiculos.filter(vehiculo => {
          return vehiculo !== veh;
        });
      }
    },
    created() {
      this.datos = this.$route.params.id_policia;
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
