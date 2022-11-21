<template>
  <div class="container-fluid">
    <h1>Tienda</h1>
    <div v-if="cubos" class="row">
        <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{cubo.nombre}}</h5>
              <p class="card-text">{{cubo.precio}}€</p>
              <routerLink :to="'/detallecubo/'+cubo.idCubo" class="btn btn-primary">Detalles</routerLink>
            </div>
          </div>
    </div>
</div>
<div v-if="!cubos" class="contaier-fluid">
    <img class="img-fluid" src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"/>
</div>
</template>

<script>
import CuboService from './../../services/CubosService';
const service = new CuboService();
export default {
    name: "TiendaCubos",
    data(){
        return{
            cubos: [],
        }
    },
    mounted(){
        service.getCubos().then(res=> {
            this.cubos = res;
        })
    }
}
</script>

