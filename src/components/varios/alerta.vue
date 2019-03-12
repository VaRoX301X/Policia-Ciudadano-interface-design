<template>
  <div id="alerta" class="container">
    <b-alert show variant="primary" v-if="alertaenviada">{{ alertaenviada }}</b-alert>
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <form v-if="!alertaenviada">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" id="nombre" aria-describedby="nombreAyuda"
                   placeholder="Introduce el nombre.">
            <small id="nombreAyuda" class="form-text text-muted">Nos hará falta para contactar contigo</small>
          </div>
          <div class="form-group">
            <label for="dni">DNI:</label>
            <input type="text" class="form-control" id="dni" aria-describedby="dniAyuda"
                   placeholder="Introduce tu DNI.">
            <small id="dniAyuda" class="form-text text-muted">Nos ayudará a identificarte.</small>
          </div>
          <div class="form-group">
            <label for="titulo">Titulo:</label>
            <input type="text" class="form-control" id="titulo" aria-describedby="tituloAyuda"
                   placeholder="Introduce el titulo." v-model="tituloAlerta">
            <small id="tituloAyuda" class="form-text text-muted">Nos ayudará a ofrecerte la mejor solución.</small>
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" id="descripcion" aria-describedby="descripcionAyuda" rows="3"
                      placeholder="Describe la situación."></textarea>
            <small id="descripcionAyuda" class="form-text text-muted">Se conciso y breve, de esta forma podremos
              ayudarte lo antes posible.
            </small>
          </div>
        </form>
      </div>
      <div class="col-sm"></div>
      <button type="submit" v-if="!alertaenviada" class="btn btn-warning btn-lg btn-block" v-on:click.prevent="enviarAlerta">Enviar
        Alerta
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "alerta",
    data() {
      return {
        tituloAlerta: null,
        alertaenviada: null
      }
    },
    methods: {
      enviarAlerta() {
        this.alertaenviada = 'La alerta con titulo [' + this.tituloAlerta + '] ha sido enviada.';
        setTimeout(() => this.$router.push({ name: 'Home' }) , 2500);
      }
    }
  }
</script>

<style scoped>

</style>
