<template>
    <div id="loginCiudadano">
      <div class="container">
        <div class="row">
          <div class="col-sm" id="izq">
            <h4>¿Ya eres usuario/a?</h4>
            <h5>¡Rellena los siguientes campos de login y entra ya!</h5>
            <br>
            <font-awesome-icon icon="user" style="font-size: 5rem;"></font-awesome-icon>
            <hr>
            <form>
              <div class="form-group">
                <label for="userlogin">User</label><br>
                <input type="text" class="form-control" id="userlogin" placeholder="Escribe Usuario" v-model.lazy="logged.user">
                <small id="loginHelp" class="form-text text-muted">Usuario: {{ logged.user }}</small>
              </div>
              <div class="form-group">
                <label for="pass">Contraseña</label><br>
                <input type="password" class="form-control" id="pass" placeholder="Password" v-model.lazy="logged.password">
                <small id="passHelp" class="form-text text-muted">Nunca compartas tu contraseña con nadie.</small>
              </div>
              <button type="submit" class="btn btn-success">Entrar</button>
            </form>
          </div>
          <div class="col-sm" id="dch">
            <h4>¿Aun no estás registrado/a?</h4>
            <h5>¡Rellena estos campos en 2 minutos y registrate ya!</h5>
            <br>
            <font-awesome-icon icon="user-plus" style="font-size: 5rem;"></font-awesome-icon>
            <hr>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginCiudadano",
      data(){
          return{
            logged: {
              user: '',
              pass: ''
            }
          }
      }
    }
</script>

<style scoped>
 #izq{
   border-right: 1px solid black;
 }
  #dch{
    border-left: 1px solid black;
  }
</style>
