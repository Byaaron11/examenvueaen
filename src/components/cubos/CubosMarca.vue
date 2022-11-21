<template>
  <div class="container-fluid">
    <h1 class="text-center text-muted">Mostrando cubos de la marca <span class="text-primary">{{this.$route.params.marca}}</span></h1>
    <div v-if="cubosMarca" class="row">
        <div v-for="cubo in cubosMarca" :key="cubo" class="card" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{cubo.nombre}}</h5>
              <p class="card-text">{{cubo.precio}}€</p>
              <router-link :to="'/detallecubo/'+ cubo.idCubo" class="btn btn-primary">Detalles</router-link>
            </div>
          </div>
    </div>
</div>
<div v-if="!cubosMarca" class="container-fluid">
    <img class="img-fluid" src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"/>
</div>

</template>

<script>
import CuboService from './../../services/CubosService';
const service = new CuboService();
export default {
    name: "CubosMarca",
    data() {
        return{
            cubosMarca: [],
        }
    },
    methods:{
        mostrarCubos(){
           if(this.$route.params.marca != null){
            service.getCuboByMarca(this.$route.params.marca).then(result=>{
                this.cubosMarca = result;
            });
        } 
        }
    },
    mounted(){
        this.mostrarCubos();
    },
    watch: {
        '$route.params.marca'(nuevo, viejo){
            if (nuevo != viejo){
                this.mostrarCubos();
            }
        }
    }
}
</script>
