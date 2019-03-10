<template>
  <div id="mostrarTodo">
    <div v-if="!loaded" class="text-center">
      <b-spinner style="width: 5rem; height: 5rem;" variant="primary"></b-spinner>
      <b-spinner style="width: 5rem; height: 5rem;" variant="success"></b-spinner>
      <b-spinner style="width: 5rem; height: 5rem;" variant="primary"></b-spinner>
    </div>
    <div v-if="loaded">
      <h2>POLICIAS</h2>
      <table class="table table-primary">
        <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Cod. Placa</th>
          <th scope="col">Contraseña</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="poli in policias">
          <td>{{ poli.nombre }}</td>
          <td>{{ poli.apellidos }}</td>
          <td>{{ poli.numeroPlaca }}</td>
          <td>{{ poli.pass }}</td>
        </tr>
        </tbody>
      </table>
      <h2>CIUDADANOS</h2>
      <table class="table table-success">
        <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Edad</th>
          <th scope="col">Genero</th>
          <th scope="col">Usuario</th>
          <th scope="col">Contraseña</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ciudadano in ciudadanos">
          <td>{{ ciudadano.nombre }}</td>
          <td>{{ ciudadano.apellidos }}</td>
          <td>{{ ciudadano.edad }}</td>
          <td>{{ ciudadano.genero }}</td>
          <td>{{ ciudadano.usuario }}</td>
          <td>{{ ciudadano.pass }}</td>
        </tr>
        </tbody>

      </table>
      <h2>DENUNCIAS</h2>
      <table class="table table-danger">
        <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Denunciante</th>
          <th scope="col">Titulo</th>
          <th scope="col">Importancia</th>
          <th scope="col">Contenido</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="denuncia in denuncias">
          <td>{{ denuncia.fecha }}</td>
          <td>{{ denuncia.usuarioDenunciante }}</td>
          <td>{{ denuncia.titulo }}</td>
          <td>{{ denuncia.importancia }}</td>
          <td>{{ denuncia.contenido }}</td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mostrarTodo",
    data() {
      return {
        policias: [],
        ciudadanos: [],
        denuncias: [],
        loaded: false
      }
    },
    created() {
      this.$http.get('https://policia-ciudadano.firebaseio.com/policias.json').then(function (data) {
        console.log(data.json());
        return data.json();
      }).then(function (data) {
        var policiasArray = [];
        for (let p in data) {
          policiasArray.push(data[p]);
        }
        console.log(policiasArray);
        this.policias = policiasArray;
      });
      this.$http.get('https://policia-ciudadano.firebaseio.com/ciudadanos.json').then(function (data) {
        console.log(data.json());
        return data.json();
      }).then(function (data) {
        var ciudadanosArray = [];
        for (let c in data) {
          ciudadanosArray.push(data[c]);
        }
        console.log(ciudadanosArray);
        this.ciudadanos = ciudadanosArray;
      });
      this.$http.get('https://policia-ciudadano.firebaseio.com/denuncias.json').then(function (data) {
        console.log(data.json());
        return data.json();
      }).then(function (data) {
        var denunciasArray = [];
        for (let d in data) {
          denunciasArray.push(data[d]);
        }
        console.log(denunciasArray);
        this.denuncias = denunciasArray;
        this.loaded = true;
      });

    }

  }
</script>

<style scoped>

</style>
