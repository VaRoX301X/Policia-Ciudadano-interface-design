<template>
  <div id="loginPolicia">
    <div class="container">
      <h2>LOGIN POLICIA</h2>
      <hr>
      <font-awesome-icon icon="landmark" style="font-size: 7rem; color: #000;"></font-awesome-icon>
      <hr>
      <form>
        <div class="form-group">
          <label for="placaPolicia">Numero de placa:</label><br>
          <input type="text" class="form-control" id="placaPolicia" placeholder="Introduce tu placa de policia."
                 v-model.lazy="numeroPlaca" aria-describedby="placaHelp">
          <small id="placaHelp" class="form-text text-muted">Tu manera de logearte es con tu placa de policia.</small>
        </div>
        <div class="form-group">
          <label for="pass">Contraseña:</label><br>
          <input type="password" class="form-control" id="pass" placeholder="Introduce tu contraseña."
                 v-model.lazy="pass">
          <small id="passHelp" class="form-text text-muted">Nunca compartas tu contraseña con nadie.</small>
        </div>
        <button class="btn btn-success" v-on:click.prevent="loginPolicia">Entrar</button> <!--type="submit"-->
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginPolicia"
  }
</script>

<style scoped>

</style>
