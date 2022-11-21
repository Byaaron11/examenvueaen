<template>
  <div class="container-fluid">
    <div v-if="cubo" class="card mb-3" style="max-width: auto;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="cubo.imagen" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{cubo.nombre}}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Marca: {{cubo.marca}}</li>
                <li class="list-group-item">Modelo: {{cubo.modelo}}</li>
                <li class="list-group-item">Color: {{cubo.color}}</li>
                <li class="list-group-item">Valoración: {{cubo.valoracion}}⭐</li>
              </ul>
              <p class="card-text mt-3"><b>Precio: {{cubo.precio}}€</b></p>
              <button class="btn btn-success" @click="realizarPedido()">Comprar</button><br/>
              <h5 v-if="mensaje" class="text-success">{{mensaje}}</h5>
              <hr/>
              <b>Comentarios:</b><br/>
              
              <div v-for="com in comentarios" :key="com">
                <p>- {{com.comentario}}</p>
                <p class="text-muted">{{com.fechaComentario}}</p>
              </div>
            </div>
          </div>    
          <router-link to="/" class="btn btn-secondary">Volver</router-link>
        </div>
    </div>
</div>
</template>

<script>
import CuboService from './../../services/CubosService';
const service = new CuboService();
export default {
    name: "DetalleCubo",
    data(){
        return{
            idCubo: null,
            cubo: {},
            comentarios: [],
            mensaje: null,
        }
    },
    methods: {
        loadCubo(id){
            service.getCuboById(id).then(res=>{
                this.cubo = res;
            });
        },
        loadComentarios(){
            service.getComentarios(this.idCubo).then(res=>{
                this.comentarios = res
            })
        }
    },
    mounted() {
        if(this.$route.params.id != null){
            this.idCubo = this.$route.params.id;
            this.loadCubo(this.idCubo);
        }
    }
}
</script>
