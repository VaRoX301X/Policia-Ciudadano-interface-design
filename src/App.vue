<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import mainPage from "./components/mainPage";
import registrarPolicia from "./components/policia/registrarPolicia";
import mostrarTodo from "./components/mostrarTodo";
import loginCiudadano from "./components/ciudadano/loginCiudadano";
import generarDenuncia from "./components/generarDenuncia";
import loginPolicia from "./components/policia/loginPolicia";
import registrarCiudadano from "./components/ciudadano/registrarCiudadano";
import ciudadano from "./components/ciudadano/ciudadano";
import alerta from "./components/varios/alerta";
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'main-page': mainPage,
    'registrar-policia': registrarPolicia,
    'mostrar-todo': mostrarTodo,
    'login-ciudadano': loginCiudadano,
    'generar-denuncia': generarDenuncia,
    'login-policica': loginPolicia,
    'registrar-ciudadano': registrarCiudadano,
    'alerta': alerta,
    'ciudadano': ciudadano
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
