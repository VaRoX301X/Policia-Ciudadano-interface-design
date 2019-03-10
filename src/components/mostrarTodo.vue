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
        <tr v-for="ciud in ciudadanos">
          <td>{{ ciud.nombre }}</td>
          <td>{{ ciud.apellidos }}</td>
          <td>{{ ciud.edad }}</td>
          <td>{{ ciud.genero }}</td>
          <td>{{ ciud.usuario }}</td>
          <td>{{ ciud.pass }}</td>
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
        this.loaded = true;
      });

    }

  }
</script>

<style scoped>

</style>
