<template>
    <div id="ver-atestados" v-if="cargado">
      <div class="nuevo">
          <i class="fas fa-plus-circle" style="color: #17a2b8; font-size: 4rem;" v-on:click.prevent="nuevoAtestado"></i>
      </div>
      <div class="volver">
        <i class="fas fa-arrow-circle-left" style="color: #17a2b8; font-size: 4rem;" v-on:click.prevent="volverAtras"></i>
      </div>
      <div class="card" style="width: 18rem;" v-for="atestado in atestados" :key="atestado.id">
        <div class="card-body">
          <h5 class="card-title">{{atestado.titulo}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ atestado.lugar }}</h6>
          <p class="card-text">{{ atestado.descripcionBreve }}</p>
          <a class="card-link clicker" v-on:click.prevent="verAtestado(atestado.id)" style="color: #17a2b8;">ver más</a>
        </div>
      </div>
    </div>
</template>

<script>
  import db from '../../../firebase/init';
    export default {
        name: "verAtestados",
      data() {
          return {
            datos: null,
            atestados: [],
            cargado: false
          }
      },
      methods: {
          volverAtras(){
            this.$router.push({ name: 'policia', params: {id_policia: this.datos}});
          },
        verAtestado(id) {
            this.$router.push({name: 'verAtestado', params: {id_atestado: id, id_policia: this.datos }});
        },
        nuevoAtestado() {
            this.$router.push({name: 'nuevoAtestado', params: {id_policia: this.datos}})
        }
      },
      created() {
          this.datos = this.$route.params.id_policia;
        db.collection('atestado').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.data(), doc.id);
              let atestado = doc.data();
              atestado.id = doc.id;
              this.atestados.push(atestado);
            });
            this.cargado = true;
          })
      }
    }
</script>

<style scoped>
  #ver-atestados{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin: 4rem 2rem 6rem 2rem;
    text-align: center;
  }
  .nuevo {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
  }
  .volver {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    cursor: pointer;
  }
  .clicker {
    text-decoration: underline !important;
    cursor: pointer;
    color: deepskyblue !important;
  }
</style>
