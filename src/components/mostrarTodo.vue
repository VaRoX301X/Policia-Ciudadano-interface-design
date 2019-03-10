<template>
    <div id="mostrarTodo">
      <div v-if="!loaded" class="text-center">
        <b-spinner style="width: 5rem; height: 5rem;" variant="primary"></b-spinner>
        <b-spinner style="width: 5rem; height: 5rem;" variant="success"></b-spinner>
        <b-spinner style="width: 5rem; height: 5rem;" variant="primary"></b-spinner>
      </div>
      <div v-if="loaded">
        <b-table striped hover :items="policias" />
      </div>
    </div>
</template>

<script>
    export default {
        name: "mostrarTodo",
      data (){
          return {
            policias: [],
            loaded: false
          }
    },
      created() {
          this.$http.get('https://policia-ciudadano.firebaseio.com/policias.json').then(function(data){
            console.log(data.json());
            return data.json();
          }). then(function (data) {
            var policiasArray = [];
            for (let p in data){
              policiasArray.push(data[p]);
            }
            console.log(policiasArray);
            this.policias = policiasArray;
            this.loaded = true;
          })
      }

    }
</script>

<style scoped>

</style>
