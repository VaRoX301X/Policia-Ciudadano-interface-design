<template>
    <div id="mainPage">
      <h3 class="pregunta">¿Eres policia o ciudadano?</h3>
      <div id="eleccionInicial">
        <div class="div1">
          <router-link :to="{ name: 'lCiudadano' }" tag="a">
            <div class="div2">
              CIUDADANO
              <br><br>
              <font-awesome-icon icon="walking" style="font-size: 12rem;"></font-awesome-icon>
            </div>
          </router-link>
        </div>
        <div class="div1">
          <router-link :to="{ name: 'lPolicia' }" tag="a">
            <div class="div2">
              POLICIA
              <br><br>
              <font-awesome-icon icon="business-time" style="font-size: 12rem;"></font-awesome-icon>
            </div>
          </router-link>
        </div>
      </div>
      <div class="container">
        <div class="div1" id="alerta">
          <router-link :to="{ name: 'alerta' }">
            <div class="div2">
              ALERTA DE SOCORRO
              <br><br>
              <font-awesome-icon icon="exclamation-triangle" style="font-size: 12rem;"></font-awesome-icon>
            </div>
          </router-link>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "mainPage"
    }
</script>

<style scoped>
  #eleccionInicial {
    width: 95%;
    margin: 2.5%;
    display: flex;
  }

  .div1 {
    width: 48%;
    margin: 1%;
    height: 30rem;
    display: inline-flex;
    align-items: center;
    box-shadow: 5px 10px 18px #888888;
    border-radius: 1%;
  }

  a {
    display: block;
    text-align: center;
    width: 100%;
    color: black;
  }

  .div2 {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }

  .div1 > a:hover {
    color: white;
    text-decoration: none;
  }

  .div1:hover {
    -ms-transform: scaleY(1.03);
    -webkit-transform: scaleY(1.03);
    transform: scaleY(1.03);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .div1:not(:hover) {
    -ms-transform: scaleY(1);
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .div1:nth-child(1) {
    background-color: #2ecc71;
  }

  .div1:nth-child(2) {
    background-color: #3498db;
  }
  .pregunta {
    text-align: center;
    font-size: 2.8rem;
  }
  li {
    color: red;
  }
  #alerta {
    width: 98%;
    margin: auto;
    background: darkorange;
    margin-bottom: 5%;
  }
</style>
